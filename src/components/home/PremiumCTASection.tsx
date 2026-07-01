import { PremiumButton } from "@/components/premium/PremiumButton";
import { Reveal } from "@/components/premium/Reveal";

export const PremiumCTASection = () => {
  return (
    <section className="premium-section pb-24">
      <div className="container-main">
        <Reveal>
          <div className="premium-final-cta">
            <div className="cta-grid-lines" aria-hidden="true" />
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <div className="premium-eyebrow justify-center">
                <span className="premium-eyebrow-dot" />
                Build the next Kynetix project
              </div>
              <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Turn the website into a client-winning digital showroom.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
                This foundation prepares the site for cinematic first-load effects, advanced scroll storytelling,
                interactive 3D, premium service pages, and a stronger conversion flow.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <PremiumButton to="/contact">Plan a project</PremiumButton>
                <PremiumButton to="/about" variant="outline">
                  Learn about Kynetix
                </PremiumButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
