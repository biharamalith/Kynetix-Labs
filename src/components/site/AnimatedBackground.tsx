export const AnimatedBackground = () => {
  return (
    // Decorative background only. Keep it aria-hidden and CSS-driven so it does not affect page content, SEO, or layout logic.
    <div className="animated-background" aria-hidden="true">
      <div className="animated-grid" />
      <div className="animated-scanline" />
      <div className="animated-orb animated-orb-one" />
      <div className="animated-orb animated-orb-two" />
      <div className="animated-noise" />
    </div>
  );
};
