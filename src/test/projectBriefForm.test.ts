import { describe, expect, it } from "vitest";

import { projectBriefBudgetRanges, projectBriefFieldLimits, projectBriefProjectTypes, projectBriefTimelineOptions } from "@/content/contact";
import {
  createInitialProjectBriefFormData,
  encodeProjectBriefSubmission,
  projectBriefFormName,
  validateProjectBriefForm,
  type ProjectBriefFormData,
} from "@/lib/projectBriefForm";

const createValidBrief = (): ProjectBriefFormData => ({
  ...createInitialProjectBriefFormData(),
  name: "Kushad",
  email: "kushad@example.com",
  company: "Kynetix Labs",
  projectType: projectBriefProjectTypes[0].id,
  budgetRange: projectBriefBudgetRanges[0].id,
  timeline: projectBriefTimelineOptions[0].id,
  businessGoal: "We need a production-ready project intake workflow for better qualified inquiries.",
  message: "The form should capture scope, budget, timeline, and follow-up context.",
  startedAt: "10000",
});

describe("project brief form contract", () => {
  it("validates and normalizes a complete project brief", () => {
    const result = validateProjectBriefForm(createValidBrief(), 10000 + projectBriefFieldLimits.minSubmitAgeMs + 1);

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe("Kushad");
      expect(result.data.projectType).toBe(projectBriefProjectTypes[0].id);
    }
  });

  it("rejects incomplete fields, honeypot submissions, and very fast submissions", () => {
    const incomplete = validateProjectBriefForm(createInitialProjectBriefFormData(), 20000);
    expect(incomplete.success).toBe(false);
    if (!incomplete.success) {
      expect(incomplete.errors.name).toBeDefined();
      expect(incomplete.errors.email).toBeDefined();
      expect(incomplete.errors.projectType).toBeDefined();
    }

    const botSubmission = validateProjectBriefForm({ ...createValidBrief(), botField: "spam" }, 20000);
    expect(botSubmission.success).toBe(false);
    if (!botSubmission.success) {
      expect(botSubmission.errors.botField).toBeDefined();
    }

    const fastSubmission = validateProjectBriefForm(createValidBrief(), 10000 + projectBriefFieldLimits.minSubmitAgeMs - 1);
    expect(fastSubmission.success).toBe(false);
    if (!fastSubmission.success) {
      expect(fastSubmission.errors.form).toBeDefined();
    }
  });

  it("encodes Netlify-compatible project brief submissions", () => {
    const result = validateProjectBriefForm(createValidBrief(), 12000);
    expect(result.success).toBe(true);

    if (result.success) {
      const encoded = encodeProjectBriefSubmission(result.data);
      expect(encoded).toContain(`form-name=${projectBriefFormName}`);
      expect(encoded).toContain("projectType=mobile-app");
      expect(encoded).toContain("businessGoal=");
    }
  });
});
