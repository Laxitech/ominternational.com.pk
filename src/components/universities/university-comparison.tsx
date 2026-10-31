import Link from "next/link";
import { CheckCircle2, ChevronRight, HelpCircle } from "lucide-react";
import type { University } from "@/types/university";
import { cn } from "@/lib/utils";

type UniversityComparisonProps = {
  universities: University[];
};

const COMPARISON_ROWS = [
  {
    category: "Accreditation & Standing",
    unirazak: "Malaysian Qualifications Agency (MQA) & MOHE Malaysia; SETARA 5-Star Rating; ISO 9001 certified",
    aeu: "MQA & MOHE Malaysia accredited; Member of Association of Commonwealth Universities (ACU) & ICDE",
  },
  {
    category: "Campus & Location",
    unirazak: "City Campus on Jalan Tun Razak, central Kuala Lumpur, Malaysia",
    aeu: "Headquartered in Cyberjaya / Kuala Lumpur, Malaysia with international study network",
  },
  {
    category: "Study Delivery Modes",
    unirazak: "Conventional (On-Campus in KL), Open Distance Learning (ODL), and 100% Online",
    aeu: "Conventional (Cyberjaya/KL campus), Open Distance Learning (ODL), and 100% Online LMS",
  },
  {
    category: "Professional Credit Exemptions",
    unirazak: "Specialized direct credit mappings for ACCA, ICAP, PIPFA, CA, and related qualifications",
    aeu: "Flexible prior learning credit assessments & modular credits for experienced professionals",
  },
  {
    category: "Flagship Disciplines",
    unirazak: "Accounting, Business Administration, Public Management, Education, Leadership",
    aeu: "Management, Information Technology, Digital Media, Cognitive Sciences, Education",
  },
  {
    category: "Pakistani Student Support",
    unirazak: "Full facilitation through OM International learning centers in Karachi, Lahore, Islamabad",
    aeu: "Comprehensive admissions, LMS orientation, and local examination center support across Pakistan",
  },
  {
    category: "HEC Equivalence Pathway",
    unirazak: "Eligible for Higher Education Commission (HEC) Pakistan degree equivalence upon completion",
    aeu: "Eligible for Higher Education Commission (HEC) Pakistan degree equivalence upon completion",
  },
];

export default function UniversityComparison({
  universities,
}: UniversityComparisonProps) {
  const unirazak = universities.find((u) => u.slug === "unirazak");
  const aeu = universities.find((u) => u.slug === "asia-e-university");

  if (!unirazak || !aeu) return null;

  return (
    <section
      aria-labelledby="comparison-heading"
      className="border-y border-border bg-secondary/30 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary sm:text-sm">
            Institution Comparison
          </p>
          <h2
            id="comparison-heading"
            className="mt-3 text-balance font-serif text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight text-heading sm:text-[3rem] leading-[1.15]"
          >
            Compare Our Partner Universities
          </h2>
          <p className="mt-4 text-balance text-sm leading-relaxed text-body sm:text-base sm:leading-7">
            Both institutions are fully accredited by the Malaysian Qualifications Agency (MQA) and recognized by the Ministry of Higher Education Malaysia. Choose the pathway that matches your career objectives.
          </p>
        </div>

        {/* Comparison Table / Matrix */}
        <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th className="w-1/3 p-5 sm:p-6 text-sm font-semibold text-muted">
                    Feature &amp; Criteria
                  </th>
                  <th className="w-1/3 p-5 sm:p-6 border-l border-border bg-primary-subtle/40">
                    <div className="space-y-1">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                        SETARA 5-Star
                      </span>
                      <p className="font-serif text-lg font-bold text-heading">
                        {unirazak.name}
                      </p>
                      <Link
                        href={`/universities/${unirazak.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                      >
                        <span>View Profile</span>
                        <ChevronRight className="size-3" aria-hidden="true" />
                      </Link>
                    </div>
                  </th>
                  <th className="w-1/3 p-5 sm:p-6 border-l border-border">
                    <div className="space-y-1">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-accent">
                        34 ACD Nations
                      </span>
                      <p className="font-serif text-lg font-bold text-heading">
                        {aeu.name}
                      </p>
                      <Link
                        href={`/universities/${aeu.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                      >
                        <span>View Profile</span>
                        <ChevronRight className="size-3" aria-hidden="true" />
                      </Link>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                {COMPARISON_ROWS.map((row, index) => (
                  <tr
                    key={row.category}
                    className={cn(
                      "transition-colors hover:bg-secondary/20",
                      index % 2 === 1 ? "bg-secondary/10" : "bg-surface",
                    )}
                  >
                    <td className="p-5 sm:p-6 font-semibold text-heading">
                      <div className="flex items-center gap-2">
                        <span>{row.category}</span>
                      </div>
                    </td>
                    <td className="p-5 sm:p-6 border-l border-border text-body leading-relaxed bg-primary-subtle/10">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="size-4 shrink-0 text-primary mt-1"
                          aria-hidden="true"
                        />
                        <span>{row.unirazak}</span>
                      </div>
                    </td>
                    <td className="p-5 sm:p-6 border-l border-border text-body leading-relaxed">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="size-4 shrink-0 text-accent mt-1"
                          aria-hidden="true"
                        />
                        <span>{row.aeu}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Table Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-border bg-secondary/30 p-4 sm:p-6">
            <p className="text-xs text-muted flex items-center gap-1.5">
              <HelpCircle className="size-4 text-muted/80 shrink-0" aria-hidden="true" />
              <span>Need help deciding between these two universities? Our academic counselors provide free transcript assessments.</span>
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover shrink-0"
            >
              <span>Speak with an Advisor</span>
              <ChevronRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
