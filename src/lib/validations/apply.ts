import { z } from "zod";

export const qualificationValues = [
  "secondary",
  "higher-secondary",
  "foundation",
  "diploma",
  "associate",
  "bachelors-2",
  "bachelors-4",
  "masters",
  "doctorate",
  "other",
] as const;

export const completionStatusValues = [
  "completed",
  "final-year",
  "in-progress",
] as const;

export const professionalQualificationValues = [
  "none",
  "acca-part-qualified",
  "acca-member",
  "icap-caf",
  "icap-member",
  "other",
] as const;

export const workExperienceValues = [
  "none",
  "under-1",
  "1-2",
  "3-4",
  "5-plus",
] as const;

export const applySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your full name.")
    .max(80, "Name must be 80 characters or fewer."),
  programme: z.string().min(1, "Select a programme to check."),
  highestQualification: z.enum(qualificationValues, {
    error: "Select your highest academic qualification.",
  }),
  completionStatus: z.enum(completionStatusValues, {
    error: "Select the status of your qualification.",
  }),
  professionalQualification: z.enum(professionalQualificationValues, {
    error: "Select your professional qualification status.",
  }),
  workExperience: z.enum(workExperienceValues, {
    error: "Select your relevant work experience.",
  }),
  score: z
    .string()
    .trim()
    .max(60, "Keep the result or CGPA under 60 characters.")
    .optional(),
  notes: z
    .string()
    .trim()
    .max(500, "Additional details must be 500 characters or fewer.")
    .optional(),
});

export type ApplyInput = z.infer<typeof applySchema>;
export type QualificationValue = (typeof qualificationValues)[number];
export type CompletionStatus = (typeof completionStatusValues)[number];
export type ProfessionalQualification =
  (typeof professionalQualificationValues)[number];
export type WorkExperience = (typeof workExperienceValues)[number];
