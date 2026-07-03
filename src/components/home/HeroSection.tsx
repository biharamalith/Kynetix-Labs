import { AnimatedBackground } from "@/components/site/AnimatedBackground";
import { HeroIntro } from "./HeroIntro";
import { HeroMedia } from "./HeroMedia";

export const HeroSection = () => {
  return (
    <section className="home-hero">
      <AnimatedBackground />
      <HeroMedia />

      <div className="container-main relative z-10">
        <div className="flex min-h-[calc(100vh-4rem)] items-center py-16 lg:py-24">
          <div className="w-full max-w-4xl">
            <HeroIntro />
          </div>
        </div>
      </div>
    </section>
  );
};