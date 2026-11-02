import type { BoardMember } from "@/types/board";

export const PROFILE_CTA_LABEL = "Click here to view profile";

export const GOVERNING_BOARD_HEADLINE = "Governing Board";
export const GOVERNING_BOARD_SUBHEADING =
  "OM International is managed through a professional board comprising following prominent individuals";

export const ADVISORY_BOARD_HEADLINE = "Advisory Board";
export const ADVISORY_BOARD_INTRO =
  "The management of OM International is seeking regular input from its academic advisory board comprising following notable professionals and businessmen.";

// TODO: Replace placeholder photos with final assets at /images/board/<slug>.jpg and set the photo field accordingly.
export const boardMembers: BoardMember[] = [
  // Governing Board
  {
    slug: "mian-masood-ahmad",
    name: "Mian Masood Ahmed",
    role: "Chairman",
    board: "governing",
    tier: "lead",
    profile: {
      qualification: "Studied in Dhaka, East Pakistan & United Kingdom",
      bio: [
        "Mian Masood Ahmed has been part of one of Pakistan’s leading Business Houses. He has considerable experience in setting up and running a number of industries over the last 50 years.",
      ],
      highlights: [
        { label: "Industrial Leadership", value: "50+ Years" },
        { label: "Corporate Portfolio", value: "5 Directorships" },
        { label: "Education", value: "Dhaka & UK" },
      ],
      portfolio: [
        {
          role: "Chairman",
          organization: "OM international (Pvt) Ltd, Islamabad",
        },
        {
          role: "Chairman",
          organization: "Chrome Ore Services (Pvt) Ltd",
        },
        {
          role: "Chairman",
          organization: "Sunrise International",
        },
        {
          role: "Managing Director",
          organization: "Akbar Textile Mill Ltd, Mirpur AK",
        },
        {
          role: "Director",
          organization: "Nishat Mills Ltd, Faisalabad",
        },
      ],
    },
  },
  {
    slug: "dr-omar-masood",
    name: "Prof. Dr. Omar Masood",
    role: "Chief Executive Officer",
    board: "governing",
    tier: "lead",
    profile: {
      headline:
        "Leading advisor and trainer in area of economy, privatisation process, financial risk management, and Islamic banking to sovereign governments, financial institutions, and academic centers worldwide.",
      qualification:
        "Former Director, Centre of Islamic Banking & Finance, University of East London (UK)",
      bio: [
        "Prof. Dr. Omar Masood is the CEO of OM International Private Limited. He is an internationally renowned educationist, macroeconomic consultant, and private equity expert with over 20 years of experience in teaching, consultancy, and senior administrative leadership across premier universities and financial powerhouses globally.",
        "He is the former Director of the Centre of Islamic Banking and Finance at the Royal Docks Business School, University of East London, United Kingdom. Throughout his career, Prof. Masood has served as financial advisor in risk analysis and private equity to premier institutions including HSBC and Goldman Sachs, alongside strategic counsel to multinational technology giants such as Intel and Microsoft.",
        "Prof. Masood is recognized as a foremost global authority, lead advisor, and trainer in Islamic banking, finance, curriculum modernization, and skills development. He serves as an executive advisor on finance, privatization, economic strategy, and education for the Governments of Saudi Arabia, Malaysia, Turkey, and the United Kingdom.",
      ],
      highlights: [
        { label: "Global Experience", value: "20+ Years" },
        { label: "Authored Books", value: "10 Volumes" },
        { label: "Sovereign Advisory", value: "4 Governments" },
      ],
      books: [
        {
          title: "Truth about the Global Financial Crisis",
          bestSeller: true,
        },
        {
          title: "Multiplying Money through Financial Management",
          bestSeller: true,
        },
        {
          title:
            "Ten books published with leading international publishers (including 3 International Best Sellers in Global Economics and Corporate Finance)",
          bestSeller: false,
        },
      ],
      governmentsAdvised: [
        "Saudi Arabian Government (Finance, Economy & Skills Development)",
        "Malaysian Government (Higher Education & Islamic Banking Frameworks)",
        "Turkish Government (Privatisation & Financial Modernization)",
        "United Kingdom Government (Banking Regulations & Academic Partnerships)",
      ],
      portfolio: [
        {
          role: "Chief Executive Officer",
          organization: "OM International Private Limited",
          description:
            "Executive leadership driving international academic joint ventures, global university pathways, and cross-border education models.",
        },
        {
          role: "Former Director",
          organization:
            "Centre of Islamic Banking and Finance, Royal Docks Business School, University of East London, UK",
          description:
            "Directed international research, postgraduate curriculum design, and accredited banking programs in London.",
        },
        {
          role: "Financial & Risk Advisor",
          organization: "HSBC & Goldman Sachs",
          description:
            "Delivered quantitative risk assessments, private equity modeling, and international portfolio restructuring.",
        },
        {
          role: "Corporate Strategic Advisor",
          organization: "Intel & Microsoft",
          description:
            "Consulted on technological integration, corporate financial strategy, and enterprise market expansion.",
        },
        {
          role: "Lead Sovereign Advisor",
          organization:
            "Governments of Saudi Arabia, Malaysia, Turkey, and the United Kingdom",
          description:
            "High-level ministerial advisory on national curriculum reforms, skills development frameworks, economy, and privatization.",
        },
      ],
    },
  },
  {
    slug: "mohammad-maqbool",
    name: "Mohammad Maqbool",
    role: "Academic Advisor",
    board: "governing",
    tier: "member",
    profile: {
      qualification:
        "M.Com, FCA, FCA (England & Wales), FCCA (UK), CPA, CA (Ontario), CPFA (UK)",
      email: "omaqbool@hotmail.com",
      headline:
        "Chartered Accountant (England & Wales, Canada & Pakistan), Fellow ACCA & CIPFA UK, Senior Partner & Corporate Governance Specialist",
      bio: [
        "Muhammad Maqbool is a Chartered Accountant from England & Wales, Canada and Pakistan. He is also fellow member of ACCA and CIPFA UK. He is specialist of training in IFRS, Financial Management, Taxation, Corporate Governance and Business Reporting disciplines. He is senior partner in Tariq Abdul Ghani Maqbool & Co. Chartered Accountants and Andersen Chartered Accountants (UAE).",
        "He had been a Council Member of Institute of Chartered Accountants of Pakistan (ICAP) in the term 1993-97 and 2013-17. He had been the President of Pakistan Institute of Public Finance Accountants (PIPFA) in 1995 and 2015. He had been Vice President, Chairman Investigation Committee and Chairman of Education & Training Committee of ICAP for year 2014-15. He was Chairman of Technical Advisory Committee of ICAP for period from 2015-17. He represented ICAP as member on various committees of South Asian Federation of Accountants (SAFA). He had been contact person in Pakistan for Institute of Chartered Accountants in England and Wales (ICAEW) for two years (2011-13).",
        "Currently he is member of Accounting Standards Board of Pakistan. He is Academic Advisor to various Higher Educational Instituitions. He is elected independent director and Chairman of Audit Committee of Bata Pakistan since September, 2013. He was also member of Policy Board constituted by Auditor General of Pakistan. Since November, 2016 he is co-opted as a council member of Chartered Institute of Public Finance Accountants (CIPFA) of UK.",
      ],
      highlights: [
        { label: "Professional Practice", value: "30+ Years" },
        { label: "Chartered Qualifications", value: "3 Jurisdictions" },
        { label: "Professional Fellowships", value: "6 Bodies" },
      ],
      specializations: [
        "IFRS (International Financial Reporting Standards)",
        "Financial Management & Corporate Valuation",
        "Corporate Governance & Audit Committee Oversight",
        "Taxation & Regulatory Advisory",
        "Business Reporting & Assurance",
        "Public Sector Accounting Standards",
      ],
      portfolio: [
        {
          role: "Academic Advisor",
          organization:
            "OM International & Higher Educational Institutions",
          description:
            "Providing academic advisory on curriculum standards, international pathways, and professional accounting accreditations.",
        },
        {
          role: "Senior Partner",
          organization:
            "Tariq Abdul Ghani Maqbool & Co. Chartered Accountants",
          description:
            "Senior partner leading audit engagements, corporate governance advisory, tax consultancy, and executive training.",
        },
        {
          role: "Senior Partner",
          organization: "Andersen Chartered Accountants (UAE)",
          description:
            "Overseeing cross-border advisory, assurance, international tax planning, and corporate compliance services.",
        },
        {
          role: "Independent Director & Audit Committee Chairman",
          organization: "Bata Pakistan",
          description:
            "Elected independent director and chairman of the audit committee since September 2013, overseeing financial reporting integrity and internal controls.",
        },
        {
          role: "Council Member",
          organization:
            "Chartered Institute of Public Finance Accountants (CIPFA), UK",
          description:
            "Co-opted council member since November 2016 representing international public sector accounting standards.",
        },
        {
          role: "Member",
          organization: "Accounting Standards Board of Pakistan",
          description:
            "Formulating and reviewing statutory national accounting standards and financial reporting frameworks.",
        },
        {
          role: "Former President (1995 & 2015)",
          organization:
            "Pakistan Institute of Public Finance Accountants (PIPFA)",
          description:
            "Served as president for two terms, driving public finance education, training, and institutional capacity building.",
        },
        {
          role: "Former Vice President & Council Member",
          organization:
            "Institute of Chartered Accountants of Pakistan (ICAP)",
          description:
            "Council member (1993-97, 2013-17), Vice President, Chairman of Investigation Committee, Chairman of Education & Training Committee (2014-15), and Chairman of Technical Advisory Committee (2015-17).",
        },
        {
          role: "Former Policy Board Member",
          organization: "Auditor General of Pakistan",
          description:
            "Served as member of the policy board constituted to advise on state audit practices and governance.",
        },
        {
          role: "Former Contact Person in Pakistan (2011-13)",
          organization:
            "Institute of Chartered Accountants in England and Wales (ICAEW)",
          description:
            "Official contact and representative for ICAEW in Pakistan fostering bilateral professional accounting relations.",
        },
      ],
    },
  },
  {
    slug: "prof-malik-mumtaz",
    name: "Prof. Malik Mumtaz",
    role: "Advisor Operations",
    board: "governing",
    tier: "member",
    profile: {
      qualification:
        "Graduated from University of St. Andrews, UK (M. Litt, Economics); University of the Punjab, Lahore (M.A. Economics)",
      headline:
        "Former Joint Secretary External Finance, WTO Expert & Economic Counselor to the United Nations",
      bio: [
        "Prof. Malik Mumtaz is Advisor Operations in OM International (Pvt.) Limited. He holds vast experience in operational matters, macroeconomic governance, international finance, and public sector administrative management.",
        "Over an extensive career in public and international economic service, he has represented Pakistan on premier multilateral platforms including as Economic Counselor at the Pakistan Permanent Mission to the United Nations in New York, as a WTO Expert with the Islamic Development Bank in Saudi Arabia, and as Director General of the World Bank wing in Pakistan.",
        "His distinguished government portfolio comprises executive leadership roles at the Ministry of Finance, Islamabad as Joint Secretary and Deputy Secretary of the External Finance Wing, alongside senior planning tenures at the Planning Commission of Pakistan across microeconomic and international economic sectors.",
      ],
      highlights: [
        { label: "Public Service", value: "35+ Years" },
        { label: "International Missions", value: "UN & IDB" },
        { label: "Higher Education", value: "St. Andrews & PU" },
      ],
      portfolio: [
        {
          role: "Advisor Operations",
          organization: "OM International (Pvt) Ltd, Islamabad",
          description:
            "Operational guidance on organizational administration, international program delivery, and institutional governance.",
        },
        {
          role: "Director General",
          organization: "World Bank Wing in Pakistan – Islamabad",
          description:
            "Executive leadership overseeing World Bank developmental portfolios and multilateral coordination in Pakistan.",
        },
        {
          role: "Joint Secretary",
          organization:
            "Ministry of Finance (External Finance Wing) – Islamabad",
          description:
            "Led external finance strategy, foreign economic relations, and sovereign developmental assistance agreements.",
        },
        {
          role: "Deputy Secretary",
          organization:
            "Ministry of Finance (External Finance) – Islamabad",
          description:
            "Managed external bilateral financing, multilateral loans, and national financial coordination.",
        },
        {
          role: "WTO Expert",
          organization: "Islamic Development Bank (IDB) – Saudi Arabia",
          description:
            "Specialist technical advisory on World Trade Organization rules, international trade frameworks, and member states trade policy.",
        },
        {
          role: "Economic Counselor",
          organization:
            "Pakistan Permanent Mission to the United Nations – New York",
          description:
            "Diplomatic representation on international economic policy, macroeconomic coordination, and United Nations sustainable development committees.",
        },
        {
          role: "Deputy Secretary",
          organization: "Ministry of Finance – Islamabad",
          description:
            "Senior ministerial administration, fiscal policy oversight, and budgetary operations.",
        },
        {
          role: "Deputy Chief",
          organization:
            "Planning Commission (Micro Economic Planning) – Islamabad",
          description:
            "Formulation and technical appraisal of micro-economic policy frameworks and national development schemes.",
        },
        {
          role: "Deputy Chief",
          organization:
            "Planning Commission (International Economic Sector) – Islamabad",
          description:
            "Strategic planning of international economic sectors, cross-border economic linkages, and trade studies.",
        },
        {
          role: "Assistant Chief",
          organization: "Planning Commission – Islamabad",
          description:
            "Economic evaluation, sectoral project assessments, and national planning documentation.",
        },
      ],
    },
  },
  {
    slug: "dr-ali-sher-mohamad",
    name: "Dr. Ali Sher Mohamad",
    board: "governing",
    tier: "member",
  },

  // Advisory Board
  {
    slug: "prof-dr-muhammad-sarwar",
    name: "Prof. Dr. Muhammad Sarwar",
    board: "advisory",
    tier: "member",
  },
  {
    slug: "brig-dr-tahir-nawaz",
    name: "Brig. Dr. Tahir Nawaz",
    board: "advisory",
    tier: "member",
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
