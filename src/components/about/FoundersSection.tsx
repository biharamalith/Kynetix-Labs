import founderBihara from "@/assets/bihara.webp";
import founderKushad from "@/assets/kushad.webp";
import { ContentCard } from "@/components/site/ContentCard";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { PageSection } from "@/components/site/PageSection";
import { founders } from "@/lib/siteContent";

const founderImages = {
  bihara: founderBihara,
  kushad: founderKushad,
};

export const FoundersSection = () => {
  return (
    <PageSection
      eyebrow="Leadership"
      title="Focused builders behind Kynetix Labs."
      description="A small, committed team building the company step by step with clean execution and clear product thinking."
    >
      <div className="mx-auto mt-12 grid max-w-3xl gap-8 md:grid-cols-2">
        {founders.map((founder, index) => (
          <RevealOnScroll key={founder.name} delay={index * 120}>
            <ContentCard className="p-7 text-center">
              <div className="relative mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full border border-white/20 md:h-48 md:w-48">
                <img
                  src={founderImages[founder.imageKey]}
                  alt={founder.name}
                  className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{founder.name}</h3>
              <p className="mt-2 text-sm text-white/55">{founder.role}</p>
            </ContentCard>
          </RevealOnScroll>
        ))}
      </div>
    </PageSection>
  );
};
