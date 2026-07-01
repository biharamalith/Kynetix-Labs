import { ChangeEvent, FormEvent, ReactNode, useState } from "react";
import { Send } from "lucide-react";
import { z } from "zod";
import { company } from "@/lib/siteContent";
import { ContentCard } from "@/components/site/ContentCard";

// Form validation is kept beside the form so future fields have one obvious schema to update.
const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  company: z.string().trim().max(120, "Company name is too long.").optional(),
  message: z.string().trim().min(10, "Please share a little more about the project."),
});

type ContactFormData = z.infer<typeof contactSchema>;
type ContactErrors = Partial<Record<keyof ContactFormData | "form", string>>;

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  company: "",
  message: "",
};

const encodeFormData = (data: Record<string, string>) =>
  new URLSearchParams(data).toString();

export const ProjectContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined, form: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: ContactErrors = {};
      result.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof ContactFormData | undefined;
        if (fieldName) {
          fieldErrors[fieldName] = error.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Netlify Forms endpoint: keep the hidden `form-name` input and public/contact-form.html in sync.
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({
          "form-name": "contact",
          name: result.data.name,
          email: result.data.email,
          company: result.data.company ?? "",
          message: result.data.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Contact form submission failed.");
      }

      setIsSubmitted(true);
      setFormData(initialFormData);
    } catch {
      setErrors({
        form: `Message could not be sent from the form. Please email ${company.email} directly.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <ContentCard className="p-8 text-center md:p-10">
        <div className="feature-icon-box feature-icon-box-lg mx-auto">
          <Send className="h-6 w-6" />
        </div>
        <h2 className="mt-6 font-display text-2xl font-semibold text-white">Message sent</h2>
        <p className="mt-3 text-sm leading-7 text-white/60">
          Thank you for reaching out. We will review your message and reply as soon as possible.
        </p>
      </ContentCard>
    );
  }

  return (
    <ContentCard className="p-6 md:p-8" intensity="strong">
      <form onSubmit={handleSubmit} className="space-y-6" name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />

        <FormField label="Name" htmlFor="name" error={errors.name} required>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="form-field"
            placeholder="Your name"
            autoComplete="name"
          />
        </FormField>

        <FormField label="Email" htmlFor="email" error={errors.email} required>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="form-field"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </FormField>

        <FormField label="Company" htmlFor="company" error={errors.company}>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            className="form-field"
            placeholder="Company or project name"
            autoComplete="organization"
          />
        </FormField>

        <FormField label="Project message" htmlFor="message" error={errors.message} required>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="form-field resize-none"
            placeholder="Tell us what you want to build, improve, or launch."
          />
        </FormField>

        {errors.form && (
          <p className="rounded-xl border border-red-400/25 bg-red-500/10 px-4 py-3 text-sm text-red-100" role="alert">
            {errors.form}
          </p>
        )}

        <button type="submit" disabled={isSubmitting} className="site-button site-button-primary w-full disabled:cursor-not-allowed disabled:opacity-55">
          {isSubmitting ? "Sending..." : "Send message"}
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
        {label} {required && <span className="text-cyan-200">*</span>}
      </label>
      {children}
      {error && <p className="mt-2 text-sm text-red-200">{error}</p>}
    </div>
  );
};
