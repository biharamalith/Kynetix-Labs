import { ContentCard } from "@/components/site/ContentCard";

interface MetricStripItem {
  label: string;
  description: string;
}

interface MetricStripProps {
  items: MetricStripItem[];
}

export const MetricStrip = ({ items }: MetricStripProps) => {
  return (
    <div className="mt-10 grid gap-4 lg:grid-cols-3">
      {items.map((item) => (
        <ContentCard key={item.label} className="p-6">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-100/60">{item.label}</p>
          <p className="mt-3 text-sm leading-7 text-white/62">{item.description}</p>
        </ContentCard>
      ))}
    </div>
  );
};
