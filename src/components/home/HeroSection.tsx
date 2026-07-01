import { AnimatedBackground } from "@/components/site/AnimatedBackground";
import { HeroIntro } from "./HeroIntro";
import { HeroVisual } from "./HeroVisual";

export const HeroSection = () => {
  return (
    <section className="home-hero">
      <AnimatedBackground />

      <div className="container-main relative z-10">
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <HeroIntro />
          <HeroVisual />
        </div>
      </div>
    </section>
  );
};
