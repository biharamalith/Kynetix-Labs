import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MediaFrameProps {
  children: ReactNode;
  className?: string;
  label?: string;
}

export const MediaFrame = ({ children, className, label }: MediaFrameProps) => {
  return (
    <div className={cn("media-frame", className)}>
      {label ? <span className="media-frame-label">{label}</span> : null}
      {children}
    </div>
  );
};
