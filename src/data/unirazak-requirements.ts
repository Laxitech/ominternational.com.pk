import type {
  Download,
  EnglishRequirementRow,
  Offer,
  ProgrammeRequirement,
} from "@/types/programme";

export const unirazakRequirements: ProgrammeRequirement[] = [
  {
    programmeSlug: "doctor-of-philosophy",
    programmeTitle: "Doctor of Philosophy",
    level: "doctoral",
    academic: [
      "A Master's degree from UNIRAZAK or an equivalent from a Malaysian-government-recognised institution, or another qualification recognised by the University Senate;",
      "No direct entry from bachelor's to doctoral level;",
      "Bachelor's holders may apply to convert candidacy after one year of master's enrolment, subject to demonstrated research competency, rigorous internal assessment and Senate approval.",
    ],
  },
  {
    programmeSlug: "master-of-business-administration",
    programmeTitle: "Master of Business Administration",
    level: "masters",
    academic: [
      "A bachelor's degree (MQF Level 6) in a related field with CGPA 2.50 or above;",
      "Or a bachelor's degree (MQF Level 6) in a related field with CGPA below 2.50 with at least five years of relevant working experience;",
      "Or other qualifications recognised by the University Senate, assessed on a case-by-case basis.",
    ],
  },
  {
    programmeSlug: "bachelor-in-accounting-honours",
    programmeTitle: "Bachelor of Accounting (Honours)",
    level: "bachelors",
    academic: [
      "A pass in STPM with a minimum of Grade C (NGMP 2.00) in two (2) subjects, and a pass in Mathematics and English at SPM level;",
      "Or a pass in STAM with a minimum grade of Jayyid, and a pass in Mathematics and English at SPM level;",
      "Or a pass in UEC with a minimum of Grade B in five (5) subjects including Mathematics and English;",
      "Or a Matriculation/Foundation certificate with a minimum CGPA of 2.00;",
      "Or a Diploma (MQF Level 4) in a related field with a minimum CGPA of 2.00;",
      "Or other qualifications recognised as equivalent by the Malaysian government.",
    ],
  },
];

export const englishRequirements: EnglishRequirementRow[] = [
  {
    test: "IELTS",
    doctoral: "Overall 6.0 (no band below 5.5)",
    masters: "Overall 6.0 (no band below 5.5)",
    bachelors: "Overall 6.0 (no band below 5.5)",
    graduateDiplomas: "Overall 6.0 (no band below 5.5)",
  },
  {
    test: "TOEFL iBT",
    doctoral: "60",
    masters: "60",
    bachelors: "60",
    graduateDiplomas: "60",
  },
  {
    test: "MUET",
    doctoral: "Band 4",
    masters: "Band 4",
    bachelors: "Band 3",
    graduateDiplomas: "Band 4",
  },
  {
    test: "PTE Academic",
    doctoral: "50",
    masters: "50",
    bachelors: "50",
    graduateDiplomas: "50",
  },
];

export const offers: Offer[] = [
  {
    title: "Early Bird Rebate",
    description: "RM 2,000 rebate on the MBA programme.",
  },
  {
    title: "Free Foundation",
    description: "A free Foundation programme to begin the study journey.",
  },
  {
    title: "UR Scholarships",
    description:
      "Rebates worth up to 35K (currency to be confirmed; display as written until confirmed).",
  },
  {
    title: "High Achiever Rebates",
    description: "Rebates starting from RM 250.",
  },
];

export const downloads: Download[] = [
  {
    title: "MBA brochure",
    href: "https://om.unirazak.edu.my/wp-content/uploads/2024/05/Digital-TRGS-Master-of-Business-Administration.pdf",
    label: "PDF",
  },
  {
    title: "Doctor of Philosophy brochure",
    href: "https://om.unirazak.edu.my/wp-content/uploads/2024/05/GSB-01-DO-Philosophy-FA-OL-20210125.pdf",
    label: "PDF",
  },
  {
    title: "Bachelor of Accounting brochure",
    href: "https://om.unirazak.edu.my/wp-content/uploads/2024/05/Digital-SAT-Bachelor-of-Accounting.pdf",
    label: "PDF",
  },
  {
    title: "Prospectus",
    href: "https://heyzine.com/flip-book/054991f222.html",
    label: "Web",
  },
];
