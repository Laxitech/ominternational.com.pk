"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, RotateCcw, Send } from "lucide-react";
import FormField from "@/components/forms/form-field";
import {
  contactFormSchema,
  type ContactFormInput,
} from "@/lib/validations/contact";
import { submitContactForm } from "@/lib/submit-contact";

const INITIAL_VALUES: ContactFormInput = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormInput>(INITIAL_VALUES);
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormInput, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormInput]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError(null);

    const validationResult = contactFormSchema.safeParse(values);
    if (!validationResult.success) {
      const fieldErrors: Partial<Record<keyof ContactFormInput, string>> = {};
      for (const issue of validationResult.error.issues) {
        const fieldName = issue.path[0] as keyof ContactFormInput;
        if (!fieldErrors[fieldName]) {
          fieldErrors[fieldName] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await submitContactForm(validationResult.data);
      if (response.ok) {
        setIsSuccess(true);
        setValues(INITIAL_VALUES);
        setErrors({});
      } else {
        setSubmitError(
          response.message ||
            "Unable to submit message. Please try again or reach out directly.",
        );
      }
    } catch {
      setSubmitError(
        "An unexpected network error occurred. Please try again later.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleReset() {
    setIsSuccess(false);
    setSubmitError(null);
    setValues(INITIAL_VALUES);
    setErrors({});
  }

  if (isSuccess) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center rounded-2xl border border-success/30 bg-success-50 p-8 text-center sm:p-10"
      >
        <div className="inline-flex size-14 items-center justify-center rounded-full bg-surface shadow-xs">
          <CheckCircle2 className="size-8 text-success" aria-hidden="true" />
        </div>

        <h3 className="mt-4 text-xl font-semibold text-heading sm:text-2xl">
          Message Sent Successfully!
        </h3>

        <p className="mt-2 max-w-md text-sm leading-relaxed text-body sm:text-base">
          Thank you for reaching out. We have received your message and an OM
          International representative will get back to you shortly.
        </p>

        <button
          type="button"
          onClick={handleReset}
          className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border-strong bg-surface px-5 py-2.5 text-sm font-semibold text-heading transition-colors duration-200 hover:border-primary hover:text-primary active:bg-primary-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none"
        >
          <RotateCcw className="size-4" aria-hidden="true" />
          <span>Send Another Message</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {submitError && (
        <div
          role="alert"
          className="rounded-lg border border-danger/30 bg-danger-50 p-4 text-sm text-danger"
        >
          {submitError}
        </div>
      )}

      {/* Row 1: Full Name & Email Address */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField
          id="name"
          label="Full Name"
          required
          error={errors.name}
        >
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            autoComplete="name"
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            placeholder="e.g. Ayesha Khan"
            className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-heading placeholder:text-muted transition-colors hover:border-border-strong focus:border-accent focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring"
          />
        </FormField>

        <FormField
          id="email"
          label="Email Address"
          required
          error={errors.email}
        >
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            autoComplete="email"
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            placeholder="ayesha@example.com"
            className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-heading placeholder:text-muted transition-colors hover:border-border-strong focus:border-accent focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring"
          />
        </FormField>
      </div>

      {/* Row 2: Phone Number (optional) & Subject */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField
          id="phone"
          label="Phone Number"
          hint="Optional"
          error={errors.phone}
        >
          <input
            type="tel"
            id="phone"
            name="phone"
            value={values.phone || ""}
            onChange={handleChange}
            autoComplete="tel"
            aria-invalid={errors.phone ? "true" : undefined}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            placeholder="+92 300 1234567"
            className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-heading placeholder:text-muted transition-colors hover:border-border-strong focus:border-accent focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring"
          />
        </FormField>

        <FormField
          id="subject"
          label="Subject"
          required
          error={errors.subject}
        >
          <input
            type="text"
            id="subject"
            name="subject"
            value={values.subject}
            onChange={handleChange}
            aria-invalid={errors.subject ? "true" : undefined}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            placeholder="e.g. Master's Programme Inquiry"
            className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-heading placeholder:text-muted transition-colors hover:border-border-strong focus:border-accent focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring"
          />
        </FormField>
      </div>

      {/* Row 3: Message */}
      <FormField
        id="message"
        label="Message"
        required
        error={errors.message}
      >
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Please describe your questions, background, or the programme you are interested in..."
          className="w-full resize-y rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-heading placeholder:text-muted transition-colors hover:border-border-strong focus:border-accent focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring"
        />
      </FormField>

      {/* Row 4: Submit Button & Privacy Note */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-surface shadow-sm transition-colors duration-200 hover:bg-primary-hover active:bg-primary-pressed disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none sm:min-h-12"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </>
          )}
        </button>

        <p className="mt-3 text-center text-xs text-muted">
          We respect your privacy. Your information is securely handled and
          never shared.
        </p>
      </div>
    </form>
  );
}
