import { CheckCircle2, RotateCcw } from "lucide-react";

type FormSuccessProps = {
  title?: string;
  message?: string;
  onReset?: () => void;
  resetLabel?: string;
};

export default function FormSuccess({
  title = "Enquiry Submitted!",
  message = "Thank you for contacting OM International. An education advisor will review your details and reach out to you shortly.",
  onReset,
  resetLabel = "Send another message",
}: FormSuccessProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center rounded-xl border border-success/30 bg-success-50 p-6 text-center sm:p-8"
    >
      <div className="inline-flex size-12 items-center justify-center rounded-full bg-surface shadow-xs">
        <CheckCircle2 className="size-6 text-success" aria-hidden="true" />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-heading sm:text-xl">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm leading-relaxed text-body sm:text-base">
        {message}
      </p>

      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border-strong bg-surface px-4 py-2 text-sm font-semibold text-heading transition-colors duration-200 hover:border-primary hover:text-primary active:bg-primary-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none"
        >
          <RotateCcw className="size-3.5" aria-hidden="true" />
          <span>{resetLabel}</span>
        </button>
      )}
    </div>
  );
}
