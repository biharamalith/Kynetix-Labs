const clients = [
  { name: "Nexus Corp", logo: "NEXUS" },
  { name: "Velocity Tech", logo: "VELOCITY" },
  { name: "Horizon Labs", logo: "HORIZON" },
  { name: "Apex Systems", logo: "APEX" },
  { name: "Quantum Digital", logo: "QUANTUM" },
  { name: "Atlas Cloud", logo: "ATLAS" },
  { name: "Stellar AI", logo: "STELLAR" },
  { name: "Prime Solutions", logo: "PRIME" },
];

export const TrustedBySection = () => {
  return (
    <section className="py-16 bg-card border-y border-border overflow-hidden">
      <div className="container-main mb-8">
        <p className="text-center text-muted-foreground text-sm tracking-wider uppercase">
          Trusted by Industry Leaders
        </p>
      </div>

      {/* Infinite scroll container */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10" />

        {/* Scrolling logos */}
        <div className="flex animate-scroll-left hover:[animation-play-state:paused]">
          {/* First set */}
          {clients.map((client, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-12 flex items-center justify-center"
            >
              <span className="font-display text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground transition-colors duration-300 tracking-wider">
                {client.logo}
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((client, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-12 flex items-center justify-center"
            >
              <span className="font-display text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground transition-colors duration-300 tracking-wider">
                {client.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
