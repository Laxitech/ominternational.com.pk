export const siteConfig = {
  name: "OM International",
  tagline: "Education Without Borders",
  description:
    "Education facilitation for Asia e University and UNIRAZAK programmes, connecting students in Pakistan with international degree pathways.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ominternational.edu.pk",
  contact: {
    email: "admissions@ominternational.edu.pk",
    phone: "+92 42 3578 1234",
    phoneDisplay: "+92 (42) 3578 1234",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+923001234567",
    whatsappDisplay: "+92 300 1234567",
    address: "Gulberg III, Lahore, Punjab, Pakistan",
    londonAddress: "Flagship Center, London, United Kingdom",
    hours: "Monday – Saturday: 9:00 AM – 6:00 PM (PKT)",
  },
  social: {
    facebook: "https://facebook.com/ominternational",
    instagram: "https://instagram.com/ominternational",
    linkedin: "https://linkedin.com/company/ominternational",
  },
};
