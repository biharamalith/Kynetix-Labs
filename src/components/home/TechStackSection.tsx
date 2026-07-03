import { CheckCircle2 } from "lucide-react";
import { engineeringSignals, homeCopy } from "@/lib/siteContent";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";

const copy = homeCopy.engineering;

export const TechStackSection = () => {
  return (
    <section className="page-section page-section-muted">
      <div className="container-main">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <RevealOnScroll>
            <div className="section-eyebrow">
              <span className="section-eyebrow-dot" />
              {copy.eyebrow}
            </div>
            <h2 className="page-section-title mt-5">{copy.title}</h2>
            <p className="page-section-description mt-5">
              {copy.description}
            </p>
          </RevealOnScroll>

          <div className="grid gap-4 sm:grid-cols-2">
            {engineeringSignals.map((signal, index) => {
              const Icon = signal.icon;
              return (
                <RevealOnScroll key={signal.label} delay={index * 85}>
                  <div className="signal-card">
                    <div className="feature-icon-box">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span>{signal.label}</span>
                    <CheckCircle2 className="ml-auto h-4 w-4 text-white/70" />
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
