import { homeCopy } from "@/lib/siteContent";
import { SiteButton } from "@/components/site/SiteButton";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";

const copy = homeCopy.cta;

export const CTASection = () => {
  return (
    <section className="page-section pb-24">
      <div className="container-main">
        <RevealOnScroll>
          <div className="final-cta">
            <div className="cta-grid-lines" aria-hidden="true" />
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <div className="section-eyebrow justify-center">
                <span className="section-eyebrow-dot" />
                {copy.eyebrow}
              </div>
              <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
                {copy.title}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
                {copy.description}
              </p>
              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <SiteButton to={copy.primaryAction.path}>{copy.primaryAction.label}</SiteButton>
                <SiteButton to={copy.secondaryAction.path} variant={copy.secondaryAction.variant}>
                  {copy.secondaryAction.label}
                </SiteButton>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
