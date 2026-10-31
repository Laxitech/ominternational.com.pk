export type ProgrammeLevel =
  | "doctoral"
  | "masters"
  | "bachelors"
  | "graduate-diplomas";

export type ProgrammeMode = "conventional" | "odl";

export interface ProgrammeSemesterModule {
  label: string;
  subjectsDescription: string;
  subjectCount?: number;
}

export interface ProgrammeStructureSemester {
  label: string;
  subjectCount: number;
  subjects?: string[];
  modules?: ProgrammeSemesterModule[];
  extra?: string;
}

export interface ProgrammeStructureApelC {
  subjectCount: number;
  method: string[];
  period: string;
}

export interface ProgrammeStructureExemptions {
  subjectCount: number;
  basis: string[];
}

export interface ProgrammeStructure {
  totalSubjects: number;
  totalCreditHours: number;
  semesterLengthMonths: number;
  semesters: ProgrammeStructureSemester[];
  apelC?: ProgrammeStructureApelC;
  exemptions?: ProgrammeStructureExemptions;
}

export interface ProgrammeEligibility {
  title: string;
  items: string[];
  applicantNote?: string;
}

export interface ProgrammeFaq {
  question: string;
  answer: string;
}

export interface Programme {
  id: string;
  slug: string;
  title: string;
  level: ProgrammeLevel;
  universitySlug: string;
  schoolSlug?: string;
  schoolName?: string;
  modes: ProgrammeMode[];
  fullyOnline: boolean;
  majors?: string[];
  duration: string | null;
  summary?: string;
  awardingBodyConfirmed?: boolean;
  structure?: ProgrammeStructure;
  eligibility?: ProgrammeEligibility;
  faqs?: ProgrammeFaq[];
  scholarship?: {
    title: string;
    totalFee: string;
    description: string;
    instalmentPlan?: Array<{
      label: string;
      amount: string;
      when: string;
    }>;
  };
}

export interface ProgrammeRequirement {
  programmeSlug: string;
  programmeTitle: string;
  level: ProgrammeLevel;
  academic: string[];
}

export interface EnglishRequirementRow {
  test: string;
  doctoral: string;
  masters: string;
  bachelors: string;
  graduateDiplomas: string;
}

export interface Offer {
  title: string;
  description: string;
  validUntil?: string;
}

export interface Download {
  title: string;
  href: string;
  label?: string;
}
