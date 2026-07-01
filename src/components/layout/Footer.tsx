import { Link } from "react-router-dom";

const footerLinks = {
  company: [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },

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
    <footer className="bg-[#030712] border-t border-white/5 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 w-full h-[300px] bg-primary/5 rounded-full blur-[150px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container-main section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img 
                src="/logo.png" 
                alt="Kynetix Labs Logo" 
                className="h-10 w-10 object-contain transition-transform duration-500 group-hover:scale-110"
              />
              <span className="font-display font-bold text-2xl tracking-wide text-white group-hover:text-primary transition-colors">
                Kynetix Labs
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
              A premier technology partner and innovation engine dedicated to accelerating intelligence. We engineer systems that outlast the trend.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg tracking-wider mb-6 text-white">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300 text-sm font-light"
                  >
                    <span className="w-0 h-[1px] bg-primary mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg tracking-wider mb-6 text-white">
              Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300 text-sm font-light"
                  >
                    <span className="w-0 h-[1px] bg-primary mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="text-lg tracking-wider mb-6 text-white">
              Connect
            </h4>
            <ul className="space-y-4">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300 text-sm font-light"
                  >
                    <span className="w-0 h-[1px] bg-primary mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs font-light">
            © {new Date().getFullYear()} Kynetix Labs. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="#" className="text-gray-500 hover:text-white transition-colors text-xs font-light tracking-wide uppercase">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-500 hover:text-white transition-colors text-xs font-light tracking-wide uppercase">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
