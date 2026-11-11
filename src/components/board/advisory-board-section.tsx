import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { BoardMember } from "@/types/board";

interface AdvisoryBoardSectionProps {
  members: BoardMember[];
  className?: string;
}

// Explicit hierarchical priority order: Chairman -> Senior Advisory Members -> Academic Advisors
const HIERARCHICAL_ORDER = [
  "asad-shamim",
  "dr-gokhan-bora-aktan",
  "dr-shazaib-butt",
  "prof-dr-muhammad-sarwar",
  "brig-dr-muhammad-tahir-nawaz",
];

export default function AdvisoryBoardSection({
  members,
  className,
}: AdvisoryBoardSectionProps) {
  const advisoryMembers = members
    .filter((m) => m.board === "advisory")
    .sort((a, b) => {
      const idxA = HIERARCHICAL_ORDER.indexOf(a.slug);
      const idxB = HIERARCHICAL_ORDER.indexOf(b.slug);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return 0;
    });

  if (advisoryMembers.length === 0) {
    return null;
  }

  return (
    <section
      id="advisory-board"
      aria-label="Advisory Board Members"
      className={className}
    >
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Vertical Hierarchical Stack (Top to Bottom) */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {advisoryMembers.map((member, index) => {
              const photoSrc =
                member.photo || "/images/board/placeholder-person.svg";

              return (
                <div key={member.slug} className="flex flex-col items-center">
                  <div
                    className={cn(
                      "group relative flex w-full flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 rounded-2xl border border-border bg-surface p-5 sm:p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg",
                    )}
                  >
                    {/* 1. Member Portrait (small & sharp to prevent pixelation) */}
                    <div className="relative size-28 sm:size-32 md:size-36 shrink-0 overflow-hidden rounded-2xl border border-border bg-surface-alt shadow-xs">
                      <Image
                        src={photoSrc}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 112px, 144px"
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        priority={index < 2}
                      />
                    </div>

                    {/* 2. Member Executive Details */}
                    <div className="flex flex-1 flex-col justify-between w-full text-center sm:text-left">
                      <div>
                        {/* Hierarchy Tag */}
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                          <span className="inline-flex items-center rounded-full bg-primary-subtle px-3 py-1 text-xs font-semibold text-primary border border-primary-200">
                            {index === 0
                              ? "Advisory Board Leadership"
                              : "Advisory Board"}
                          </span>
                        </div>

                        {/* Name */}
                        <h3 className="mt-2.5 font-display text-xl font-bold tracking-tight text-heading sm:text-2xl">
                          {member.name}
                        </h3>

                        {/* Role */}
                        {member.role && (
                          <p className="mt-1 text-xs sm:text-sm font-semibold text-accent">
                            {member.role}
                          </p>
                        )}

                        {/* Headline / Summary Bio */}
                        {member.profile?.headline && (
                          <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-body line-clamp-3">
                            {member.profile.headline}
                          </p>
                        )}
                      </div>

                      {/* CTA: Click here to View Profile */}
                      <div className="mt-5 pt-4 border-t border-border flex items-center justify-center sm:justify-start">
                        <Link
                          href={`/advisory-board/${member.slug}`}
                          className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs sm:text-sm font-semibold text-surface shadow-xs transition-colors duration-200 hover:bg-primary-hover active:bg-primary-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none"
                        >
                          <span>Click here to View Profile</span>
                          <ArrowUpRight
                            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden="true"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Downward Hierarchy Connector between members */}
                  {index < advisoryMembers.length - 1 && (
                    <div
                      className="my-3 flex flex-col items-center justify-center text-muted"
                      aria-hidden="true"
                    >
                      <div className="h-6 w-0.5 bg-gradient-to-b from-border to-primary/40" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
