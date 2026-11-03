import {
  CalendarCheck,
  GraduationCap,
  Landmark,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Stat = {
  id: string;
  value: number;
  suffix: string;
  tag: string;
  label: string;
  description: string;
  icon: LucideIcon;
  pad: number;
};

export const stats: Stat[] = [
  {
    id: "graduates",
    value: 3000,
    suffix: "+",
    tag: "Alumni Network",
    label: "Students graduated",
    description: "Empowered learners across Pakistan & abroad",
    icon: Users,
    pad: 0,
  },
  {
    id: "years",
    value: 10,
    suffix: "+",
    tag: "Decade of Trust",
    label: "Years in operation",
    description: "Pioneering degree pathways since 2014",
    icon: CalendarCheck,
    pad: 0,
  },
  {
    id: "universities",
    value: 2,
    suffix: "",
    tag: "MQA Accredited",
    label: "Partner universities",
    description: "UNIRAZAK University",
    icon: GraduationCap,
    pad: 2,
  },
  {
    id: "london",
    value: 1,
    suffix: "",
    tag: "Global Hub",
    label: "UK Flagship Center",
    description: "Connecting students with worldwide mobility",
    icon: Landmark,
    pad: 2,
  },
];
