export const siteConfig = {
  name: "OM International",
  tagline: "Education Without Borders",
  description:
    "Education facilitation for Asia e University and UNIRAZAK programmes, connecting students in Pakistan with international degree pathways.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ominternational.edu.pk",
  contact: {
    email: "info@ominternational.com.pk",
    phone: "+92 300 8564854",
    phoneDisplay: "+92 300 8564854",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+923008564854",
    whatsappDisplay: "+92 300 8564854",
    address: "OM Building, Plot 1B, Street-2, Al-Fatah Market, G-9/3, Islamabad, Pakistan",
    londonAddress: "Flagship Center, London, United Kingdom",
    hours: "Mon – Sat: 10:00 – 18:00 (PKT)",
  },
  social: {
    facebook: "https://facebook.com/ominternational",
    instagram: "https://instagram.com/ominternational",
    linkedin: "https://linkedin.com/company/ominternational",
  },
};
