import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/premiumContent";
import { PremiumButton } from "@/components/premium/PremiumButton";
import { cn } from "@/lib/utils";

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
        <Link to="/" className="group flex items-center gap-3" aria-label="Kynetix Labs home">
          <span className="brand-mark">
            <img src="/logo.png" alt="" className="h-9 w-9 object-contain" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-base font-semibold tracking-tight text-white">Kynetix Labs</span>
            <span className="hidden text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-cyan-200/50 sm:block">
              Industrial software studio
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 md:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
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
          <PremiumButton to="/contact" className="px-4 py-2 text-[0.7rem]" showArrow={false}>
            Start build
          </PremiumButton>
        </div>

        <button
          type="button"
          className="mobile-menu-button md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={cn("mobile-nav-panel md:hidden", isOpen && "mobile-nav-panel-open")}>
        <div className="space-y-2 px-4 pb-5 pt-2 sm:px-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link key={link.path} to={link.path} className={cn("mobile-nav-link", isActive && "mobile-nav-link-active")}>
                {link.name}
              </Link>
            );
          })}
          <PremiumButton to="/contact" className="mt-4 w-full" showArrow={false}>
            Start a project
          </PremiumButton>
        </div>
      </div>
    </header>
  );
};
