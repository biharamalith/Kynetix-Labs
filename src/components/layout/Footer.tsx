import { Link } from "react-router-dom";

const footerLinks = {
  company: [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Insights", path: "/blog" },
  ],
  services: [
    { name: "Mobile Development", path: "/services#mobile" },
    { name: "Web & Cloud", path: "/services#web" },
    { name: "AI Integration", path: "/services#ai" },
    { name: "Smart POS", path: "/products" },
  ],
  connect: [
    { name: "Contact", path: "/contact" },
    { name: "LinkedIn", path: "#" },
    { name: "GitHub", path: "#" },
    { name: "Twitter", path: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-main section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Kynetix Labs Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="font-display font-semibold text-lg tracking-tight">Kynetix Labs</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              A premier technology partner and innovation engine dedicated to accelerating intelligence.
            </p>
            <div className="accent-line" />
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Kynetix Labs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
