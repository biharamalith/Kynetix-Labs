import {
  BarChart3,
  Boxes,
  Building2,
  ClipboardCheck,
  CreditCard,
  FileText,
  LockKeyhole,
  ReceiptText,
  ShieldCheck,
  ShoppingCart,
  Store,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { routes } from "@/config/routes";

export interface SmartPosModule {
  id: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  capabilities: string[];
}

export interface SmartPosWorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface SmartPosBuildStage {
  label: string;
  title: string;
  description: string;
  outputs: string[];
}

export interface SmartPosOutcome {
  label: string;
  description: string;
}

export const smartPosRoute = routes.smartPos;

export const smartPosContent = {
  status: "Pilot-ready product direction",
  category: "Retail operations system",
  hero: {
    eyebrow: "Smart POS Suite",
    title: "A retail operating system for checkout, stock control, staff roles, and owner visibility.",
    description:
      "Smart POS Suite is a product direction Kynetix Labs can shape into a scoped pilot or custom retail build. It focuses on practical store workflows instead of pretending every feature is already packaged for every business.",
    primaryAction: { label: "Plan a Smart POS pilot", path: routes.contact },
    secondaryAction: { label: "View all product directions", path: routes.products, variant: "outline" as const },
  },
  positioning: {
    eyebrow: "Retail clarity",
    title: "Designed around the daily decisions store owners actually make.",
    description:
      "The system direction connects checkout activity, stock movement, staff accountability, and sales summaries so a retailer can understand what happened without checking separate spreadsheets or message threads.",
  },
  modules: {
    eyebrow: "Product modules",
    title: "Four core modules form the first serious Smart POS scope.",
    description:
      "Each module is intentionally practical. The first release should prove checkout speed, inventory awareness, safe staff access, and readable management reporting before expanding into deeper retail intelligence.",
  },
  workflow: {
    eyebrow: "Store workflow",
    title: "From sale to decision without losing operational context.",
    description:
      "A strong POS product should not stop at billing. It should preserve the operational trail from the sale, through inventory movement and staff action, into management insight.",
  },
  buildPlan: {
    eyebrow: "Build readiness",
    title: "A safe product path without fake launch claims.",
    description:
      "Smart POS Suite should move through a controlled pilot plan: confirm the store workflow, design the screens, build the core flows, validate with real operators, then expand only after the first usage proof is clear.",
  },
  cta: {
    eyebrow: "Plan the pilot",
    title: "Have a retail workflow that needs a cleaner POS system?",
    description:
      "Share the store type, current billing process, stock problems, staff roles, reporting needs, and launch timeline. Kynetix can turn that into a realistic Smart POS build plan.",
    action: { label: "Start Smart POS brief", path: routes.contact },
  },
};

export const smartPosOutcomes: SmartPosOutcome[] = [
  {
    label: "Faster checkout clarity",
    description: "Billing screens, item search, discounts, and receipt states can be shaped around the store's real counter flow.",
  },
  {
    label: "Better stock awareness",
    description: "Sales and inventory movement can stay connected so owners see low-stock and movement patterns earlier.",
  },
  {
    label: "Safer staff control",
    description: "Role-based screens and activity states help separate cashier, manager, and owner responsibilities.",
  },
  {
    label: "Readable sales intelligence",
    description: "Daily summaries, top items, category movement, and exceptions can become owner-friendly decisions, not raw export files.",
  },
];

export const smartPosModules: SmartPosModule[] = [
  {
    id: "checkout-receipts",
    icon: ReceiptText,
    title: "Checkout and receipts",
    summary: "A focused billing flow for item selection, discounts, order totals, receipt states, and clear cashier actions.",
    capabilities: ["Item search and quick actions", "Discount and adjustment states", "Receipt and order summary", "Counter-friendly screen flow"],
  },
  {
    id: "inventory-control",
    icon: Boxes,
    title: "Inventory control",
    summary: "Stock movement views that connect sales with available quantity, low-stock awareness, and basic product control.",
    capabilities: ["Product and category lists", "Stock movement history", "Low-stock indicators", "Inventory adjustment trail"],
  },
  {
    id: "staff-access",
    icon: UsersRound,
    title: "Staff roles and actions",
    summary: "Role-aware access for cashier, manager, and owner workflows so sensitive actions are not mixed into every screen.",
    capabilities: ["Role-based navigation", "Manager approval states", "Staff activity summaries", "Sensitive action boundaries"],
  },
  {
    id: "sales-intelligence",
    icon: BarChart3,
    title: "Sales intelligence",
    summary: "Readable reporting direction for daily sales, top items, payment summaries, and retail performance trends.",
    capabilities: ["Daily sales summaries", "Top item and category views", "Payment and refund visibility", "Owner dashboard direction"],
  },
];

export const smartPosWorkflow: SmartPosWorkflowStep[] = [
  {
    step: "01",
    title: "Sell",
    description: "The cashier completes a fast, understandable sale flow with clear totals, item states, and receipt output.",
  },
  {
    step: "02",
    title: "Update stock",
    description: "The sale creates inventory movement so stock awareness improves without a separate manual update step.",
  },
  {
    step: "03",
    title: "Control access",
    description: "Staff roles keep sensitive manager and owner actions separate from normal counter operations.",
  },
  {
    step: "04",
    title: "Review performance",
    description: "Owners review daily summaries, exceptions, and top-moving items to make better operational decisions.",
  },
];

export const smartPosBuildPlan: SmartPosBuildStage[] = [
  {
    label: "Discovery",
    title: "Map the store workflow",
    description: "Capture checkout steps, product types, inventory pain points, staff roles, reporting expectations, and rollout constraints.",
    outputs: ["Workflow map", "Role matrix", "Core feature scope", "Pilot success criteria"],
  },
  {
    label: "Prototype",
    title: "Design the retail interface",
    description: "Create the cashier, manager, and owner screen direction before committing to full development.",
    outputs: ["Clickable screen flow", "Dashboard layout", "Receipt states", "Operator feedback list"],
  },
  {
    label: "Pilot build",
    title: "Build the first usable system",
    description: "Implement the selected checkout, inventory, role, and reporting flows needed for a controlled pilot.",
    outputs: ["Working POS flow", "Inventory records", "Staff access boundaries", "Sales summary screens"],
  },
  {
    label: "Improve",
    title: "Expand only after usage proof",
    description: "Use real operator feedback and business data to decide whether to add deeper analytics, integrations, or multi-branch support.",
    outputs: ["Pilot review", "Backlog priorities", "Integration plan", "Expansion roadmap"],
  },
];

export const smartPosVisualPanels = [
  { icon: ShoppingCart, label: "Checkout", value: "Counter flow" },
  { icon: Boxes, label: "Stock", value: "Movement trail" },
  { icon: LockKeyhole, label: "Roles", value: "Safe access" },
  { icon: BarChart3, label: "Reports", value: "Owner view" },
  { icon: CreditCard, label: "Payments", value: "Summary ready" },
  { icon: FileText, label: "Receipts", value: "Clear states" },
];

export const smartPosTrustSignals = [
  { icon: Store, label: "Built for retail workflow", description: "Scope starts from store operations, not a generic dashboard template." },
  { icon: ShieldCheck, label: "Role-safe by design", description: "Cashier, manager, and owner actions can stay separated from the first plan." },
  { icon: Building2, label: "Pilot before scale", description: "The product path proves one retail workflow before adding heavier features." },
  { icon: ClipboardCheck, label: "Clear handover", description: "Build stages define what the buyer receives at each product decision point." },
];
