import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ValueListProps {
  title?: string;
  items: string[];
  className?: string;
  columns?: "one" | "two";
}

export const ValueList = ({ title, items, className, columns = "one" }: ValueListProps) => {
  return (
    <div className={className}>
      {title && <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-cyan-100/60">{title}</h4>}
      <ul className={cn("grid gap-3", columns === "two" && "sm:grid-cols-2")}>
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/62">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
