import { processSteps } from "@/lib/premiumContent";
import { Reveal } from "@/components/premium/Reveal";
import { SectionShell } from "@/components/premium/SectionShell";

export const PremiumProcessSection = () => {
  return (
    <SectionShell
      eyebrow="Delivery discipline"
      title={<>Premium design needs enterprise-grade engineering discipline.</>}
      description="Animations and 3D are only valuable when the codebase remains easy to change, fast to load, and safe to scale. This process keeps the site impressive without becoming messy."
    >
      <div className="process-timeline mt-14">
        {processSteps.map((item, index) => (
          <Reveal key={item.step} delay={index * 120}>
            <article className="process-step">
              <span className="process-number">{item.step}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
};
