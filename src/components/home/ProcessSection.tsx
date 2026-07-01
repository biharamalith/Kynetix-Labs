import { homeCopy, processSteps } from "@/lib/siteContent";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { PageSection } from "@/components/site/PageSection";

const copy = homeCopy.process;

export const ProcessSection = () => {
  return (
    <PageSection eyebrow={copy.eyebrow} title={copy.title} description={copy.description}>
      <div className="process-timeline mt-14">
        {processSteps.map((item, index) => (
          <RevealOnScroll key={item.step} delay={index * 120}>
            <article className="process-step">
              <span className="process-number">{item.step}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </PageSection>
  );
};
