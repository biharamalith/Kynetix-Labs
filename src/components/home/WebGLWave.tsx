import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const WebGLWave: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    
    // Scene Setup
    const scene = new THREE.Scene();
    
    // Camera Setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 120;
    
    // Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Particles Data
    const particleCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    const range = 250;
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * range;
      positions[i * 3 + 1] = (Math.random() - 0.5) * range;
      positions[i * 3 + 2] = (Math.random() - 0.5) * range;

      velocities.push({
        x: (Math.random() - 0.5) * 0.15,
        y: (Math.random() - 0.5) * 0.15,
        z: (Math.random() - 0.5) * 0.15,
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle Material
    const material = new THREE.PointsMaterial({
      color: 0x3b82f6, // Primary blue
      size: 1.5,
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Lines for the "Network" effect
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x4f46e5, // Indigo tint
      transparent: true,
      opacity: 0.15,
    });
    
    // We'll dynamically generate line geometry in the animation loop
    const lineGeometry = new THREE.BufferGeometry();
    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(linesMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const maxConnectionDistance = 35; // How close particles need to be to connect

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Rotate whole scene slightly based on mouse
      scene.rotation.x += (mouseY * 0.05 - scene.rotation.x) * 0.05;
      scene.rotation.y += (mouseX * 0.05 - scene.rotation.y) * 0.05;
      
      // Auto-rotation
      particles.rotation.y += 0.0005;
      linesMesh.rotation.y += 0.0005;
      particles.rotation.x += 0.0002;
      linesMesh.rotation.x += 0.0002;

      // Update particle positions
      const positions = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += velocities[i].x;
        positions[i * 3 + 1] += velocities[i].y;
        positions[i * 3 + 2] += velocities[i].z;

        // Bounce off invisible boundary
        if (Math.abs(positions[i * 3]) > range / 2) velocities[i].x *= -1;
        if (Math.abs(positions[i * 3 + 1]) > range / 2) velocities[i].y *= -1;
        if (Math.abs(positions[i * 3 + 2]) > range / 2) velocities[i].z *= -1;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Update network lines
      const linePositions = [];
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < maxConnectionDistance * maxConnectionDistance) {
            linePositions.push(
              positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
              positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
            );
          }
        }
      }
      
      linesMesh.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-[#030712] overflow-hidden">
      {/* Three.js canvas container */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-50"
      />
      {/* subtle radial gradient overlay to fade the edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#030712_100%)] pointer-events-none" />
    </div>
  );
};
