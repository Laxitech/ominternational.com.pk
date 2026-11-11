import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { BoardMember } from "@/types/board";

interface GoverningBoardSectionProps {
  members: BoardMember[];
  className?: string;
}

// Explicit hierarchical priority order: Chairman -> CEO -> Board Members
const HIERARCHICAL_ORDER = [
  "mian-masood-ahmed",
  "prof-dr-omar-masood",
  "brigadier-tahir-malik",
  "dr-kiran-javaria",
];

export default function GoverningBoardSection({
  members,
  className,
}: GoverningBoardSectionProps) {
  const governingMembers = members
    .filter((m) => m.board === "governing")
    .sort((a, b) => {
      const idxA = HIERARCHICAL_ORDER.indexOf(a.slug);
      const idxB = HIERARCHICAL_ORDER.indexOf(b.slug);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return 0;
    });

  if (governingMembers.length === 0) {
    return null;
  }

  return (
    <section
      id="governing-board"
      aria-label="Governing Board Members"
      className={className}
    >
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Vertical Hierarchical Stack (Top to Bottom) */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {governingMembers.map((member, index) => {
              const photoSrc =
                member.photo || "/images/board/placeholder-person.svg";

              return (
                <div key={member.slug} className="flex flex-col items-center">
                  <div
                    className={cn(
                      "group relative flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg sm:flex-row",
                    )}
                  >
                    {/* 1. Member Portrait */}
                    <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden bg-surface-alt sm:w-64 md:w-72 sm:aspect-auto sm:min-h-[280px]">
                      <Image
                        src={photoSrc}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 288px"
                        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                        priority={index < 2}
                      />
                    </div>

                    {/* 2. Member Executive Details */}
                    <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                      <div>
                        {/* Hierarchy Tag */}
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center rounded-full bg-primary-subtle px-3 py-1 text-xs font-semibold text-primary border border-primary-200">
                            {index === 0
                              ? "Board Leadership"
                              : index === 1
                                ? "Executive Leadership"
                                : "Governing Board"}
                          </span>
                        </div>

                        {/* Name */}
                        <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-heading sm:text-2xl">
                          {member.name}
                        </h3>

                        {/* Role */}
                        {member.role && (
                          <p className="mt-1 text-sm font-semibold text-accent">
                            {member.role}
                          </p>
                        )}

                        {/* Headline / Summary Bio */}
                        {member.profile?.headline && (
                          <p className="mt-3 text-sm leading-relaxed text-body line-clamp-3">
                            {member.profile.headline}
                          </p>
                        )}
                      </div>

                      {/* CTA: Click here to View Profile */}
                      <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                        <Link
                          href={`/governing-board/${member.slug}`}
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
                  {index < governingMembers.length - 1 && (
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
