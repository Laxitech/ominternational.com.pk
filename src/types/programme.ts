export type ProgrammeLevel =
  | "doctoral"
  | "masters"
  | "bachelors"
  | "graduate-diplomas";

export type ProgrammeMode = "conventional" | "odl";

export interface Programme {
  id: string;
  slug: string;
  title: string;
  level: ProgrammeLevel;
  universitySlug: string;
  schoolSlug: string;
  schoolName: string;
  modes: ProgrammeMode[];
  fullyOnline: boolean;
  majors?: string[];
  duration: string | null;
  summary?: string;
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
