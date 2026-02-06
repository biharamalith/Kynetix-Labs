const technologies = [
  { category: "Framework", items: ["Next.js 16", "React Server Components", "App Router"] },
  { category: "Language", items: ["TypeScript", "ES2024+"] },
  { category: "Styling", items: ["Tailwind CSS 4.0", "shadcn/ui"] },
  { category: "Data", items: ["TanStack Query", "Zustand"] },
  { category: "Performance", items: ["Edge Runtime", "WebP/AVIF", "CDN"] },
  { category: "Deployment", items: ["Vercel", "AWS", "Docker"] },
];

export const TechStackSection = () => {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="accent-line mb-6" />
            <h2 className="heading-section mb-4">Modern Technology Stack</h2>
            <p className="body-large mb-8">
              We build with cutting-edge technologies to ensure your products 
              are performant, scalable, and future-proof.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {technologies.map((tech) => (
                <div key={tech.category}>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                    {tech.category}
                  </h4>
                  <ul className="space-y-1">
                    {tech.items.map((item) => (
                      <li key={item} className="text-muted-foreground text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto">
              {/* Background glow */}
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-[80px]" />
              
              {/* Tech visual */}
              <div className="relative h-full flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border border-border bg-card/50 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border border-border bg-background flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border border-primary/50 bg-primary/10 flex items-center justify-center animate-pulse-glow">
                      <div className="font-display text-4xl font-bold text-primary">K</div>
                    </div>
                  </div>
                </div>
                
                {/* Orbiting elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-1 bg-card border border-border rounded-full text-xs text-muted-foreground">
                  TypeScript
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 px-3 py-1 bg-card border border-border rounded-full text-xs text-muted-foreground">
                  Next.js
                </div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 px-3 py-1 bg-card border border-border rounded-full text-xs text-muted-foreground">
                  React
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 px-3 py-1 bg-card border border-border rounded-full text-xs text-muted-foreground">
                  Tailwind
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
