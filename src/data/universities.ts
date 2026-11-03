import type { University } from "@/types/university";

export const universities: University[] = [
  {
    slug: "unirazak",
    name: "Universiti Tun Abdul Razak (UNIRAZAK)",
    shortName: "UNIRAZAK",
    country: "Malaysia",
    city: "Kuala Lumpur",
    established: 1997,
    owner: "Yayasan Pelaburan Bumiputra",
    tagline: "Premier Malaysian Business & Professional Degree Destination",
    badge: "SETARA 5-Star University",
    ranking: "SETARA 5-Star",
    studentCount: "15,000+ Alumni",
    globalReach: "Kuala Lumpur Campus & Global ODL",
    heroImage: "/images/page header/unirazak.jpg",
    aboutImage: "/images/universities/girl-uniRazak.jpg",
    summary:
      "A premier Malaysian university known for its business, accounting, public management and education programmes, available on campus in Kuala Lumpur and through flexible open distance learning.",
    highlights: [
      "Accelerated degree pathways with credit exemptions for ACCA, ICAP, PIPFA, and CA",
      "Tun Razak Graduate School with AACSB-aligned business curricula",
      "SETARA 5-star rating (Emerging University) and SIRIM ISO 9001 certified",
      "Fully accredited by MQA and recognized by Ministry of Higher Education Malaysia",
    ],
    keyStats: [
      { label: "Established", value: "1997", sublabel: "Kuala Lumpur" },
      {
        label: "SETARA Rating",
        value: "5-Star",
        sublabel: "Emerging Category",
      },
      {
        label: "Ownership",
        value: "YPB",
        sublabel: "Yayasan Pelaburan Bumiputra",
      },
      { label: "Pathways", value: "Top-Up", sublabel: "ACCA & ICAP Credits" },
    ],
    schools: [
      "Tun Razak Graduate School (TRGS)",
      "Bank Rakyat School of Business and Innovation (BRSBI)",
      "School of Education & Humanities (SEH)",
      "School of Accounting and Taxation (SAT)",
    ],
    about: [
      "Universiti Tun Abdul Razak is named after Tun Abdul Razak Hussein, the second Prime Minister of Malaysia.",
      "It was established in 1997 as one of the first private universities in Malaysia and is wholly owned by Yayasan Pelaburan Bumiputra.",
      "The university is known for its Graduate School of Business and offers MQA-accredited programmes, including bachelor's and master's degrees in business, designed around industry and career goals.",
      "UNIRAZAK qualifications are recognised internationally, and its graduates work in leading organisations around the world.",
    ],
    address:
      "Universiti Tun Abdul Razak, 195A Jalan Tun Razak, 50400 Kuala Lumpur, Malaysia",
    website: "https://www.unirazak.edu.my",
    recognitions: [
      {
        title: "SETARA 5-star rating",
        detail: "Emerging University category",
        year: 2018,
        verified: true,
      },
      {
        title: "MyRA 4-star rating",
        detail: "Malaysia Research Assessment",
        year: 2017,
        verified: true,
      },
      {
        title: "Entrepreneurial Private University of the Year",
        detail: "Ministry of Education Grand Award",
        year: 2015,
        verified: true,
      },
      { title: "MSC Malaysia status", verified: true },
      { title: "SIRIM ISO 9001 certification", verified: true },
      { title: "Export Outstanding Achievement Award", verified: false },
      {
        title: "Brand Laureate Awards",
        detail:
          "Best Brands in Education (Tertiary) and Best Brands in Brand Management",
        verified: false,
      },
    ],
    modes: ["conventional", "odl", "online"],
  },
];
