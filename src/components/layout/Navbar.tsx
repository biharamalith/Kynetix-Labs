import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { company, navLinks } from "@/lib/siteContent";
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
    <header className={cn("luxury-navbar", isScrolled && "luxury-navbar-scrolled", isOpen && "luxury-navbar-open")}> 
      <div className="luxury-navbar-inner">
        <button
          type="button"
          className="luxury-menu-button"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="site-navigation-panel"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          <span>Menu</span>
        </button>

        <Link to="/" className="luxury-brand-wordmark" aria-label={`${company.name} home`}>
          {company.name}
        </Link>

        <Link to="/contact" className="luxury-start-link">
          Start a project
        </Link>
      </div>

      <div id="site-navigation-panel" className={cn("luxury-nav-panel", isOpen && "luxury-nav-panel-open")}>
        <nav className="luxury-nav-list" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const isActive = isNavLinkActive(location.pathname, link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn("luxury-nav-link", isActive && "luxury-nav-link-active")}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
