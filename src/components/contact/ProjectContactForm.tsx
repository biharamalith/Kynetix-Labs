import { ChangeEvent, FormEvent, ReactNode, useMemo, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import {
  projectBriefBudgetRanges,
  projectBriefCopy,
  projectBriefProjectTypes,
  projectBriefResponseSteps,
  projectBriefTimelineOptions,
} from "@/content/contact";
import { ContentCard } from "@/components/site/ContentCard";
import { company } from "@/lib/siteContent";
import {
  createInitialProjectBriefFormData,
  encodeProjectBriefSubmission,
  projectBriefFormName,
  projectBriefHoneypotName,
  type ProjectBriefErrors,
  type ProjectBriefFieldName,
  type ProjectBriefFormData,
  validateProjectBriefForm,
} from "@/lib/projectBriefForm";

export const ProjectContactForm = () => {
  const initialData = useMemo(() => createInitialProjectBriefFormData(), []);
  const [formData, setFormData] = useState<ProjectBriefFormData>(initialData);
  const [errors, setErrors] = useState<ProjectBriefErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const resetForm = () => {
    setFormData(createInitialProjectBriefFormData());
    setErrors({});
    setIsSubmitted(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    const fieldName = name as ProjectBriefFieldName;

    setFormData((current) => ({ ...current, [fieldName]: value }));
    setErrors((current) => ({ ...current, [fieldName]: undefined, form: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const validation = validateProjectBriefForm(formData);
    if (!validation.success) {
      setErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeProjectBriefSubmission(validation.data),
      });

      if (!response.ok) {
        throw new Error("Project brief submission failed.");
      }

      setIsSubmitted(true);
    } catch {
      setErrors({
        form: `The form could not be sent. Please email the brief directly to ${company.email}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <ContentCard className="p-8 md:p-10" intensity="strong">
        <div className="feature-icon-box feature-icon-box-lg">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h2 className="mt-6 font-display text-2xl font-semibold text-white">{projectBriefCopy.successTitle}</h2>
        <p className="mt-3 text-sm leading-7 text-white/60">{projectBriefCopy.successDescription}</p>
        <ul className="mt-6 space-y-3">
          {projectBriefResponseSteps.map((step) => (
            <li key={step} className="flex gap-3 text-sm leading-6 text-white/65">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white" />
              <span>{step}</span>
            </li>
          ))}
        </ul>
        <button type="button" onClick={resetForm} className="site-button site-button-outline mt-8 w-full">
          Send another brief
        </button>
      </ContentCard>
    );
  }

  return (
    <ContentCard className="p-6 md:p-8" intensity="strong">
      <div className="mb-7">
        <p className="section-eyebrow">{projectBriefCopy.eyebrow}</p>
        <h2 className="mt-3 font-display text-2xl font-semibold text-white md:text-3xl">{projectBriefCopy.title}</h2>
        <p className="mt-4 text-sm leading-7 text-white/60">{projectBriefCopy.description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6" name={projectBriefFormName} method="POST" data-netlify="true" data-netlify-honeypot={projectBriefHoneypotName} noValidate>
        <input type="hidden" name="form-name" value={projectBriefFormName} />
        <input type="hidden" name="startedAt" value={formData.startedAt} />
        <div className="hidden" aria-hidden="true">
          <label htmlFor="bot-field">Do not fill this field</label>
          <input id="bot-field" name={projectBriefHoneypotName} tabIndex={-1} value={formData.botField} onChange={handleChange} autoComplete="off" />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <FormField label="Name" htmlFor="name" error={errors.name} required>
            <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} className="form-field" placeholder="Your name" autoComplete="name" />
          </FormField>

          <FormField label="Email" htmlFor="email" error={errors.email} required>
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="form-field" placeholder="you@example.com" autoComplete="email" />
          </FormField>
        </div>

        <FormField label="Company or project" htmlFor="company" error={errors.company}>
          <input id="company" name="company" type="text" value={formData.company} onChange={handleChange} className="form-field" placeholder="Company, product, or project name" autoComplete="organization" />
        </FormField>

        <div className="grid gap-5 md:grid-cols-3">
          <SelectField label="Project type" htmlFor="projectType" name="projectType" value={formData.projectType} error={errors.projectType} onChange={handleChange} required>
            <option value="">Choose type</option>
            {projectBriefProjectTypes.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </SelectField>

          <SelectField label="Budget range" htmlFor="budgetRange" name="budgetRange" value={formData.budgetRange} error={errors.budgetRange} onChange={handleChange} required>
            <option value="">Choose range</option>
            {projectBriefBudgetRanges.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </SelectField>

          <SelectField label="Timeline" htmlFor="timeline" name="timeline" value={formData.timeline} error={errors.timeline} onChange={handleChange} required>
            <option value="">Choose timeline</option>
            {projectBriefTimelineOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </SelectField>
        </div>

        <FormField label="Business goal" htmlFor="businessGoal" error={errors.businessGoal} required>
          <textarea id="businessGoal" name="businessGoal" value={formData.businessGoal} onChange={handleChange} rows={4} className="form-field resize-none" placeholder="What business result should this project create?" />
        </FormField>

        <FormField label="Extra context" htmlFor="message" error={errors.message}>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="form-field resize-none" placeholder="Current system, target users, required integrations, links, or constraints." />
        </FormField>

        <p className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs leading-6 text-white/50">
          {projectBriefCopy.privacyNote}
        </p>

        {errors.form && (
          <p className="rounded-xl border border-red-400/25 bg-red-500/10 px-4 py-3 text-sm text-red-100" role="alert">
            {errors.form}
          </p>
        )}

        <button type="submit" disabled={isSubmitting} className="site-button site-button-primary w-full disabled:cursor-not-allowed disabled:opacity-55">
          <span className="inline-flex items-center justify-center gap-2">
            <Send className="h-4 w-4" />
            {isSubmitting ? "Sending brief..." : "Submit project brief"}
          </span>
        </button>
      </form>
    </ContentCard>
  );
};

interface FormFieldProps {
  children: ReactNode;
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
}

const FormField = ({ children, label, htmlFor, error, required = false }: FormFieldProps) => {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-white/80">
        {label} {required && <span className="text-white">*</span>}
      </label>
      {children}
      {error && <p className="mt-2 text-sm text-red-200">{error}</p>}
    </div>
  );
};

interface SelectFieldProps {
  children: ReactNode;
  label: string;
  htmlFor: string;
  name: ProjectBriefFieldName;
  value: string;
  error?: string;
  required?: boolean;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField = ({ children, label, htmlFor, name, value, error, required = false, onChange }: SelectFieldProps) => {
  return (
    <FormField label={label} htmlFor={htmlFor} error={error} required={required}>
      <select id={htmlFor} name={name} value={value} onChange={onChange} className="form-field appearance-none bg-black/60">
        {children}
      </select>
    </FormField>
  );
};
