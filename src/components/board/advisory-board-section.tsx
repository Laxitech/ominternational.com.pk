import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BoardMember } from "@/types/board";
import {
  ADVISORY_BOARD_HEADLINE,
  ADVISORY_BOARD_INTRO,
  PROFILE_CTA_LABEL,
} from "@/data/board";
import Reveal from "@/components/shared/reveal";

interface AdvisoryBoardSectionProps {
  members: BoardMember[];
  className?: string;
}

export default function AdvisoryBoardSection({
  members,
  className,
}: AdvisoryBoardSectionProps) {
  const advisoryMembers = members.filter((m) => m.board === "advisory");

  if (advisoryMembers.length === 0) {
    return null;
  }

  return (
    <section
      id="advisory-board"
      aria-labelledby="advisory-board-heading"
      className={className}
    >
      <div className="border-y border-border bg-secondary/35 py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            {/* Left column: Sticky heading & intro */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                Strategic Guidance
              </span>
              <h2
                id="advisory-board-heading"
                className="mt-1 font-display text-2xl font-bold tracking-tight text-heading sm:text-3xl lg:text-4xl"
              >
                {ADVISORY_BOARD_HEADLINE}
              </h2>
              <p className="mt-4 text-balance text-sm leading-relaxed text-body sm:text-base">
                {ADVISORY_BOARD_INTRO}
              </p>
            </div>

            {/* Right column: Ruled list of advisory board members */}
            <div className="lg:col-span-7">
              <ul className="divide-y divide-border border-y border-border overflow-hidden rounded-2xl bg-surface shadow-xs">
                {advisoryMembers.map((member, index) => {
                  const photoSrc =
                    member.photo || "/images/board/placeholder-person.svg";

                  return (
                    <li key={member.slug}>
                      <Reveal delayMs={index * 80}>
                        <article className="group relative flex flex-col gap-4 p-5 transition-colors duration-200 hover:bg-surface-elevated/70 focus-within:bg-surface-elevated/70 focus-within:ring-2 focus-within:ring-primary focus-within:ring-inset sm:flex-row sm:items-center sm:justify-between sm:p-6">
                          <div className="flex items-center gap-4 sm:gap-5">
                            {/* 96px Portrait (rounded-lg, placeholder photo) */}
                            <div className="relative size-20 sm:size-24 shrink-0 overflow-hidden rounded-xl border border-border bg-secondary/40">
                              <Image
                                src={photoSrc}
                                alt={member.name}
                                fill
                                sizes="96px"
                                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none"
                              />
                            </div>

                            {/* Name & optional role */}
                            <div>
                              {member.role && (
                                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                                  {member.role}
                                </p>
                              )}
                              <h3 className="font-display text-lg font-semibold tracking-tight text-heading transition-colors group-hover:text-primary sm:text-xl">
                                {member.name}
                              </h3>
                            </div>
                          </div>

                          {/* Stretched Link CTA */}
                          <div className="shrink-0 pt-2 sm:pt-0">
                            <Link
                              href={`/governing-board/${member.slug}`}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary focus:outline-none after:absolute after:inset-0 sm:text-sm"
                            >
                              <span>{PROFILE_CTA_LABEL}</span>
                              <span className="sr-only"> of {member.name}</span>
                              <ArrowUpRight
                                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                                aria-hidden="true"
                              />
                            </Link>
                          </div>
                        </article>
                      </Reveal>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
