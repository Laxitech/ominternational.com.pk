"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import {
  exemptionCheckSchema,
  type ExemptionCheckFormData,
} from "@/lib/validations/exemption-check";
import { submitEnquiry } from "@/lib/submit-enquiry";
import FormField from "./form-field";

interface ExemptionCheckFormProps {
  programmeTitle?: string;
  isPostgraduate?: boolean;
  className?: string;
}

export default function ExemptionCheckForm({
  programmeTitle = "BS Accounting and Finance",
  isPostgraduate = false,
  className,
}: ExemptionCheckFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ExemptionCheckFormData>({
    resolver: zodResolver(exemptionCheckSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      qualification: undefined,
      subjectsPassed: "",
    },
  });

  async function onSubmit(data: ExemptionCheckFormData) {
    setSubmitError(null);

    try {
      const response = await submitEnquiry({
        name: data.fullName,
        email: data.email || undefined,
        phone: data.phone,
        programme: programmeTitle,
        message: `${isPostgraduate ? "MBA Eligibility & Fast-Track Assessment" : "Exemption Assessment Request"}:\nQualification: ${data.qualification}\nDetails/Papers: ${data.subjectsPassed}`,
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
      } else {
        setSubmitError("Failed to submit assessment request. Please try again or message us on WhatsApp.");
      }
    } catch {
      setSubmitError("A connection error occurred. Please verify your details and try again.");
    }
  }

  if (isSuccess) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center rounded-2xl border border-success/30 bg-success-50 p-6 text-center sm:p-8"
      >
        <div className="inline-flex size-12 items-center justify-center rounded-full bg-surface shadow-xs">
          <CheckCircle2 className="size-6 text-success" aria-hidden="true" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-heading sm:text-xl">
          Assessment Request Received
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
          Thank you! An OM International academic advisor will review your qualifications and reach out via WhatsApp shortly to confirm your eligibility and credit recognition.
        </p>
        <button
          type="button"
          onClick={() => setIsSuccess(false)}
          className="mt-6 inline-flex items-center gap-2 rounded-xl border border-border-strong bg-surface px-4 py-2 text-sm font-semibold text-heading transition-colors duration-200 hover:border-primary hover:text-primary active:bg-primary-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none"
        >
          Check another candidate
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={className}
      aria-label="Exemption eligibility check form"
    >
      <div className="space-y-4">
        {submitError && (
          <div
            role="alert"
            className="rounded-xl border border-danger/30 bg-danger-50 p-4 text-sm text-danger"
          >
            {submitError}
          </div>
        )}

        {/* Full Name */}
        <FormField
          id="fullName"
          label="Full name"
          required
          error={errors.fullName?.message}
        >
          <input
            {...register("fullName")}
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder="e.g. Muhammad Usman"
            aria-invalid={Boolean(errors.fullName)}
            className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm text-heading placeholder:text-muted transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </FormField>

        {/* Phone */}
        <FormField
          id="phone"
          label="Phone (WhatsApp preferred)"
          required
          error={errors.phone?.message}
          hint="We will WhatsApp your assessment"
        >
          <input
            {...register("phone")}
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="e.g. +92 300 1234567"
            aria-invalid={Boolean(errors.phone)}
            className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm text-heading placeholder:text-muted transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </FormField>

        {/* Email */}
        <FormField
          id="email"
          label="Email (optional)"
          error={errors.email?.message}
        >
          <input
            {...register("email")}
            id="email"
            type="email"
            autoComplete="email"
            placeholder="e.g. student@example.com"
            aria-invalid={Boolean(errors.email)}
            className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm text-heading placeholder:text-muted transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </FormField>

        {/* Qualification */}
        <FormField
          id="qualification"
          label="Qualification"
          required
          error={errors.qualification?.message}
        >
          <select
            {...register("qualification")}
            id="qualification"
            aria-invalid={Boolean(errors.qualification)}
            defaultValue=""
            className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm text-heading transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="" disabled>
              Select your qualification
            </option>
            {isPostgraduate ? (
              <>
                <option value="ACCA Member">ACCA Member</option>
                <option value="ICAP Member">ICAP Member</option>
                <option value="Bachelor 4-Year Degree">Bachelor 4-Year Degree Holder</option>
                <option value="Bachelor 2-Year Degree">Bachelor 2-Year Degree Holder</option>
                <option value="ACCA Part Qualified">ACCA Part Qualified</option>
                <option value="ICAP CAF">ICAP CAF</option>
                <option value="Other">Other Qualification</option>
              </>
            ) : (
              <>
                <option value="ICAP CAF">ICAP CAF</option>
                <option value="ACCA">ACCA</option>
                <option value="Other">Other qualification</option>
              </>
            )}
          </select>
        </FormField>

        {/* Number of subjects passed / qualification details */}
        <FormField
          id="subjectsPassed"
          label={
            isPostgraduate
              ? "Academic background / passed papers"
              : "Number of subjects or papers passed"
          }
          required
          error={errors.subjectsPassed?.message}
          hint={
            isPostgraduate
              ? "e.g. ACCA Member / B.Com 2-Year / BBA 4-Year"
              : "e.g. 8 CAF papers, 9 ACCA papers"
          }
        >
          <input
            {...register("subjectsPassed")}
            id="subjectsPassed"
            type="text"
            placeholder={
              isPostgraduate
                ? "e.g. ACCA Member or CGPA 3.2 in BBA"
                : "e.g. 8 papers"
            }
            aria-invalid={Boolean(errors.subjectsPassed)}
            className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm text-heading placeholder:text-muted transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </FormField>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-on-primary shadow-sm transition-colors duration-200 hover:bg-primary-hover active:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring disabled:opacity-50 motion-reduce:transition-none"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              <span>Verifying eligibility...</span>
            </>
          ) : (
            <>
              <Send className="size-4" aria-hidden="true" />
              <span>
                {isPostgraduate ? "Check MBA Eligibility" : "Check my exemptions"}
              </span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
