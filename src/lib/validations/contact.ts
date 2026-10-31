import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name (at least 2 characters)")
    .max(100, "Full name must be under 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .optional()
    .refine(
      (val) => !val || val.length >= 7,
      "Please enter a valid phone number (at least 7 digits)",
    ),
  subject: z
    .string()
    .trim()
    .min(3, "Please enter a subject (at least 3 characters)")
    .max(150, "Subject must be under 150 characters"),
  message: z
    .string()
    .trim()
    .min(10, "Please provide a message of at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
