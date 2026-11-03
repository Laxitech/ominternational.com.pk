export type Testimonial = {
  id: string;
  name: string;
  role: string;
  program: string;

  quote: string;

  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-hamza",
    name: "Hamza Siddiqui",
    role: "Senior Finance Manager",
    program: "Doctor of Business Administration",
    quote:
      "The team made every part of my application clear and manageable. I could focus on my studies knowing local guidance was always available.",

    initials: "HS",
  },
  {
    id: "testimonial-sara",
    name: "Sara Ahmed",
    role: "Marketing Strategist",
    program: "Bachelor of Business Administration (BBA)",
    quote:
      "Flexible study allowed me to continue my career while working toward an internationally recognised qualification.",
    initials: "SA",
  },
  {
    id: "testimonial-bilal",
    name: "Bilal Tariq",
    role: "ACCA Affiliate & Audit Consultant",
    program: "BSc (Hons) in Accounting & Finance",
    quote:
      "From selecting my programme to completing it, I felt supported at every stage of the journey.",

    initials: "BT",
  },
];
