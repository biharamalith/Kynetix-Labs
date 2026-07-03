import { HeroIntro } from "./HeroIntro";
import { HeroMedia } from "./HeroMedia";

export const HeroSection = () => {
  return (
    <section className="home-hero">
      <HeroMedia />

      <div className="container-main relative z-10">
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-16 text-center lg:py-24">
          <HeroIntro />
        </div>
      </div>
    </section>
  );
};
