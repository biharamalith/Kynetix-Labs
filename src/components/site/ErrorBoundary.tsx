import { Component, ErrorInfo, ReactNode } from "react";
import { SiteButton } from "./SiteButton";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) {
      // Keep production clean while still helping local debugging.
      console.error("Kynetix page render failed", error, info);
    }
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <main className="grid min-h-screen place-items-center bg-background px-6 text-center text-foreground">
        <div className="max-w-xl rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
          <p className="section-eyebrow justify-center">
            <span className="section-eyebrow-dot" />
            Something went wrong
          </p>
          <h1 className="mt-5 font-display text-3xl font-semibold text-white">This page could not be loaded.</h1>
          <p className="mt-4 text-sm leading-7 text-white/60">
            Please refresh the page or return home. The issue can be reviewed from local development logs.
          </p>
          <div className="mt-8 flex justify-center">
            <SiteButton to="/" showArrow={false}>Go home</SiteButton>
          </div>
        </div>
      </main>
    );
  }
}
