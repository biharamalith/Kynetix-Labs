import { z } from "zod";
import {
  projectBriefBudgetRanges,
  projectBriefFieldLimits,
  projectBriefProjectTypes,
  projectBriefTimelineOptions,
} from "@/content/contact";

export const projectBriefFormName = "project-brief";
export const projectBriefHoneypotName = "bot-field";

export type ProjectBriefProjectType = (typeof projectBriefProjectTypes)[number]["id"];
export type ProjectBriefBudgetRange = (typeof projectBriefBudgetRanges)[number]["id"];
export type ProjectBriefTimeline = (typeof projectBriefTimelineOptions)[number]["id"];

export interface ProjectBriefFormData {
  name: string;
  email: string;
  company: string;
  projectType: ProjectBriefProjectType | "";
  budgetRange: ProjectBriefBudgetRange | "";
  timeline: ProjectBriefTimeline | "";
  businessGoal: string;
  message: string;
  botField: string;
  startedAt: string;
}

export type ProjectBriefFieldName = keyof ProjectBriefFormData;
export type ProjectBriefErrors = Partial<Record<ProjectBriefFieldName | "form", string>>;

const projectTypeIds = projectBriefProjectTypes.map((option) => option.id);
const budgetRangeIds = projectBriefBudgetRanges.map((option) => option.id);
const timelineIds = projectBriefTimelineOptions.map((option) => option.id);

const isAllowedOption = (value: string, allowedValues: readonly string[]) => allowedValues.includes(value);
const optionalTrimmedText = (maxLength: number, message: string) => z.string().trim().max(maxLength, message).optional();

const projectBriefSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(projectBriefFieldLimits.nameMax, "Name is too long."),
  email: z.string().trim().email("Please enter a valid email address."),
  company: optionalTrimmedText(projectBriefFieldLimits.companyMax, "Company name is too long."),
  projectType: z.string().trim().refine((value) => isAllowedOption(value, projectTypeIds), "Choose a project type."),
  budgetRange: z.string().trim().refine((value) => isAllowedOption(value, budgetRangeIds), "Choose a budget range."),
  timeline: z.string().trim().refine((value) => isAllowedOption(value, timelineIds), "Choose a timeline."),
  businessGoal: z
    .string()
    .trim()
    .min(12, "Tell us the business goal in a little more detail.")
    .max(projectBriefFieldLimits.goalMax, "Business goal is too long."),
  message: optionalTrimmedText(projectBriefFieldLimits.messageMax, "Extra details are too long."),
  botField: z.string().trim().max(0, "Submission could not be verified."),
  startedAt: z.string().trim().min(1, "Submission could not be verified."),
});

export type ProjectBriefSubmission = z.infer<typeof projectBriefSchema>;

export const createInitialProjectBriefFormData = (): ProjectBriefFormData => ({
  name: "",
  email: "",
  company: "",
  projectType: "",
  budgetRange: "",
  timeline: "",
  businessGoal: "",
  message: "",
  botField: "",
  startedAt: String(Date.now()),
});

const mapValidationErrors = (errors: z.ZodIssue[]): ProjectBriefErrors => {
  const fieldErrors: ProjectBriefErrors = {};

  for (const error of errors) {
    const fieldName = error.path[0] as ProjectBriefFieldName | undefined;
    if (fieldName && !fieldErrors[fieldName]) {
      fieldErrors[fieldName] = error.message;
    }
  }

  return fieldErrors;
};

export const validateProjectBriefForm = (
  data: ProjectBriefFormData,
  submittedAt = Date.now(),
): { success: true; data: ProjectBriefSubmission } | { success: false; errors: ProjectBriefErrors } => {
  const parsed = projectBriefSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, errors: mapValidationErrors(parsed.error.errors) };
  }

  const startedAt = Number(parsed.data.startedAt);
  const isStartedAtValid = Number.isFinite(startedAt) && startedAt > 0;
  const isTooFast = isStartedAtValid && submittedAt - startedAt < projectBriefFieldLimits.minSubmitAgeMs;

  if (!isStartedAtValid || isTooFast) {
    return {
      success: false,
      errors: { form: "Submission could not be verified. Please try again." },
    };
  }

  return { success: true, data: parsed.data };
};

export const encodeProjectBriefSubmission = (data: ProjectBriefSubmission) =>
  new URLSearchParams({
    "form-name": projectBriefFormName,
    [projectBriefHoneypotName]: "",
    name: data.name,
    email: data.email,
    company: data.company ?? "",
    projectType: data.projectType,
    budgetRange: data.budgetRange,
    timeline: data.timeline,
    businessGoal: data.businessGoal,
    message: data.message ?? "",
    startedAt: data.startedAt,
  }).toString();
