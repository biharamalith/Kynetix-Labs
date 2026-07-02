import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { company, navLinks } from "@/lib/siteContent";
import { SiteButton } from "@/components/site/SiteButton";
import { cn } from "@/lib/utils";

const isNavLinkActive = (currentPath: string, linkPath: string) => {
  return linkPath === "/" ? currentPath === linkPath : currentPath === linkPath || currentPath.startsWith(`${linkPath}/`);
};

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 border-b transition-all duration-500",
        isScrolled
          ? "border-white/10 bg-black/70 shadow-[0_18px_70px_rgba(0,0,0,0.42)] backdrop-blur-2xl"
          : "border-transparent bg-black/20 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3" aria-label={`${company.name} home`}>
          <span className="brand-mark">
            <img src={company.logoPath} alt="" className="h-9 w-9 object-contain" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-base font-semibold tracking-tight text-white">{company.name}</span>
            <span className="hidden text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-cyan-200/50 sm:block">
              {company.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const isActive = isNavLinkActive(location.pathname, link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn("nav-pill", isActive && "nav-pill-active")}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <SiteButton to="/contact" size="sm" showArrow={false}>
            Start a project
          </SiteButton>
        </div>

        <button
          type="button"
          className="mobile-menu-button md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div id="mobile-navigation" className={cn("mobile-nav-panel md:hidden", isOpen && "mobile-nav-panel-open")}>
        <nav className="space-y-2 px-4 pb-5 pt-2 sm:px-6" aria-label="Mobile navigation">
          {navLinks.map((link) => {
            const isActive = isNavLinkActive(location.pathname, link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn("mobile-nav-link", isActive && "mobile-nav-link-active")}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
              </Link>
            );
          })}
          <SiteButton to="/contact" className="mt-4 w-full" showArrow={false}>
            Start a project
          </SiteButton>
        </nav>
      </div>
    </header>
  );
};
