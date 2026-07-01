import { Link } from "react-router-dom";
import { Mail, MapPin, Radar } from "lucide-react";
import { footerLinks } from "@/lib/premiumContent";

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-white/10 bg-[#030507]">
      <div className="footer-glow" aria-hidden="true" />
      <div className="container-main relative z-10 py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.9fr]">
          <div>
            <Link to="/" className="mb-5 flex items-center gap-3">
              <span className="brand-mark">
                <img src="/logo.png" alt="" className="h-10 w-10 object-contain" />
              </span>
              <span>
                <span className="block font-display text-xl font-semibold text-white">Kynetix Labs</span>
                <span className="block text-xs uppercase tracking-[0.25em] text-cyan-200/50">Kinetic digital engineering</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-7 text-white/60">
              Premium mobile, web, cloud, IoT, POS, and AI-enabled software systems for businesses that need
              industrial-quality digital execution.
            </p>
            <div className="mt-7 grid gap-3 text-sm text-white/60">
              <a href="mailto:biharaanjana2019@gmail.com" className="footer-contact-link">
                <Mail className="h-4 w-4" />
                biharaanjana2019@gmail.com
              </a>
              <span className="footer-contact-link">
                <MapPin className="h-4 w-4" />
                Colombo, Sri Lanka
              </span>
            </div>
          </div>

          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Capabilities" links={footerLinks.services} />
          <FooterColumn title="Build" links={footerLinks.build} />
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Kynetix Labs. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <span className="inline-flex items-center gap-2">
              <Radar className="h-4 w-4 text-cyan-200/60" />
              Premium website branch 1 foundation
            </span>
            <Link to="/contact" className="hover:text-cyan-200">
              Request project discussion
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
