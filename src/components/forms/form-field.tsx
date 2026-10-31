import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FormFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  children: ReactNode;
};

export default function FormField({
  id,
  label,
  required = false,
  error,
  hint,
  className,
  children,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="text-sm font-medium text-heading"
        >
          {label}
          {required && (
            <span className="ml-1 text-danger" aria-hidden="true">
              *
            </span>
          )}
        </label>
        {hint && (
          <span className="text-xs text-muted">
            {hint}
          </span>
        )}
      </div>

      {children}

      {error && (
        <p id={`${id}-error`} className="text-xs font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
