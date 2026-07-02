import { Link } from "react-router-dom";
import { Mail, MapPin, Radar } from "lucide-react";
import { company, footerLinks } from "@/lib/siteContent";

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-white/10 bg-[#030507]">
      <div className="footer-glow" aria-hidden="true" />
      <div className="container-main relative z-10 py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.9fr_0.7fr]">
          <div>
            <Link to="/" className="mb-5 flex items-center gap-3" aria-label={`${company.name} home`}>
              <span className="brand-mark">
                <img src={company.logoPath} alt="" className="h-10 w-10 object-contain" />
              </span>
              <span>
                <span className="block font-display text-xl font-semibold text-white">{company.name}</span>
                <span className="block text-xs uppercase tracking-[0.25em] text-cyan-200/50">{company.footerTagline}</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-7 text-white/60">
              Kinetic software systems for companies that need precise interfaces, controlled workflows, and launch-ready digital operations.
            </p>
            <div className="mt-7 grid gap-3 text-sm text-white/60">
              <a href={`mailto:${company.email}`} className="footer-contact-link">
                <Mail className="h-4 w-4" />
                {company.email}
              </a>
              <span className="footer-contact-link">
                <MapPin className="h-4 w-4" />
                {company.location}
              </span>
            </div>
          </div>

          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Capabilities" links={footerLinks.services} />
          <FooterColumn title="Build" links={footerLinks.build} />
          <FooterColumn title="Legal" links={footerLinks.legal} />
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <span className="inline-flex items-center gap-2">
              <Radar className="h-4 w-4 text-cyan-200/60" />
Built for precise digital systems
            </span>
            <Link to="/contact" className="hover:text-cyan-200">
Request a project brief
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterColumnProps {
  title: string;
  links: Array<{ name: string; path: string }>;
}

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div>
      <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <Link to={link.path} className="text-sm text-white/50 transition-colors duration-300 hover:text-cyan-200">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
