import { ReactNode } from "react";
import { CursorGlow } from "@/components/premium/CursorGlow";
import { ScrollProgress } from "@/components/premium/ScrollProgress";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10 flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
};
