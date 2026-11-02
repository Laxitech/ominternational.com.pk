import type { BoardMember } from "@/types/board";
import {
  GOVERNING_BOARD_HEADLINE,
  GOVERNING_BOARD_SUBHEADING,
} from "@/data/board";
import Reveal from "@/components/shared/reveal";
import BoardMemberCard from "./board-member-card";

interface GoverningBoardSectionProps {
  members: BoardMember[];
  className?: string;
}

export default function GoverningBoardSection({
  members,
  className,
}: GoverningBoardSectionProps) {
  const governingMembers = members.filter((m) => m.board === "governing");
  const leadMembers = governingMembers.filter((m) => m.tier === "lead");
  const regularMembers = governingMembers.filter((m) => m.tier === "member");

  return (
    <section
      id="governing-board"
      aria-labelledby="governing-board-heading"
      className={className}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Executive Leadership
          </span>
          <h2
            id="governing-board-heading"
            className="mt-1 font-display text-2xl font-bold tracking-tight text-heading sm:text-3xl lg:text-4xl"
          >
            {GOVERNING_BOARD_HEADLINE}
          </h2>
          <p className="mt-3 text-balance text-sm leading-relaxed text-body sm:text-base">
            {GOVERNING_BOARD_SUBHEADING}
          </p>
        </div>

        {/* Lead Tier (2 columns on desktop, stacked on mobile) */}
        {leadMembers.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10">
            {leadMembers.map((member, index) => (
              <Reveal key={member.slug} delayMs={index * 80}>
                <BoardMemberCard member={member} priority={index < 2} />
              </Reveal>
            ))}
          </div>
        )}

        {/* Regular Member Tier (3 columns on desktop, 2 columns on tablet, 1 column on mobile) */}
        {regularMembers.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-8">
            {regularMembers.map((member, index) => (
              <Reveal key={member.slug} delayMs={index * 80}>
                <BoardMemberCard member={member} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
