import { ReactNode } from "react";
import { MotionLayer } from "@/components/site/MotionLayer";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Shared accessibility and motion helpers live here so every route gets the same behavior. */}
      <a href="#main-content" className="skip-link">Skip to content</a>
      <MotionLayer />
      <Navbar />
      <main id="main-content" className="relative z-10 flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
};
