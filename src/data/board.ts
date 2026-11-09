import type { BoardMember } from "@/types/board";

export const PROFILE_CTA_LABEL = "Click here to View Profile";

export const GOVERNING_BOARD_HEADLINE = "Governing Board";
export const GOVERNING_BOARD_SUBHEADING =
  "OM International is managed through a professional board comprising following prominent individuals";

export const ADVISORY_BOARD_HEADLINE = "Advisory Board";
export const ADVISORY_BOARD_INTRO =
  "The management of OM International is seeking regular input from its academic advisory board comprising following notable professionals and businessmen.";

export const boardMembers: BoardMember[] = [
  // Governing Board
  {
    slug: "brigadier-tahir-malik",
    name: "Brigadier Tahir Malik (Retd)",
    role: "Governing Board Member",
    board: "governing",
    tier: "lead",
    photo: "/images/management/Brig-Tahir.jpeg",
    profile: {
      headline:
        "Director Quality Assurance at National University of Technology (NUTECH) Islamabad, Approved PhD Supervisor (HEC), Performance Enhancement Advisor and Author.",
      qualification:
        "MS & PhD in Engineering Management (UET Taxila) | BSc Electrical Engineering (UET Lahore) | BSc (Balochistan University)",
      bio: [
        "Dr. Muhammad Tahir Nawaz was born in Faisalabad on 2nd October 1967. After his Matric from Faisalabad, BSc Degree from Balochistan University and Graduation in Electrical Engineering from UET Lahore, he clinched MS and PhD in Engineering Management from UET, Taxila. He is one of the best orators, performance enhancement advisor and well known for his work in the areas of personal mastery, happiness and success, total wellness and art of positive living. He is keen observant of nature, life, folk wisdom and strongly professes the goal setting, individual productivity enhancement, spiritual comfort, freedom of thoughts, actions, and expression within ambit of religious obligations, ethics and social norms. He has a diverse and varying experience of management of technical organizations at National and International level. He also remained involved in various professional training schemes focused on organizational productivity enhancement, team building, effective management and has done excellent work in enhancement of productivity at organizational level through Female empowerment.",
        "Moreover, His areas of interest are Productivity Management, Conflict Management, Good Governance, Technology Management and application of total productivity management in industry, HRD, Leadership Organizational behavior and Business Management, Supply Chain Management, Marketing of Technology, Services marketing, TQM, Project Management, Conflict Resolution Management, Self Management, Stress Management, Attitude Building, Relationship Management, Building of High Performance Teams, Professional Ethics and Project Management. Performance audit linked with goal orientation like management by objectives is also a special area of interest of Dr. Muhammad Tahir Nawaz.",
        "He has served as Head of Engineering Management Department and Director Counselling and student affairs at NUST College of EME and also served as highly significant Instructional, Managerial and Executive positions at various training and service organizations. Presently he is serving as Director Quality Assurance at National University of Technology Islamabad. He is frequently sought for as Guest Speaker in seminars and conferences at renowned Military and Higher Educational institutions. He is an approved PhD supervisor of HEC and a life time member of Pakistan Engineering Council. He has contributed many research papers, published in National / International journals. He has inculcated the same research spirit in young scholars by supervising PhD theses.",
        "He is a man of multidimensional capabilities. He has made his mark as a writer by recently published two bilingual books; Moving towards the Happy Lanes and Tameer-e-Shakhsiyat Khushion Bhari Zindagi ka Aghaz. He is a great motivator and professional in stress related issues.",
      ],
      highlights: [
        { label: "Academic Career", value: "PhD & MS" },
        { label: "Current Position", value: "Director QA" },
        { label: "Published Books", value: "2 Bilingual Books" },
      ],
      specializations: [
        "Productivity Management & TQM",
        "Conflict Resolution & Management",
        "Good Governance & Public Policy",
        "Technology & Innovation Management",
        "HRD, Leadership & Organizational Behavior",
        "Supply Chain & Operations Management",
        "Stress Management & Emotional Wellness",
        "Building High-Performance Teams",
      ],
      books: [
        {
          title: "Moving towards the Happy Lanes",
          bestSeller: true,
        },
        {
          title: "Tameer-e-Shakhsiyat Khushion Bhari Zindagi ka Aghaz",
          bestSeller: true,
        },
      ],
      portfolio: [
        {
          role: "Director Quality Assurance",
          organization: "National University of Technology (NUTECH) Islamabad",
          description:
            "Executive leadership ensuring institutional quality assurance, academic governance, and accreditation standards.",
        },
        {
          role: "Former Head of Department & Director Counselling",
          organization: "NUST College of EME",
          description:
            "Led the Engineering Management Department and directed student counseling, psychological support, and student affairs.",
        },
        {
          role: "Approved PhD Supervisor & Lifetime Member",
          organization:
            "Higher Education Commission (HEC) & Pakistan Engineering Council (PEC)",
          description:
            "Supervising doctoral theses, guiding postgraduate research, and active contribution to engineering education.",
        },
      ],
    },
  },
  {
    slug: "dr-kiran-javaria",
    name: "Dr. Kiran Javaria",
    role: "Director of Education, OM Group of Companies",
    board: "governing",
    tier: "lead",
    photo: "/images/management/Dr Kiran.jpeg",
    profile: {
      headline:
        "Director of Education at OM Group of Companies, leading academic operations across OM International and OM Education Services with international university partners.",
      qualification:
        "PhD in Finance / Islamic Banking & Business Administration",
      bio: [
        "Dr. Kiran Javaria heads the Education Division at OM Group of Companies, including OM International and OM Education Services. Under her strategic leadership, over 6,500 students are currently registered and more than 10,000 students have successfully graduated over the last decade. OM International and OM Education Services work as accredited learning partners with leading Malaysian universities.",
        "In addition to her executive directorship, Dr. Kiran Javaria serves as Regional Coordinator for the Journal of Islamic Financial Studies. Her research has appeared in esteemed international peer-reviewed journals, including the International Journal of Entrepreneurship and Small Business and Problems and Perspectives in Management. She has also presented her research findings at numerous premier international academic conferences.",
      ],
      highlights: [
        { label: "Active Students", value: "6,500+" },
        { label: "Successful Graduates", value: "10,000+" },
        { label: "Books Authored", value: "3 Volumes" },
      ],
      specializations: [
        "Finance",
        "Islamic Banking",
        "Research-based Topics",
      ],
      books: [
        {
          title: "Risk Management Implementation and Solution",
          bestSeller: true,
        },
        {
          title:
            "The Global Financial Challenges of Entrepreneurship, E-Commerce, Terrorism and Covid-19",
          bestSeller: true,
        },
        {
          title: "Fundamentals of Financial Management-I",
          bestSeller: false,
        },
      ],
      portfolio: [
        {
          role: "Director of Education",
          organization:
            "OM Group of Companies (including OM International and OM Education Services)",
          description:
            "Directs higher education partnerships, learning centers, academic operations, and collaborative degree pathways with leading Malaysian universities.",
        },
        {
          role: "Regional Coordinator",
          organization: "Journal of Islamic Financial Studies",
          description:
            "Regional coordination, academic peer review, and editorial oversight for scholarly contributions in Islamic financial studies.",
        },
        {
          role: "Published Researcher & Speaker",
          organization:
            "International Journal of Entrepreneurship and Small Business | Problems and Perspectives in Management",
          description:
            "Author of impactful research papers in international journals and presenter at global academic conferences.",
        },
      ],
    },
  },

  // Advisory Board
  {
    slug: "asad-shamim",
    name: "Asad Shamim",
    role: "Trailblazing Visionary, Investor & Entrepreneur",
    board: "advisory",
    tier: "lead",
    photo: "/images/advisory/asadshamim.jpeg",
    profile: {
      headline:
        "Trailblazing Visionary, Investor, and One of the Most Influential British Pakistani Businessmen of His Generation.",
      qualification:
        "British Pakistani Entrepreneur, Visionary Businessman, Investor and Philanthropist",
      bio: [
        "Born and raised in Manchester, United Kingdom, Asad Shamim started his first profitable business venture as a teenager, rapidly expanding into a prominent chain of fashion boutiques across North West England. In 2007, he founded Furniture in Fashion, pioneering AI-driven logistics, warehouse automation, and augmented reality to build it into one of the United Kingdom's premier and largest online furniture retailers.",
        "On the international stage, Asad Shamim serves as Senior Advisor to His Highness Sheikh Ahmed Bin Faisal Al Qassimi. His high-level advisory work is instrumental in driving UK–UAE strategic partnerships, cross-border corporate transactions, infrastructure investments, ethical finance, innovation-led ventures, and sovereign capital deployment.",
        "A passionate philanthropist and champion of sports diplomacy, he serves as Vice President of the International Football Association (IFA7) across the UK and UAE, championing grassroots youth football and athlete inclusivity. Among his celebrated philanthropic interventions, he notably supported British diabetic boxer Muhammad Ali in triumphantly securing his professional boxing licence.",
      ],
      highlights: [
        { label: "Company Founded", value: "Furniture in Fashion" },
        { label: "Diplomatic Advisory", value: "UAE Royal Office" },
        { label: "Global Role", value: "Vice President IFA7" },
      ],
      specializations: [
        "Entrepreneurship & Business Leadership",
        "Strategic Investments & Private Equity",
        "Banking & Corporate Finance",
        "Corporate Restructuring & Turnarounds",
        "Cross-Border Transactions",
        "Infrastructure Investments",
        "Digital Commerce, AI Logistics & AR",
        "Sports Diplomacy & Philanthropy",
      ],
      portfolio: [
        {
          role: "Senior Advisor",
          organization: "His Highness Sheikh Ahmed Bin Faisal Al Qassimi",
          description:
            "High-level advisory on UK–UAE strategic partnerships, international investment, sovereign capital, ethical finance, and infrastructure development.",
        },
        {
          role: "Founder & Chief Executive",
          organization: "Furniture in Fashion (Founded 2007)",
          description:
            "Built into one of the UK's largest online furniture retailers, pioneering AI-driven logistics, e-commerce automation, and AR digital commerce.",
        },
        {
          role: "Vice President",
          organization: "International Football Association (IFA7) – UK & UAE",
          description:
            "Leading international sports diplomacy, grassroots football development, and athlete inclusivity initiatives.",
        },
      ],
      awards: [
        { year: "2018", award: "Asian Business Leaders Award" },
        { year: "2019", award: "British Muslim Awards" },
        { year: "2024", award: "Business Leader of the Year" },
      ],
    },
  },
  {
    slug: "dr-gokhan-bora-aktan",
    name: "Dr. Gökhan Bora Aktan",
    role: "Professor of Finance & Founder and CEO of Gitman Capital Advisors",
    board: "advisory",
    tier: "lead",
    photo: "/images/advisory/dr-gokhan.jpg",
    profile: {
      headline:
        "Professor of Finance, Founder & CEO of Gitman Capital Advisors, and Research Fellow at Euro-Med Research Business Institute.",
      qualification: "MBA, Ph.D., AFA",
      bio: [
        "Dr. Gökhan Bora Aktan is a Professor of Finance, researcher, and financial entrepreneur. He is the Founder and CEO of Gitman Capital Advisors, a Montenegro-based fund management and financial consultancy firm specializing in emerging capital markets and corporate valuation.",
        "He also serves as a Research Fellow at the Emerging Markets Group of the Euro-Med Research Business Institute. His international business experience spans strategic financial and market initiatives across Türkiye, the United Kingdom, Mexico, and Montenegro.",
      ],
      highlights: [
        { label: "Primary Role", value: "Founder & CEO" },
        { label: "Academic Rank", value: "Professor of Finance" },
        { label: "Global Reach", value: "4 Countries" },
      ],
      specializations: [
        "Emerging Capital Markets",
        "Global Investments & Fund Management",
        "Corporate Valuation",
        "International Finance",
        "Energy and Security Issues",
        "Financial Forecasting",
        "Business Development",
        "Financial Econometrics",
      ],
      portfolio: [
        {
          role: "Founder and CEO",
          organization: "Gitman Capital Advisors (Montenegro)",
          description:
            "Fund management and financial consultancy firm specializing in emerging capital markets, corporate valuation, and investment strategies.",
        },
        {
          role: "Research Fellow",
          organization: "Euro-Med Research Business Institute",
          description:
            "Research Fellow at the Emerging Markets Group, focusing on financial econometrics, forecasting, and international finance.",
        },
        {
          role: "Private Banking Portfolio Manager",
          organization: "QNB Finansbank",
          description:
            "Managed private banking client portfolios and high-net-worth investment management.",
        },
        {
          role: "Company Director",
          organization: "Trade Information Centre UK Ltd.",
          description:
            "Director overseeing international trade information, corporate governance, and commercial links.",
        },
        {
          role: "Business Development Director",
          organization: "Goldium Group",
          description:
            "Strategic international business development, commercial negotiations, and market growth.",
        },
      ],
      publications: [
        "European Journal of Finance",
        "Journal of Forecasting",
        "International Review of Economics and Finance",
        "International Journal of Forecasting",
        "International Journal of Business",
        "Journal of Property Investment and Finance",
      ],
      editorialPositions: [
        "Qualitative Research in Financial Markets",
        "Security and Defence Quarterly",
        "Journal of Public and Municipal Finance",
        "International Journal of Islamic Business",
        "Journal of Islamic Financial Studies",
        "Journal of Security and Sustainability Issues",
      ],
      memberships: [
        "American Finance Association (AFA)",
        "Financial Management Association International",
        "Society for Financial Econometrics",
      ],
    },
  },
  {
    slug: "dr-shazaib-butt",
    name: "Dr. Shazaib Butt",
    role: "Deputy Head of Department of Business Entrepreneurship and Finance at the Royal Docks School of Business & Law, University of East London.",
    board: "advisory",
    tier: "lead",
    photo: "/images/advisory/dr-shazaib.jpeg",
    profile: {
      headline:
        "Deputy Head of Department of Business Entrepreneurship and Finance at the Royal Docks School of Business & Law, University of East London.",
      qualification:
        "Royal Docks School of Business & Law, University of East London",
    },
  },
  {
    slug: "prof-dr-muhammad-sarwar",
    name: "Professor Dr. Muhammad Sarwar",
    role: "Professor of Education",
    board: "advisory",
    tier: "lead",
    photo: "/images/advisory/dr-muhammad-sarwar.jpg",
    profile: {
      headline:
        "Professor of Education, HEC Approved PhD Supervisor, and Former Director Quality Enhancement Cell (QEC) at the University of Sargodha.",
      qualification:
        "Post-Doctorate (University of Worcester, United Kingdom) | PhD in Education",
      email: "drsarwar@ymail.com",
      bio: [
        "Prof. Dr. Muhammad Sarwar is a distinguished Professor of Education and academic leader. He completed his Post-Doctoral fellowship at the University of Worcester, United Kingdom, and has served as Professor and Director of the Quality Enhancement Cell (QEC) at the University of Sargodha.",
        "Over a prolific academic career, Dr. Sarwar has served in senior university governance roles including Dean of the Faculty of Arts and Humanities, Dean of Social Sciences, Dean of Medical Sciences, Director of the Office of Research, Innovation and Commercialization (ORIC), Director Academics, Chairman of the University Affiliation Committee, and Chairman of the Department of Education.",
        "A prolific researcher and evaluator, he has published more than 70 peer-reviewed research articles in leading national and international journals and supervised over 70 MPhil and PhD theses. Dr. Sarwar is an approved PhD supervisor by the Higher Education Commission (HEC), an experienced curriculum writer, and recipient of multiple competitive research grants.",
        "His research and institutional collaborations span prominent global and national developmental partners, including the World Bank, USAID, the Higher Education Commission (HEC), Government of Punjab, Sustainable Development Policy Institute (SDPI), and Technical Education and Vocational Training Authority (TEVTA) across capacities as Principal Investigator, Co-Principal Investigator, Consultant, and Team Member.",
      ],
      highlights: [
        { label: "Research Articles", value: "70+ Published" },
        { label: "Theses Supervised", value: "70+ MPhil/PhD" },
        { label: "Post-Doctorate", value: "Univ. of Worcester" },
      ],
      specializations: [
        "Curriculum Development & Evaluation",
        "Quality Enhancement in Higher Education (QEC)",
        "Doctoral Research Supervision",
        "Institutional Governance & Accreditation",
        "Educational Policy & Planning",
        "Teacher Education & Pedagogical Training",
      ],
      portfolio: [
        {
          role: "Director",
          organization:
            "Quality Enhancement Cell (QEC) – University of Sargodha",
          description:
            "Led institutional quality assurance frameworks, accreditation compliance, and academic evaluation standards.",
        },
        {
          role: "Former Dean",
          organization:
            "Faculty of Arts & Humanities, Social Sciences, and Medical Sciences",
          description:
            "Executive academic and administrative leadership overseeing multiple faculties and departmental academic programs.",
        },
        {
          role: "Director",
          organization:
            "Office of Research, Innovation and Commercialization (ORIC) & Academics",
          description:
            "Directed university research development, commercialization, industrial linkages, and academic curriculum planning.",
        },
        {
          role: "Chairman",
          organization:
            "University Affiliation Committee & Department of Education",
          description:
            "Chaired academic affiliation appraisals, institutional accreditations, and teacher education departments.",
        },
        {
          role: "Principal Investigator & Consultant",
          organization: "World Bank, USAID, HEC, TEVTA & SDPI",
          description:
            "Collaborative research projects, institutional policy frameworks, and nationwide education evaluations.",
        },
      ],
      memberships: [
        "Higher Education Commission (HEC) Approved PhD Supervisor",
        "Member of ~24 National & International Professional Bodies",
        "Postdoctoral Researcher, University of Worcester, United Kingdom",
      ],
    },
  },
];

// Dev-time assertion: ensure slugs are unique and valid kebab-case
const seenSlugs = new Set<string>();
const KEBAB_CASE_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

for (const member of boardMembers) {
  if (!KEBAB_CASE_REGEX.test(member.slug)) {
    throw new Error(
      `[Assertion Error] Board member slug "${member.slug}" is not valid kebab-case.`,
    );
  }

  if (seenSlugs.has(member.slug)) {
    throw new Error(
      `[Assertion Error] Duplicate board member slug found: "${member.slug}".`,
    );
  }

  seenSlugs.add(member.slug);
}
