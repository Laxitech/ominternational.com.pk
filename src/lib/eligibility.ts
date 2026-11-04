import type { Programme } from "@/types/programme";

export type EligibilityResult = {
  status: "likely" | "review";
  title: string;
  summary: string;
  checkpoints: string[];
};

function matchingResult(
  summary: string,
  checkpoints: string[],
): EligibilityResult {
  return {
    status: "likely",
    title: "Your profile looks suitable for preliminary review",
    summary,
    checkpoints,
  };
}

function reviewResult(
  summary: string,
  checkpoints: string[],
): EligibilityResult {
  return {
    status: "review",
    title: "An advisor should review your profile",
    summary,
    checkpoints,
  };
}
