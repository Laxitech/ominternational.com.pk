import { z } from "zod";

export const exemptionCheckSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name (at least 2 characters)")
    .max(100, "Full name must be under 100 characters"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone or WhatsApp number (at least 7 digits)")
    .max(20, "Phone number is too long"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .or(z.literal(""))
    .optional(),
  qualification: z
    .string()
    .trim()
    .min(2, "Please select your qualification"),
  subjectsPassed: z
    .string()
    .trim()
    .min(1, "Please state the number of subjects or papers passed")
    .max(50, "Value too long"),
});

export type ExemptionCheckFormData = z.infer<typeof exemptionCheckSchema>;
