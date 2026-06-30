import founderBihara from "@/assets/bihara.png";
import founderKushad from "@/assets/kushad.jpg";

const founders = [
  {
    name: "Bihara Malith",
    role: "Co-Founder",
    image: founderBihara,
  },
  {
    name: "Kushad Disanayake",
    role: "Co-Founder",
    image: founderKushad,
  },
];

export const FoundersSection = () => {
  return (
    <section className="section-padding">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="heading-section mb-4">Leadership</h2>
          <p className="body-large">
            Meet the founders driving innovation at Kynetix Labs.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className="text-center group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Photo */}
              <div className="relative mb-6 inline-block">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-colors duration-300">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                {/* Accent ring on hover */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/0 group-hover:border-primary/30 group-hover:scale-110 transition-all duration-300" />
              </div>

              {/* Name */}
              <h3 className="font-display text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                {founder.name}
              </h3>

              {/* Role */}
              <p className="text-muted-foreground text-sm mb-3">
                {founder.role}
              </p>

              {/* Accent line */}
              <div className="w-8 h-0.5 bg-primary/50 mx-auto group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
