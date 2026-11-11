import {
  Award,
  BadgeCheck,
  Briefcase,
  Building2,
  Globe2,
  GraduationCap,
  Landmark,
  Scale,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

export type ImpactNumberItem = {
  id: string;
  value: string;
  label: string;
  description?: string;
  icon: LucideIcon;
};

export const IMPACT_NUMBERS: ImpactNumberItem[] = [
  {
    id: "graduates",
    value: "10,000",
    label: "Graduates",
    description: "Successful alumni worldwide who have graduated through our partnered degree pathways.",
    icon: GraduationCap,
  },
  {
    id: "learning-centers",
    value: "12",
    label: "Learning Centers",
    description: "Dedicated learning and student facilitation centers situated across Pakistan.",
    icon: Building2,
  },
  {
    id: "countries-facilitation-centers",
    value: "5",
    label: "Countries Facilitation Centers",
    description: "International presence across Pakistan, London (UK), Malaysia, Dubai (UAE), and Syria.",
    icon: Globe2,
  },
  {
    id: "employability",
    value: "98%",
    label: "Employability",
    description: "Industry-ready alumni with exceptional employment rates in global corporations.",
    icon: Briefcase,
  },
  {
    id: "icap-members",
    value: "3,000+",
    label: "ICAP Members",
    description: "Institute of Chartered Accountants of Pakistan members enrolled and graduated.",
    icon: Award,
  },
  {
    id: "acca-members",
    value: "3,500+",
    label: "ACCA Members",
    description: "Association of Chartered Certified Accountants members upskilled through fast-track degrees.",
    icon: BadgeCheck,
  },
  {
    id: "icmap-members",
    value: "1,000+",
    label: "ICMAP Members",
    description: "Institute of Cost and Management Accountants of Pakistan members.",
    icon: Scale,
  },
  {
    id: "icaew-members",
    value: "500+",
    label: "ICAEW Members",
    description: "Institute of Chartered Accountants in England and Wales chartered professionals.",
    icon: Landmark,
  },
  {
    id: "senior-gov-employees",
    value: "500+",
    label: "Senior Government Employees",
    description: "Senior civil servants, policymakers, and public sector officers.",
    icon: UserCheck,
  },
];
