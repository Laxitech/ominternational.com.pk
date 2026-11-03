"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { enquirySchema, type EnquiryInput } from "@/lib/validations/enquiry";
import { submitEnquiry } from "@/lib/submit-enquiry";
import FormField from "./form-field";
import FormSuccess from "./form-success";

const INITIAL_VALUES: EnquiryInput = {
  name: "",
  email: "",
  phone: "",
  programme: "",
  message: "",
};

export default function EnquiryForm({
  defaultUniversity,
}: {
  defaultUniversity?: string;
}) {
  const initialValues: EnquiryInput = {
    ...INITIAL_VALUES,
    programme: defaultUniversity || "",
  };
  const [values, setValues] = useState<EnquiryInput>(initialValues);
  const [errors, setErrors] = useState<
    Partial<Record<keyof EnquiryInput, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof EnquiryInput]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError(null);

    const validationResult = enquirySchema.safeParse(values);
    if (!validationResult.success) {
      const fieldErrors: Partial<Record<keyof EnquiryInput, string>> = {};
      for (const issue of validationResult.error.issues) {
        const fieldName = issue.path[0] as keyof EnquiryInput;
        if (!fieldErrors[fieldName]) {
          fieldErrors[fieldName] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await submitEnquiry(validationResult.data);
      if (res.ok) {
        setIsSuccess(true);
        setValues(INITIAL_VALUES);
        setErrors({});
      } else {
        setSubmitError(
          "Unable to send enquiry right now. Please try again or message us on WhatsApp.",
        );
      }
    } catch {
      setSubmitError(
        "An unexpected error occurred. Please try again later or reach out directly.",
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
    return <FormSuccess onReset={handleReset} />;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {submitError && (
        <div
          role="alert"
          className="rounded-lg border border-danger/30 bg-danger-50 p-3.5 text-sm text-danger"
        >
          {submitError}
        </div>
      )}

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
          aria-invalid={errors.name ? "true" : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
          placeholder="e.g. Muhammad Ali"
          className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-heading placeholder:text-muted transition-colors focus:border-accent focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring"
        />
      </FormField>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
            aria-invalid={errors.email ? "true" : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            placeholder="name@example.com"
            className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-heading placeholder:text-muted transition-colors focus:border-accent focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring"
          />
        </FormField>

        <FormField
          id="phone"
          label="Phone / WhatsApp"
          required
          error={errors.phone}
        >
          <input
            type="tel"
            id="phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            aria-invalid={errors.phone ? "true" : undefined}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            placeholder="+92 300 1234567"
            className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-heading placeholder:text-muted transition-colors focus:border-accent focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring"
          />
        </FormField>
      </div>

      <FormField
        id="programme"
        label="Pathway of Interest"
        error={errors.programme}
      >
        <select
          id="programme"
          name="programme"
          value={values.programme}
          onChange={handleChange}
          className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-heading transition-colors focus:border-accent focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring"
        >
          <option value="">Select an interest (optional)</option>
          <option value="general">General Admissions Enquiry</option>
          <option value="bachelors">Bachelor&apos;s Degree Pathways</option>
          <option value="masters">Master&apos;s Degree Programmes</option>
          <option value="doctoral">Doctoral (DBA / PhD) Programmes</option>
          <option value="acca-topup">ACCA / ICAP Qualification Credit Transfer</option>
          <option value="unirazak">Universiti Tun Abdul Razak (UNIRAZAK)</option>
        </select>
      </FormField>

      <FormField
        id="message"
        label="Your Message or Enquiry"
        required
        error={errors.message}
      >
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Please share details about your current qualifications, goals, or any questions..."
          className="w-full resize-y rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-heading placeholder:text-muted transition-colors focus:border-accent focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring"
        />
      </FormField>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-surface shadow-sm transition-colors duration-200 hover:bg-primary-hover active:bg-primary-pressed disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none sm:min-h-12"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            <span>Sending enquiry...</span>
          </>
        ) : (
          <>
            <span>Submit Enquiry</span>
            <Send
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </>
        )}
      </button>

      <p className="text-center text-xs text-muted">
        Your information is protected under our{" "}
        <a
          href="/privacy-policy"
          className="text-accent underline underline-offset-2 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
        >
          privacy policy
        </a>
        . We never share your data.
      </p>
    </form>
  );
}
