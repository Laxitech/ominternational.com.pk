import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BoardMember } from "@/types/board";
import { PROFILE_CTA_LABEL } from "@/data/board";
import { cn } from "@/lib/utils";

interface BoardMemberCardProps {
  member: BoardMember;
  priority?: boolean;
  className?: string;
}

export default function BoardMemberCard({
  member,
  priority = false,
  className,
}: BoardMemberCardProps) {
  const isLead = member.tier === "lead";
  const photoSrc = member.photo || "/images/board/placeholder-person.svg";

  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-all duration-300",
        "hover:border-primary/40 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2",
        className,
      )}
    >
      <div>
        {/* Portrait photo wrapper (4:5 ratio) */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-secondary/40">
          <Image
            src={photoSrc}
            alt={member.name}
            fill
            priority={priority}
            sizes={
              isLead
                ? "(min-width: 1280px) 50vw, (min-width: 768px) 50vw, 100vw"
                : "(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            }
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04] group-focus-within:scale-[1.04] motion-reduce:transform-none"
          />
        </div>

        {/* 2px primary line under the photo that grows on hover/focus-within */}
        <div
          aria-hidden="true"
          className="mt-3.5 h-0.5 w-full overflow-hidden bg-border/60"
        >
          <div className="h-full w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full group-focus-within:w-full motion-reduce:transition-none" />
        </div>

        {/* Member details */}
        <div className="mt-4">
          {member.role && (
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              {member.role}
            </p>
          )}

          <h3
            className={cn(
              "font-display font-semibold tracking-tight text-heading transition-colors duration-200 group-hover:text-primary group-focus-within:text-primary",
              member.role ? "mt-1" : "mt-0",
              isLead ? "text-xl sm:text-2xl" : "text-lg sm:text-xl",
            )}
          >
            {member.name}
          </h3>
        </div>
      </div>

      {/* Stretched Link CTA */}
      <div className="mt-6 border-t border-border pt-3.5">
        <Link
          href={`/governing-board/${member.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary focus:outline-none after:absolute after:inset-0 after:rounded-2xl sm:text-sm"
        >
          <span>{PROFILE_CTA_LABEL}</span>
          <span className="sr-only"> of {member.name}</span>
          <ArrowUpRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-within:translate-x-0.5 group-focus-within:-translate-y-0.5 motion-reduce:transform-none"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
