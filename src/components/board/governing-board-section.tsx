import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BoardMember } from "@/types/board";

interface GoverningBoardSectionProps {
  members: BoardMember[];
  className?: string;
}

export default function GoverningBoardSection({
  members,
  className,
}: GoverningBoardSectionProps) {
  const governingMembers = members.filter((m) => m.board === "governing");

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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
            {governingMembers.map((member) => {
              const photoSrc =
                member.photo || "/images/board/placeholder-person.svg";

              return (
                <div
                  key={member.slug}
                  className="group flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  {/* 1. Member Profile Picture */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-alt">
                    <Image
                      src={photoSrc}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                      priority
                    />
                  </div>

                  {/* 2. Under Picture: Name & CTA */}
                  <div className="flex flex-1 flex-col items-center p-6 text-center">
                    <h3 className="font-display text-lg font-bold tracking-tight text-heading sm:text-xl">
                      {member.name}
                    </h3>
                    {member.role && (
                      <p className="mt-1 text-xs font-semibold text-muted">
                        {member.role}
                      </p>
                    )}

                    {/* 3. CTA: Click here to View Profile */}
                    <div className="mt-5 w-full">
                      <Link
                        href={`/governing-board/${member.slug}`}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-surface shadow-xs transition-colors duration-200 hover:bg-primary-hover active:bg-primary-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none"
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
