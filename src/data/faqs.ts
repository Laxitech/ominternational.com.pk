export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  category?: string;
};

export const faqs: FAQItem[] = [
  {
    id: "programmes",
    category: "Academic Programmes",
    question: "What academic programmes are offered through OM International?",
    answer:
      "OM International facilitates degree pathways in partnership with accredited Malaysian institutions, including Universiti Tun Abdul Razak (UNIRAZAK). Options include Bachelor's, Master's, and Doctoral (PhD/DBA) programmes across Business Administration, Management, Accounting, and related fields.",
  },
  {
    id: "eligibility",
    category: "Admissions",
    question: "What are the admission and eligibility requirements?",
    answer:
      "Eligibility criteria vary based on the level of study and partner university. Undergraduate pathways generally require an Intermediate (HSSC), A-Levels, or equivalent certificate. Postgraduate programmes require a recognized Bachelor's degree. Relevant professional certifications and work experience may also be evaluated for entry.",
  },
  {
    id: "acca-icap",
    category: "Pathways",
    question: "How do professional pathways work for ACCA and ICAP students?",
    answer:
      "Accelerated degree pathways exist for ACCA and ICAP students, affiliates, and members. Partner universities evaluate completed professional exam papers for credit exemptions, enabling students to convert their qualifications into an accredited university degree with reduced course requirements and shorter completion times.",
  },
  {
    id: "application",
    category: "Admissions",
    question: "What is the application procedure?",
    answer:
      "The process starts by submitting an enquiry or contact request with your educational background. Our admissions team provides a preliminary credential review, guides you through required documentation (transcripts, certificates, identification), and assists with formal submission directly to the university.",
  },
  {
    id: "study-options",
    category: "Academics",
    question: "What study options and programme durations are available?",
    answer:
      "Programmes offer flexible blended and online learning schedules designed for working professionals and full-time learners, backed by local learning center support in Pakistan. Programme lengths vary: accelerated credit-transfer bachelor's degrees typically take 1 to 2 years, standard undergraduate degrees take 3 years, master's degrees span 1 to 2 years, and doctoral degrees typically take 3 to 4 years.",
  },
  {
    id: "fees",
    category: "Tuition",
    question: "What are the tuition fees and payment procedures?",
    answer:
      "Tuition fees depend on the specific university, degree level, and granted credit exemptions. Fees are typically payable per semester in structured installments. For current fee schedules, prospective student discounts, and installment structures, please contact our admissions advisors.",
  },
  {
    id: "recognition",
    category: "Recognition",
    question: "Are the partner universities internationally recognized?",
    answer:
      "Yes. Partner universities including UNIRAZAK is accredited by the Malaysian Qualifications Agency (MQA) and recognized by the Ministry of Higher Education Malaysia. Students are advised to verify equivalence regulations with their respective local accreditation bodies or employer requirements.",
  },
  {
    id: "admissions-contact",
    category: "Contact",
    question: "How can I get in touch with the admissions team?",
    answer:
      "You can submit the contact form on this page, send an email to ceo@ominternational.com.pk, or contact our support lines to book an online or in-person advisory session at any of our learning centers across Pakistan.",
  },
];
