// Placeholder: cn() helper for merging Tailwind classes
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: unknown[]): string {
  return twMerge(clsx(inputs));
}
