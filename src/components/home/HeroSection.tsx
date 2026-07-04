import { HeroIntro } from "./HeroIntro";
import { HeroMedia } from "./HeroMedia";

export const HeroSection = () => {
  return (
    <section className="home-hero">
      <HeroMedia />

      <div className="container-main relative z-10">
        <div className="hero-copy-frame">
          <HeroIntro />
        </div>
      </div>
    </section>
  );
};
