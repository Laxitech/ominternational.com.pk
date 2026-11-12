import type { Center } from "@/types/center";

export const centers: Center[] = [
  {
    id: "islamabad",
    slug: "islamabad",
    city: "Islamabad",
    country: "Pakistan",
    name: "Pakistan Facilitation Center (Head Office)",
    role: "Head Office",
    isInternational: true,
    summary:
      "Our head office team advises students on programme choice, entry requirements and the admissions process for our partner universities.",
    address:
      "OM Building, Plot 1B, Street-2, Al-Fatah Market, G-9/3, Islamabad.",
    whatsapp: "+92 300 8370568",
    phone: "+92 51 8438171",
    email: "Headoffice@ominternational.com.pk",
    emails: [
      "Headoffice@ominternational.com.pk",
      "Ceo@ominternational.com.pk",
    ],
  },
  {
    id: "london",
    slug: "london",
    city: "London",
    country: "United Kingdom",
    name: "London Facilitation Center",
    role: "United Kingdom",
    isInternational: true,
    summary:
      "Our flagship international center supports students based in the United Kingdom and Europe who wish to study with our partner universities.",
    address: "Om International Edgware Road London",
  },
  {
    id: "syria",
    slug: "syria",
    city: "Syria",
    country: "Syria",
    name: "Syria Facilitation Center",
    role: "Syria",
    isInternational: true,
    contactName: "Omran Al Ati",
    summary:
      "Our Syria facilitation center assists students with international degree pathways, admissions guidance, and educational consultancy.",
    address:
      "Linkora Advisory Services LLC, Mezzanine Floor, Semi Floor, Union of Damascus and Countryside Workers Building, Damascus Governorate, Al-Salihiyah Area - Damascus, Syria",
    phone: "+971528494787",
    email: "Omran.alati@hotmail.com",
  },
  {
    id: "malaysia",
    slug: "malaysia",
    city: "Malaysia",
    country: "Malaysia",
    name: "Malaysia Facilitation Center",
    role: "Malaysia",
    isInternational: true,
    summary:
      "Our Malaysia facilitation center in Kuala Lumpur provides regional academic coordination, partner university liaison, and student support.",
    address:
      "OM Global Services, Plaza Damas 3, Taman Sri Hartamas, 50480 Kuala Lumpur, Malaysia",
  },
  {
    id: "rawalpindi",
    slug: "rawalpindi",
    city: "Rawalpindi",
    country: "Pakistan",
    name: "Rawalpindi Center",
    role: "Regional office",
    isInternational: false,
    summary:
      "Our Rawalpindi office serves students in the twin cities region, offering in-person guidance on programme choice, entry requirements and admissions.",
    address:
      "Office #4, LG , Plaza 57, Square Commercial Area, Bahria Phase VII, Rawalpindi.",
  },
  {
    id: "rawalpindi-facilitation",
    slug: "rawalpindi-facilitation",
    city: "Rawalpindi Facilitation",
    country: "Pakistan",
    name: "OM Facilitation Centre",
    role: "Regional Facilitation Centre",
    isInternational: false,
    contactName: "Brigadier Tahir Hussain Malik (Retd)",
    address: "Flat# 2, First Floor, Umar Plaza, Chaklala Scheme 3, Rawalpindi.",
  },
];
