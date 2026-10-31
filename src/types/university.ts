export type StudyMode = "conventional" | "odl" | "online";
export type ProgrammeMode = "conventional" | "odl";
export type ProgrammeLevel =
  | "doctoral"
  | "masters"
  | "bachelors"
  | "graduate-diplomas";

export interface UniversityRecognition {
  title: string;
  detail?: string;
  year?: number;
  verified: boolean;
}

export interface UniversityKeyStat {
  label: string;
  value: string;
  sublabel?: string;
}

export interface University {
  slug: string;
  name: string;
  shortName: string;
  country: string;
  city: string;
  established: number;
  owner: string;
  summary: string;
  about: string[];
  address: string;
  website: string;
  recognitions: UniversityRecognition[];
  modes: StudyMode[];
  // Enhanced UI fields
  tagline?: string;
  badge?: string;
  heroImage?: string;
  aboutImage?: string;
  highlights?: string[];
  ranking?: string;
  studentCount?: string;
  globalReach?: string;
  keyStats?: UniversityKeyStat[];
  schools?: string[];
}

