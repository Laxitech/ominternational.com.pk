import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Award,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  Globe2,
  GraduationCap,
  Mail,
} from "lucide-react";
import PageHeader from "@/components/shared/page-header";
import { boardMembers } from "@/data/board";
import type { BoardMember } from "@/types/board";

interface ProfilePageProps {
  params: Promise<{ slug: string }>;
}

function getMemberBySlug(slug: string): BoardMember | undefined {
  if (slug === "mian-masood-ahmed" || slug === "mian-masood") {
    return boardMembers.find((m) => m.slug === "mian-masood-ahmad");
  }
  if (slug === "prof-dr-omar-masood" || slug === "omar-masood") {
    return boardMembers.find((m) => m.slug === "dr-omar-masood");
  }
  if (slug === "muhammad-maqbool") {
    return boardMembers.find((m) => m.slug === "mohammad-maqbool");
  }
  if (slug === "malik-mumtaz") {
    return boardMembers.find((m) => m.slug === "prof-malik-mumtaz");
  }
  return boardMembers.find((m) => m.slug === slug);
}

export function generateStaticParams() {
  const params = boardMembers.map((member) => ({
    slug: member.slug,
  }));
  // Add aliases for Mian Masood, Dr. Omar Masood, Mohammad Maqbool & Prof. Malik Mumtaz variations
  params.push({ slug: "mian-masood-ahmed" });
  params.push({ slug: "mian-masood" });
  params.push({ slug: "prof-dr-omar-masood" });
  params.push({ slug: "omar-masood" });
  params.push({ slug: "muhammad-maqbool" });
  params.push({ slug: "malik-mumtaz" });
  return params;
}

export async function generateMetadata({
  params,
}: ProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getMemberBySlug(slug);

  if (!member) {
    return {
      title: "Board Member Not Found | OM International",
    };
  }

  const title = `${member.name} – ${member.role || "Board Member"} | OM International`;
  const description = member.profile?.bio?.[0]
    ? `${member.name} – ${member.role}. ${member.profile.bio[0]}`.slice(0, 155)
    : `Profile of ${member.name}, ${member.role || "member"} of the OM International Board.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "profile",
    },
  };
}

export default async function BoardMemberProfilePage({
  params,
}: ProfilePageProps) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  const boardLabel =
    member.board === "governing" ? "Governing Board" : "Advisory Board";
  const photoSrc = member.photo || "/images/board/placeholder-person.svg";

  return (
    <main className="min-h-full bg-surface">
      {/* 1. Shared Page Header */}
      <PageHeader
        title={member.name}
        subtitle={member.role ? `${member.role} — OM International` : undefined}
        eyebrow={`${boardLabel} Profile`}
        imageSrc="/images/page header/unirazak.jpg"
        imageAlt={`${member.name} - ${boardLabel}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Governing Board", href: "/governing-board" },
          { label: member.name },
        ]}
      />

      {/* 2. Detailed Profile Layout (when profile data is present) */}
      {member.profile ? (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 items-start">
            {/* Left Column: Sticky Profile Card & Academic Qualifications */}
            <aside
              aria-label="Member Profile Information"
              className="lg:col-span-4 lg:sticky lg:top-28 space-y-6"
            >
              <div className="overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-xs">
                {/* 4:5 Portrait Photo */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-secondary/40">
                  <Image
                    src={photoSrc}
                    alt={member.name}
                    fill
                    priority
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Accent Line */}
                <div
                  aria-hidden="true"
                  className="mt-4 h-0.5 w-full bg-primary"
                />

                {/* Identity & Role */}
                <div className="mt-4">
                  {member.role && (
                    <span className="inline-flex items-center rounded-md bg-primary-subtle px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      {member.role}
                    </span>
                  )}
                  <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-heading">
                    {member.name}
                  </h2>
                  <p className="mt-1 text-xs text-muted">
                    OM International (Pvt) Ltd, Islamabad
                  </p>
                </div>

                {/* Email Address */}
                {member.profile.email && (
                  <div className="mt-4">
                    <a
                      href={`mailto:${member.profile.email}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-secondary/40 px-3.5 py-2.5 text-xs font-semibold text-heading transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                    >
                      <Mail className="size-4 text-primary shrink-0" aria-hidden="true" />
                      <span className="truncate">{member.profile.email}</span>
                    </a>
                  </div>
                )}

                {/* Qualification Card */}
                {member.profile.qualification && (
                  <div className="mt-5 rounded-2xl border border-border bg-secondary/40 p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
                      <GraduationCap
                        className="size-4 text-primary shrink-0"
                        aria-hidden="true"
                      />
                      <span>Qualifications & Credentials</span>
                    </div>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-heading">
                      {member.profile.qualification}
                    </p>
                  </div>
                )}

                {/* Return link */}
                <div className="mt-6 border-t border-border pt-4">
                  <Link
                    href="/governing-board"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-primary transition-colors hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                  >
                    <ArrowLeft className="size-4" aria-hidden="true" />
                    <span>Back to Governing Board</span>
                  </Link>
                </div>
              </div>
            </aside>

            {/* Right Column: Narrative Biography & Portfolio */}
            <div className="space-y-10 sm:space-y-12 lg:col-span-8">
              {/* Executive Overview Section */}
              <section
                aria-labelledby="overview-heading"
                className="rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:p-10 shadow-xs"
              >
                <div className="max-w-3xl">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Executive Biography
                  </span>
                  <h2
                    id="overview-heading"
                    className="mt-1 font-display text-2xl font-bold tracking-tight text-heading sm:text-3xl"
                  >
                    {member.profile.headline ||
                      `${member.name} — ${member.role || "Leadership"}`}
                  </h2>

                  {/* Bio Paragraphs */}
                  <div className="mt-4 space-y-3.5 text-sm leading-relaxed text-body sm:text-base sm:leading-8">
                    {member.profile.bio?.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Highlights Strip */}
                  {member.profile.highlights && (
                    <div className="mt-8 grid grid-cols-1 divide-y divide-border rounded-2xl border border-border bg-surface-elevated/40 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
                      {member.profile.highlights.map((item) => (
                        <div key={item.label} className="p-4 sm:p-5 text-center">
                          <span className="font-display text-xl font-bold tracking-tight text-primary sm:text-2xl">
                            {item.value}
                          </span>
                          <p className="mt-1 text-xs font-medium text-muted uppercase tracking-wider">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </section>

              {/* Books & Publications Section (if present) */}
              {member.profile.books && member.profile.books.length > 0 && (
                <section
                  aria-labelledby="books-heading"
                  className="rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:p-10 shadow-xs"
                >
                  <div className="max-w-2xl">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Publications & Best Sellers
                    </span>
                    <h2
                      id="books-heading"
                      className="mt-1 font-display text-xl font-bold tracking-tight text-heading sm:text-2xl"
                    >
                      Authored Works & Research Books
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
                      Author of ten published books with leading international publishers, including three International Best Sellers in financial economics and corporate risk:
                    </p>
                  </div>

                  <div className="mt-6 space-y-3">
                    {member.profile.books.map((book) => (
                      <div
                        key={book.title}
                        className="flex items-start gap-4 rounded-2xl border border-border bg-surface-elevated/40 p-4 sm:p-5 transition-all hover:border-primary/40 hover:bg-surface"
                      >
                        <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-subtle text-primary">
                          <BookOpen className="size-5" aria-hidden="true" />
                        </div>
                        <div className="min-w-0 flex-1">
                          {book.bestSeller && (
                            <span className="inline-flex items-center gap-1 rounded-md bg-accent/15 px-2.5 py-0.5 text-xs font-semibold text-accent mb-1.5">
                              <Award className="size-3.5" aria-hidden="true" />
                              <span>International Best Seller</span>
                            </span>
                          )}
                          <h3 className="font-display text-sm sm:text-base font-semibold text-heading leading-snug">
                            {book.title}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Sovereign & Ministerial Advisory Section (if present) */}
              {member.profile.governmentsAdvised &&
                member.profile.governmentsAdvised.length > 0 && (
                  <section
                    aria-labelledby="governments-heading"
                    className="rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:p-10 shadow-xs"
                  >
                    <div className="max-w-2xl">
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                        Sovereign Policy & Global Modernization
                      </span>
                      <h2
                        id="governments-heading"
                        className="mt-1 font-display text-xl font-bold tracking-tight text-heading sm:text-2xl"
                      >
                        Governmental & Institutional Advisory
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
                        Lead advisor on national curriculum reforms, skills development frameworks, financial risk, and Islamic banking for sovereign governments:
                      </p>
                    </div>

                    <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {member.profile.governmentsAdvised.map((gov) => (
                        <li
                          key={gov}
                          className="flex items-start gap-3 rounded-2xl border border-border bg-secondary/40 p-4 text-xs sm:text-sm font-medium text-heading"
                        >
                          <Globe2
                            className="size-4 text-primary shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{gov}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

              {/* Areas of Specialization & Practice (if present) */}
              {member.profile.specializations &&
                member.profile.specializations.length > 0 && (
                  <section
                    aria-labelledby="specializations-heading"
                    className="rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:p-10 shadow-xs"
                  >
                    <div className="max-w-2xl">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        Core Expertise
                      </span>
                      <h2
                        id="specializations-heading"
                        className="mt-1 font-display text-xl font-bold tracking-tight text-heading sm:text-2xl"
                      >
                        Areas of Specialization & Practice
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
                        Specialist training, technical advisory, and governance practice across key financial, regulatory, and reporting disciplines:
                      </p>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {member.profile.specializations.map((spec) => (
                        <div
                          key={spec}
                          className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/40 p-4 text-xs sm:text-sm font-medium text-heading"
                        >
                          <CheckCircle2
                            className="size-4 text-primary shrink-0"
                            aria-hidden="true"
                          />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

              {/* Corporate & Institutional Portfolio Section */}
              {member.profile.portfolio && member.profile.portfolio.length > 0 && (
                <section
                  aria-labelledby="portfolio-heading"
                  className="rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:p-10 shadow-xs"
                >
                  <div className="max-w-2xl">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      Executive Engagements
                    </span>
                    <h2
                      id="portfolio-heading"
                      className="mt-1 font-display text-xl font-bold tracking-tight text-heading sm:text-2xl"
                    >
                      Leadership & Corporate Portfolio
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
                      Demonstrated governance track record across leading business enterprises, industrial manufacturing concerns, and international financial institutions:
                    </p>
                  </div>

                  {/* Ruled Portfolio Items */}
                  <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
                    <ul className="divide-y divide-border">
                      {member.profile.portfolio.map((item, index) => (
                        <li
                          key={item.organization}
                          className="flex flex-col gap-3 p-5 transition-colors hover:bg-surface-elevated/60 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6"
                        >
                          <div className="flex items-start gap-4">
                            <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-subtle text-primary">
                              <Building2 className="size-5" aria-hidden="true" />
                            </div>

                            <div>
                              <span className="text-[11px] font-semibold tracking-wider text-muted font-mono">
                                Role #{String(index + 1).padStart(2, "0")}
                              </span>
                              <h3 className="font-display text-base font-semibold text-heading sm:text-lg">
                                {item.organization}
                              </h3>
                              {item.description && (
                                <p className="mt-1 text-xs text-muted leading-relaxed">
                                  {item.description}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="shrink-0 self-start sm:self-center">
                            <span className="inline-flex items-center gap-1.5 rounded-lg border border-primary/20 bg-primary-subtle px-3 py-1.5 text-xs font-semibold text-primary">
                              <Briefcase className="size-3.5" aria-hidden="true" />
                              <span>{item.role}</span>
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              )}

              {/* Bottom Quick Navigation Strip */}
              <div className="flex flex-col gap-4 rounded-2xl border border-border bg-secondary/30 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-heading">
                    Explore Governing & Advisory Boards
                  </h4>
                  <p className="text-xs text-muted">
                    Learn more about the distinguished academics and business leaders guiding OM International.
                  </p>
                </div>

                <Link
                  href="/governing-board"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-on-primary transition-colors hover:bg-primary-hover active:bg-primary-dark"
                >
                  <span>View Full Board</span>
                  <ChevronRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* 3. Placeholder for members whose profiles are not yet provided */
        <section
          aria-label="Profile Coming Soon"
          className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8"
        >
          <div className="rounded-3xl border border-border bg-surface-elevated/40 p-8 sm:p-12 shadow-xs">
            <p className="font-display text-xl font-semibold text-heading sm:text-2xl">
              This profile is coming soon.
            </p>
            <p className="mt-2 text-sm text-muted sm:text-base">
              Detailed background information and publications for {member.name} will be published shortly.
            </p>

            <div className="mt-8">
              <Link
                href="/governing-board"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-heading shadow-xs transition-colors hover:border-primary hover:text-primary active:bg-primary-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                <span>Back to Governing Board</span>
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
