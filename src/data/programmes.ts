import type { Programme } from "@/types/programme";

export const programmes: Programme[] = [
  // Tun Razak Graduate School
  {
    id: "1",
    slug: "doctor-of-philosophy",
    title: "Doctor of Philosophy",
    level: "doctoral",
    universitySlug: "unirazak",
    schoolSlug: "tun-razak-graduate-school",
    schoolName: "Tun Razak Graduate School",
    modes: ["conventional", "odl"],
    fullyOnline: true,
    duration: null,
    summary:
      "Applied and academic research tracks in Business Administration designed for experienced executives aiming for academic distinction.",
    scholarship: {
      title: "UniRazak PhD Scholarship for Pakistani Students",
      totalFee: "$5,200 USD",
      description:
        "UniRazak is named after Tun Abdul Razak Hussein, the second Prime Minister of Malaysia, also known as the 'Father of Development'. The University is owned by Tun Abdul Razak Education Foundation, which provides educational funds through scholarships and loans. UniRazak is offering their PhD program on scholarship to Pakistani students at a discounted total fee of $5,200 USD.",
      instalmentPlan: [
        {
          label: "Processing Fee",
          amount: "200 USD",
          when: "One-time",
        },
        {
          label: "Year 1 – Total",
          amount: "1,600 USD",
          when: "Instalment 1 (at registration) = 800 USD · Instalment 2 (after 6 months) = 800 USD",
        },
        {
          label: "Year 2 – Total",
          amount: "1,700 USD",
          when: "Instalment 3 (start of 2nd year) = 850 USD · Instalment 4 (after 6 months of 2nd year) = 850 USD",
        },
        {
          label: "Year 3 – Total",
          amount: "1,700 USD",
          when: "Instalment 5 (start of 3rd year) = 850 USD · Instalment 6 (after 6 months of 3rd year) = 850 USD",
        },
      ],
    },
  },
  {
    id: "2",
    slug: "master-of-business-administration",
    title: "Master of Business Administration",
    level: "masters",
    universitySlug: "unirazak",
    schoolSlug: "tun-razak-graduate-school",
    schoolName: "Tun Razak Graduate School",
    modes: ["conventional", "odl"],
    fullyOnline: true,
    duration: "1 Year",
    summary:
      "A fast-track 1-year Master of Business Administration comprising 42 credit hours across 12 subjects. Designed for Level-6 qualification holders (ACCA, ICAP, Bachelor's) with credits attained after every two months across three 4-month semesters and 14 career specializations.",
    structure: {
      totalSubjects: 12,
      totalCreditHours: 42,
      semesterLengthMonths: 4,
      semesters: [
        {
          label: "Semester 1",
          subjectCount: 4,
          modules: [
            {
              label: "Module 1",
              subjectsDescription: "2 subjects (Attain credits after Month 2)",
              subjectCount: 2,
            },
            {
              label: "Module 2",
              subjectsDescription: "2 subjects (Attain credits after Month 4)",
              subjectCount: 2,
            },
          ],
        },
        {
          label: "Semester 2",
          subjectCount: 4,
          modules: [
            {
              label: "Module 1",
              subjectsDescription: "2 subjects (Attain credits after Month 6)",
              subjectCount: 2,
            },
            {
              label: "Module 2",
              subjectsDescription: "2 subjects (Attain credits after Month 8)",
              subjectCount: 2,
            },
          ],
        },
        {
          label: "Semester 3",
          subjectCount: 4,
          modules: [
            {
              label: "Module 1",
              subjectsDescription: "2 subjects (Attain credits after Month 10)",
              subjectCount: 2,
            },
            {
              label: "Module 2",
              subjectsDescription: "1 subject + Project Report (Month 11 - 12)",
              subjectCount: 2,
            },
          ],
          extra:
            "Final applied business project report submitted in Module 2 of Semester 3.",
        },
      ],
    },
    majors: [
      "Project Management",
      "Management",
      "Finance",
      "Financial Technology",
      "Global Islamic Finance and Banking",
      "Human Resource Management (HRM)",
      "Entrepreneurship",
      "Marketing",
      "Business Analytics",
      "Risk Management",
      "Health Care Management",
      "Supply Chain Management",
      "Artificial Intelligence",
      "Occupational Health Safety and Environment",
    ],
    eligibility: {
      title: "MBA Eligibility Criteria",
      items: [
        "Level-6 qualification recognized by MQF / HEC",
        "Member of ACCA or Member of ICAP",
        "Bachelor's degree holder (2-year or 4-year degree)",
      ],
      applicantNote:
        "MBA eligibility criteria requires having a Level-6 qualification which includes Members of ACCA, ICAP Members, or holders of a 2-year or 4-year Bachelor's degree for direct entry.",
    },
    faqs: [
      {
        question: "Can I complete the MBA program within one year?",
        answer:
          "Yes. The MBA program is structured across three 4-month semesters, enabling dedicated professionals to complete all 42 credit hours and 12 subjects within one year.",
      },
      {
        question: "How are credits attained throughout the program?",
        answer:
          "Each 4-month semester is partitioned into two 2-month modules. You complete two subjects per module, allowing you to attain course credits progressively after every two months.",
      },
      {
        question: "What qualifications meet the Level-6 eligibility criteria?",
        answer:
          "Eligible candidates must hold a Level-6 qualification. This includes fully qualified Members of ACCA, Members of ICAP, or holders of a recognized 2-year or 4-year Bachelor's degree.",
      },
      {
        question: "What MBA specializations and majors are available?",
        answer:
          "Students can select from 14 specialization tracks: Project Management, Management, Finance, Financial Technology, Global Islamic Finance & Banking, HRM, Entrepreneurship, Marketing, Business Analytics, Risk Management, Health Care Management, Supply Chain Management, Artificial Intelligence, and Occupational Health Safety & Environment.",
      },
      {
        question: "Is there a final thesis or project report?",
        answer:
          "In the final semester (Semester 3, Module 2), students complete 1 subject alongside an Applied Project Report focused on practical organizational challenges.",
      },
    ],
  },
  {
    id: "3",
    slug: "master-in-management",
    title: "Master in Management",
    level: "masters",
    universitySlug: "unirazak",
    schoolSlug: "tun-razak-graduate-school",
    schoolName: "Tun Razak Graduate School",
    modes: ["conventional", "odl"],
    fullyOnline: true,
    duration: null,
    summary:
      "Develops core managerial capabilities across functions, with a focus on practical leadership and decision-making.",
  },
  {
    id: "4",
    slug: "master-of-education",
    title: "Master of Education",
    level: "masters",
    universitySlug: "unirazak",
    schoolSlug: "tun-razak-graduate-school",
    schoolName: "Tun Razak Graduate School",
    modes: ["conventional", "odl"],
    fullyOnline: false,
    duration: null,
    summary:
      "Prepares educators for leadership roles in curriculum design, instruction, and institutional management.",
  },
  {
    id: "5",
    slug: "master-in-public-management",
    title: "Master in Public Management",
    level: "masters",
    universitySlug: "unirazak",
    schoolSlug: "tun-razak-graduate-school",
    schoolName: "Tun Razak Graduate School",
    modes: ["odl"],
    fullyOnline: false,
    duration: null,
    summary:
      "Equips public sector professionals with modern governance, policy analysis, and administrative skills.",
  },
  // Bank Rakyat School of Business, Innovation, Technology and Entrepreneurship (BRSBITE)
  {
    id: "6",
    slug: "bachelor-of-business-administration-honours",
    title: "Bachelor of Business Administration (Honours)",
    level: "bachelors",
    universitySlug: "unirazak",
    schoolSlug: "brsbite",
    schoolName:
      "Bank Rakyat School of Business, Innovation, Technology and Entrepreneurship (BRSBITE)",
    modes: ["conventional", "odl"],
    fullyOnline: true,
    duration: null,
    summary:
      "A broad business degree covering core management disciplines with flexibility to specialise through majors.",
    majors: [
      "Social Media",
      "Digital Marketing",
      "Financial Technology",
      "Artificial Intelligence",
      "Business Analytics",
      "Sales Management",
    ],
  },
  {
    id: "7",
    slug: "bachelor-of-management-honours",
    title: "Bachelor of Management (Honours)",
    level: "bachelors",
    universitySlug: "unirazak",
    schoolSlug: "brsbite",
    schoolName:
      "Bank Rakyat School of Business, Innovation, Technology and Entrepreneurship (BRSBITE)",
    modes: ["conventional", "odl"],
    fullyOnline: true,
    duration: null,
    summary:
      "Builds foundational management knowledge with opportunities to focus on entrepreneurship and international business.",
    majors: [
      "Entrepreneurship",
      "International Business",
      "International Marketing",
      "Sports Management",
    ],
  },
  // School of Accounting and Taxation (SAT)
  {
    id: "8",
    slug: "bachelor-in-accounting-honours",
    title: "Bachelor in Accounting (Honours)",
    level: "bachelors",
    universitySlug: "unirazak",
    schoolSlug: "sat",
    schoolName: "School of Accounting and Taxation (SAT)",
    modes: ["conventional", "odl"],
    fullyOnline: true,
    duration: null,
    summary:
      "A professional accounting degree preparing graduates for careers in audit, tax, and financial reporting.",
  },
  {
    id: "9",
    slug: "bachelor-in-taxation-honours",
    title: "Bachelor in Taxation (Honours)",
    level: "bachelors",
    universitySlug: "unirazak",
    schoolSlug: "sat",
    schoolName: "School of Accounting and Taxation (SAT)",
    modes: ["conventional"],
    fullyOnline: false,
    duration: null,
    summary:
      "Specialised taxation degree covering Malaysian and international tax principles and practice.",
  },
  // Tun Ahmad Sarji School of Government and Public Services (TASSGSP)
  {
    id: "10",
    slug: "bachelor-of-arts-in-governance-and-public-policy-honours",
    title: "Bachelor of Arts in Governance & Public Policy (Honours)",
    level: "bachelors",
    universitySlug: "unirazak",
    schoolSlug: "tassgsp",
    schoolName:
      "Tun Ahmad Sarji School of Government and Public Services (TASSGSP)",
    modes: ["conventional"],
    fullyOnline: false,
    duration: null,
    summary:
      "Examines governance structures, public policy formulation, and the role of institutions in national development.",
  },
  {
    id: "11",
    slug: "bachelor-of-arts-in-public-management-honours",
    title: "Bachelor of Arts in Public Management (Honours)",
    level: "bachelors",
    universitySlug: "unirazak",
    schoolSlug: "tassgsp",
    schoolName:
      "Tun Ahmad Sarji School of Government and Public Services (TASSGSP)",
    modes: ["odl"],
    fullyOnline: true,
    duration: null,
    summary:
      "Prepares students for public sector management roles with a focus on service delivery and policy implementation.",
  },
  // School of Education & Humanities (SEH)
  {
    id: "12",
    slug: "postgraduate-diploma-in-education",
    title: "Postgraduate Diploma in Education",
    level: "graduate-diplomas",
    universitySlug: "unirazak",
    schoolSlug: "seh",
    schoolName: "School of Education & Humanities (SEH)",
    modes: ["odl"],
    fullyOnline: true,
    duration: null,
    summary:
      "A pathway for graduates seeking to enter the teaching profession with practical classroom skills.",
  },
  {
    id: "13",
    slug: "bachelor-of-psychology-honours",
    title: "Bachelor of Psychology (Honours)",
    level: "bachelors",
    universitySlug: "unirazak",
    schoolSlug: "seh",
    schoolName: "School of Education & Humanities (SEH)",
    modes: ["conventional", "odl"],
    fullyOnline: true,
    duration: null,
    summary:
      "Scientific study of mind and behaviour, preparing graduates for further professional training in psychology.",
  },
  {
    id: "14",
    slug: "bachelor-of-education-honours",
    title: "Bachelor of Education (Honours)",
    level: "bachelors",
    universitySlug: "unirazak",
    schoolSlug: "seh",
    schoolName: "School of Education & Humanities (SEH)",
    modes: ["conventional", "odl"],
    fullyOnline: true,
    duration: null,
    summary:
      "Initial teacher education programme preparing graduates for classroom practice and school leadership.",
    majors: [
      "Special Education",
      "Teaching English as a Second Language",
      "Educational Technology",
      "Guidance & Counselling",
    ],
  },
  {
    id: "15",
    slug: "bachelor-of-education-early-childhood-education-honours",
    title: "Bachelor of Education (Early Childhood Education) (Honours)",
    level: "bachelors",
    universitySlug: "unirazak",
    schoolSlug: "seh",
    schoolName: "School of Education & Humanities (SEH)",
    modes: ["conventional", "odl"],
    fullyOnline: true,
    duration: null,
    summary:
      "Focuses on early childhood development, curriculum, and pedagogy for educators of young learners.",
  },

  {
    id: "bs-accounting-and-finance",
    slug: "bs-accounting-and-finance",
    title: "BS Accounting and Finance",
    level: "bachelors",
    // TODO(confirm): awarding university not confirmed
    universitySlug: "unirazak",
    schoolSlug: "brsbite",
    schoolName:
      "Bank Rakyat School of Business, Innovation, Technology & Entrepreneurship",
    awardingBodyConfirmed: false,
    modes: ["conventional", "odl"],
    fullyOnline: true,
    // TODO: Confirm total duration with awarding university
    duration: null,
    // TODO: Confirm tuition fees with awarding university
    summary:
      "A bachelor's pathway for ICAP and ACCA students. Your CAF or ACCA papers are credited as exemptions, so you complete the remaining subjects through three semesters and APEL-C.",
    structure: {
      totalSubjects: 40,
      totalCreditHours: 127,
      semesterLengthMonths: 4,
      semesters: [
        // TODO: Confirm subject names per semester with awarding university
        { label: "Semester 1", subjectCount: 5 },
        { label: "Semester 2", subjectCount: 5 },
        {
          label: "Semester 3",
          subjectCount: 5,
          extra:
            "Report on industrial training, articleship, internship or other relevant experience, submitted in this final semester.",
        },
      ],
      // TODO: Confirm exact definition and institutional wording for APEL-C with awarding university
      apelC: {
        subjectCount: 7,
        method: ["Challenge test", "Portfolio submission"],
        period: "During 1 year",
      },
      exemptions: {
        subjectCount: 18,
        basis: ["CAF qualification (ICAP)", "ACCA part qualification"],
      },
    },
    eligibility: {
      title: "Eligibility criteria",
      items: [
        "SSC qualification",
        "HSSC qualification",
        "ICAP or ACCA student",
      ],
      applicantNote:
        "Please tell us how many subjects you have passed in ICAP or ACCA so we can confirm your exemptions.",
    },
    faqs: [
      {
        question: "Do I have to study all 40 subjects?",
        answer:
          "No. 18 subjects are exempted on the basis of your CAF or ACCA qualification, 7 are completed through APEL-C, and 5 per semester across 3 semesters make up the remaining 15.",
      },
      {
        question: "How long is each semester?",
        answer: "Each semester is 4 months.",
      },
      {
        question: "Is an internship or training report required?",
        answer:
          "Yes. A report on industrial training, articleship, internship or other relevant experience is submitted in the last semester.",
      },
      {
        question: "How is APEL-C completed?",
        answer:
          "Through a challenge test or a portfolio submission, completed during 1 year.",
      },
      {
        question: "How do I find out how many subjects I am exempted from?",
        answer:
          "Tell us how many ICAP or ACCA subjects you have passed and an advisor will confirm your exemptions.",
      },
    ],
  },
];

// Dev-time assertion: verify that structure subject breakdown matches totalSubjects
for (const prog of programmes) {
  if (prog.structure) {
    const semesterCount = prog.structure.semesters.reduce(
      (sum, s) => sum + s.subjectCount,
      0,
    );
    const apelCCount = prog.structure.apelC?.subjectCount ?? 0;
    const exemptionCount = prog.structure.exemptions?.subjectCount ?? 0;
    const calculatedTotal = semesterCount + apelCCount + exemptionCount;

    if (calculatedTotal !== prog.structure.totalSubjects) {
      throw new Error(
        `[Assertion Error] Programme "${prog.slug}" subject count mismatch: ${semesterCount} (semesters) + ${apelCCount} (APEL-C) + ${exemptionCount} (exemptions) = ${calculatedTotal}, expected ${prog.structure.totalSubjects}`,
      );
    }
  }
}
