import { z } from "zod";

export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name (at least 2 characters)"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid contact phone number"),
  programme: z.string().optional(),
  message: z
    .string()
    .trim()
    .min(10, "Please provide a message of at least 10 characters"),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
