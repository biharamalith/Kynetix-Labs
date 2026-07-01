import React, { useEffect, useRef } from 'react';

const vertexShaderSource = `
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision mediump float;
  varying vec2 v_uv;
  uniform float u_time;
  uniform vec2 u_resolution;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                       -0.577350269189626,  // -1.0 + 2.0 * C.x
                        0.024390243902439); // 1.0 / 41.0
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);

    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;

    i = mod289(i);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));

    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;

    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 p = v_uv;
    
    float time = u_time * 0.15;
    
    // 1. Large smooth warping of coordinates to create silky folds
    float warpX = snoise(vec2(p.y * 1.2, time * 0.4)) * 0.4;
    float warpY = snoise(vec2(p.x * 1.2, time * 0.4 + 100.0)) * 0.4;
    
    vec2 warped = p + vec2(warpX, warpY);
    
    // 2. Define the major sweeping bands (curves)
    // A large sweeping curve on the left side
    float band1 = smoothstep(0.5, 0.0, abs(warped.x - 0.2 + warped.y * 0.2));
    // Fill in the left edge completely
    band1 += smoothstep(0.3, 0.0, warped.x - 0.1 + warped.y * 0.1);
    
    // A second curve sweeping across the bottom right
    float band2 = smoothstep(0.6, 0.0, abs(warped.x + warped.y * 0.5 - 1.2));
    
    // 3. Combine them with some subtle high-frequency noise for texture
    float n = snoise(warped * 2.5 - time * 1.5);
    
    float intensity = max(band1, band2 * 0.9) + (n * 0.05);
    
    // 4. Color grading (matching the ethereal deep blue/purple/cyan aesthetic)
    vec3 bgBlue = vec3(0.012, 0.015, 0.04); // Deepest dark space background
    vec3 deepBlue = vec3(0.02, 0.08, 0.35); // Dark blue fringe
    vec3 vibrantBlue = vec3(0.1, 0.25, 0.9); // Main glowing blue
    vec3 softCyan = vec3(0.0, 0.0, 0.0);    // Core highlight turned black as requested
    
    vec3 color = bgBlue;
    color = mix(color, deepBlue, smoothstep(0.05, 0.3, intensity));
    color = mix(color, vibrantBlue, smoothstep(0.3, 0.65, intensity));
    color = mix(color, softCyan, smoothstep(0.65, 1.0, intensity));
    
    // Darken the center slightly to ensure text legibility
    float centerMask = smoothstep(0.0, 0.7, length(v_uv - vec2(0.5, 0.4)));
    color = mix(color, bgBlue, (1.0 - centerMask) * 0.4);

    gl_FragColor = vec4(color, 1.0);
  }
`;

export const WebGLWave: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext;
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const vertices = new Float32Array([
      -1, -1,
      1, -1,
      -1, 1,
      -1, 1,
      1, -1,
      1, 1,
    ]);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const timeLocation = gl.getUniformLocation(program, 'u_time');
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');

    let animationFrameId: number;
    const startTime = performance.now();

    const resizeCanvas = () => {
      // Use slightly lower resolution for better performance on soft blurry things
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const render = (time: number) => {
      const uTime = (time - startTime) * 0.001;
      gl.uniform1f(timeLocation, uTime);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);

      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(positionBuffer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-80"
    />
  );
};
