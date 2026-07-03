import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MediaFrameProps {
  children: ReactNode;
  className?: string;
  label?: string;
  ariaLabel?: string;
  decorative?: boolean;
  mediaState?: string;
}

export const MediaFrame = ({ children, className, ariaLabel, decorative = false, mediaState }: MediaFrameProps) => {
  return (
    <div
      className={cn("media-frame", className)}
      role={!decorative && ariaLabel ? "img" : undefined}
      aria-label={!decorative ? ariaLabel : undefined}
      aria-hidden={decorative ? "true" : undefined}
      data-media-state={mediaState}
    >
      {children}
    </div>
  );
};
