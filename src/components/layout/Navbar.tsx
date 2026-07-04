import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { company, navLinks } from "@/lib/siteContent";
import { cn } from "@/lib/utils";

const isNavLinkActive = (currentPath: string, linkPath: string) => {
  return linkPath === "/" ? currentPath === linkPath : currentPath === linkPath || currentPath.startsWith(`${linkPath}/`);
};

export const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn("luxury-navbar", isScrolled && "luxury-navbar-scrolled")}>
      <div className="luxury-navbar-inner">
        <Link to="/" className="luxury-brand-wordmark" aria-label={`${company.name} home`}>
          {company.name}
        </Link>

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

        <Link to="/contact" className="luxury-start-link">
          Start a project
        </Link>
      </div>
    </header>
  );
};
