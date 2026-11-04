import Image from "next/image";
import Link from "next/link";
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
import type { BoardMember } from "@/types/board";

interface BoardMemberProfileProps {
  member: BoardMember;
}

export default function BoardMemberProfile({
  member,
}: BoardMemberProfileProps) {
  const profile = member.profile;
  const isGoverningMember = member.board === "governing";
  const boardLabel = isGoverningMember
    ? "Governing Board"
    : "Advisory Board";
  const boardHref = isGoverningMember
    ? "/governing-board"
    : "/advisory-board";
  const otherBoardLabel = isGoverningMember
    ? "Advisory Board"
    : "Governing Board";
  const otherBoardHref = isGoverningMember
    ? "/advisory-board"
    : "/governing-board";
  const photoSrc = member.photo || "/images/board/placeholder-person.svg";
  const hasProfileSections = Boolean(
    profile?.bio?.length ||
    profile?.specializations?.length ||
    profile?.governmentsAdvised?.length ||
    profile?.books?.length ||
    profile?.portfolio?.length,
  );

  return (
    <main className="min-h-full bg-surface">
      <section
        aria-labelledby="member-profile-title"
        className="relative isolate overflow-hidden border-b border-surface/10 bg-surface-dark text-on-dark"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-40 size-[34rem] rounded-full bg-primary-500/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-48 left-1/4 size-[30rem] rounded-full bg-accent/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-[16%] hidden w-px bg-surface/10 lg:block"
        />

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-7 sm:px-6 sm:pb-18 sm:pt-9 lg:px-8 lg:pb-20">
          <nav aria-label="Breadcrumbs">
            <ol className="flex min-w-0 items-center gap-2 text-xs font-medium text-on-dark/65 sm:text-sm">
              <li className="shrink-0">
                <Link
                  href="/"
                  className="transition-colors hover:text-on-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="size-3.5" />
              </li>
              <li className="shrink-0">
                <Link
                  href={boardHref}
                  className="transition-colors hover:text-on-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
                >
                  {boardLabel}
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="size-3.5" />
              </li>
              <li className="min-w-0">
                <span
                  aria-current="page"
                  className="block truncate font-semibold text-on-dark"
                >
                  {member.name}
                </span>
              </li>
            </ol>
          </nav>

          <div className="mt-10 grid items-center gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-14">
            <div className="hero-reveal lg:col-span-7 xl:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-surface/15 bg-surface/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-200 backdrop-blur-sm">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-primary-300"
                />
                {boardLabel} Profile
              </div>

              <h1
                id="member-profile-title"
                className="mt-5 max-w-4xl text-balance font-display text-4xl font-semibold tracking-tight text-on-dark sm:text-5xl lg:text-6xl lg:leading-[1.08]"
              >
                {member.name}
              </h1>

              {member.role && (
                <p className="mt-4 text-lg font-medium text-primary-200 sm:text-xl">
                  {member.role}
                </p>
              )}

              {profile?.headline && (
                <p className="mt-5 max-w-3xl text-balance text-sm leading-7 text-on-dark/75 sm:text-base sm:leading-8">
                  {profile.headline}
                </p>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={boardHref}
                  className="inline-flex items-center gap-2 rounded-xl bg-surface px-4 py-2.5 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-primary-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
                >
                  <ArrowLeft className="size-4" aria-hidden="true" />
                  Back to {boardLabel}
                </Link>

                {profile?.email && (
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-surface/20 bg-surface/5 px-4 py-2.5 text-sm font-semibold text-on-dark transition-colors hover:border-surface/40 hover:bg-surface/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
                  >
                    <Mail className="size-4" aria-hidden="true" />
                    Send an email
                  </a>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 xl:col-span-4">
              <div className="relative mx-auto max-w-sm lg:ml-auto lg:mr-0">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-[2rem] border border-surface/10"
                />
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-surface/20 bg-secondary shadow-2xl shadow-surface-dark/40">
                  <Image
                    src={photoSrc}
                    alt={`${member.name}, ${member.role || boardLabel}`}
                    fill
                    priority
                    sizes="(min-width: 1280px) 360px, (min-width: 1024px) 30vw, (min-width: 640px) 384px, 100vw"
                    className="object-cover object-center"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-transparent to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-200">
                      OM International
                    </p>
                    <p className="mt-1 text-sm font-medium text-on-dark/85">
                      Leadership &amp; Governance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {profile ? (
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <article className="overflow-hidden rounded-3xl border border-border bg-surface shadow-xs lg:col-span-8">
              {profile.bio && profile.bio.length > 0 && (
                <section
                  id="biography"
                  aria-labelledby="biography-heading"
                  className="scroll-mt-28 p-6 sm:p-8 lg:p-10"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Executive Profile
                  </p>
                  <h2
                    id="biography-heading"
                    className="mt-3 font-display text-2xl font-bold tracking-tight text-heading sm:text-3xl"
                  >
                    Professional Biography
                  </h2>

                  <div className="mt-6 space-y-5">
                    {profile.bio.map((paragraph, index) => (
                      <p
                        key={paragraph}
                        className={
                          index === 0
                            ? "text-base font-medium leading-8 text-heading sm:text-lg"
                            : "text-sm leading-7 text-body sm:text-base sm:leading-8"
                        }
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              )}

              {profile.specializations &&
                profile.specializations.length > 0 && (
                  <section
                    id="expertise"
                    aria-labelledby="expertise-heading"
                    className="scroll-mt-28 border-t border-border bg-secondary/25 p-6 sm:p-8 lg:p-10"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary-200 bg-primary-subtle text-primary">
                        <CheckCircle2 className="size-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                          Core Expertise
                        </p>
                        <h2
                          id="expertise-heading"
                          className="mt-1 font-display text-xl font-bold tracking-tight text-heading sm:text-2xl"
                        >
                          Areas of Specialization &amp; Practice
                        </h2>
                      </div>
                    </div>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-body sm:text-base">
                      Specialist training, technical advisory, and governance
                      practice across key financial, regulatory, and reporting
                      disciplines.
                    </p>

                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {profile.specializations.map((specialization) => (
                        <li
                          key={specialization}
                          className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-4 text-sm font-medium leading-6 text-heading"
                        >
                          <CheckCircle2
                            className="mt-0.5 size-4 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          <span>{specialization}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

              {profile.governmentsAdvised &&
                profile.governmentsAdvised.length > 0 && (
                  <section
                    id="global-advisory"
                    aria-labelledby="global-advisory-heading"
                    className="scroll-mt-28 border-t border-border p-6 sm:p-8 lg:p-10"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary-200 bg-primary-subtle text-primary">
                        <Globe2 className="size-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                          Sovereign Policy &amp; Global Modernization
                        </p>
                        <h2
                          id="global-advisory-heading"
                          className="mt-1 font-display text-xl font-bold tracking-tight text-heading sm:text-2xl"
                        >
                          Governmental &amp; Institutional Advisory
                        </h2>
                      </div>
                    </div>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-body sm:text-base">
                      Lead advisor on national curriculum reforms, skills
                      development frameworks, financial risk, and Islamic
                      banking for sovereign governments.
                    </p>

                    <ul className="mt-6 divide-y divide-border border-y border-border">
                      {profile.governmentsAdvised.map((government) => (
                        <li
                          key={government}
                          className="flex items-start gap-3 py-4 text-sm font-medium leading-6 text-heading sm:text-base"
                        >
                          <Globe2
                            className="mt-0.5 size-4 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          <span>{government}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

              {profile.books && profile.books.length > 0 && (
                <section
                  id="publications"
                  aria-labelledby="publications-heading"
                  className="scroll-mt-28 border-t border-border bg-secondary/25 p-6 sm:p-8 lg:p-10"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary-200 bg-primary-subtle text-primary">
                      <BookOpen className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                        Publications &amp; Best Sellers
                      </p>
                      <h2
                        id="publications-heading"
                        className="mt-1 font-display text-xl font-bold tracking-tight text-heading sm:text-2xl"
                      >
                        Authored Works &amp; Research Books
                      </h2>
                    </div>
                  </div>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-body sm:text-base">
                    Author of ten published books with leading international
                    publishers, including three International Best Sellers in
                    financial economics and corporate risk.
                  </p>

                  <ul className="mt-6 space-y-3">
                    {profile.books.map((book) => (
                      <li
                        key={book.title}
                        className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-4 sm:p-5"
                      >
                        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-subtle text-primary">
                          <BookOpen className="size-5" aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          {book.bestSeller && (
                            <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-warning-50 px-2.5 py-1 text-xs font-semibold text-warning">
                              <Award className="size-3.5" aria-hidden="true" />
                              International Best Seller
                            </span>
                          )}
                          <h3 className="font-display text-sm font-semibold leading-6 text-heading sm:text-base">
                            {book.title}
                          </h3>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {profile.portfolio && profile.portfolio.length > 0 && (
                <section
                  id="portfolio"
                  aria-labelledby="portfolio-heading"
                  className="scroll-mt-28 border-t border-border p-6 sm:p-8 lg:p-10"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary-200 bg-primary-subtle text-primary">
                      <Briefcase className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                        Executive Engagements
                      </p>
                      <h2
                        id="portfolio-heading"
                        className="mt-1 font-display text-xl font-bold tracking-tight text-heading sm:text-2xl"
                      >
                        Leadership &amp; Corporate Portfolio
                      </h2>
                    </div>
                  </div>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-body sm:text-base">
                    A governance track record across business enterprises,
                    public institutions, industrial organizations, and
                    international financial bodies.
                  </p>

                  <ol className="mt-8 divide-y divide-border border-y border-border">
                    {profile.portfolio.map((item, index) => (
                      <li
                        key={`${item.organization}-${item.role}-${index}`}
                        className="grid gap-4 py-6 sm:grid-cols-[3rem_1fr] sm:gap-5"
                      >
                        <span className="inline-flex size-10 items-center justify-center rounded-full border border-primary-200 bg-primary-subtle font-mono text-xs font-bold text-primary">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
                            <h3 className="font-display text-base font-semibold leading-6 text-heading sm:text-lg">
                              {item.organization}
                            </h3>
                            <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border border-primary-200 bg-primary-subtle px-3 py-1 text-xs font-semibold text-primary">
                              <Briefcase className="size-3.5" aria-hidden="true" />
                              {item.role}
                            </span>
                          </div>
                          {item.description && (
                            <p className="mt-2 text-sm leading-6 text-body">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>
              )}
            </article>

            <aside
              aria-label="Profile details"
              className="order-first space-y-5 lg:order-last lg:col-span-4 lg:sticky lg:top-28"
            >
              <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-xs">
                <div className="border-b border-primary-200 bg-primary-subtle p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary text-on-dark">
                      <Building2 className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                        Profile Details
                      </p>
                      <h2 className="font-display text-lg font-bold text-heading">
                        At a glance
                      </h2>
                    </div>
                  </div>
                </div>

                <dl className="divide-y divide-border px-5 sm:px-6">
                  <div className="py-4">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Board
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-heading">
                      {boardLabel}
                    </dd>
                  </div>
                  {member.role && (
                    <div className="py-4">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                        Current Role
                      </dt>
                      <dd className="mt-1 text-sm font-semibold text-heading">
                        {member.role}
                      </dd>
                    </div>
                  )}
                  <div className="py-4">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Organization
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-heading">
                      OM International (Pvt) Ltd, Islamabad
                    </dd>
                  </div>
                </dl>

                {profile.qualification && (
                  <div className="border-t border-border p-5 sm:p-6">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
                      <GraduationCap
                        className="size-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      Qualifications &amp; Credentials
                    </div>
                    <p className="mt-3 text-sm font-medium leading-7 text-heading">
                      {profile.qualification}
                    </p>
                  </div>
                )}

                {profile.email && (
                  <div className="border-t border-border p-5 sm:p-6">
                    <a
                      href={`mailto:${profile.email}`}
                      className="flex items-center justify-between gap-3 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-on-dark transition-colors hover:bg-primary-hover active:bg-primary-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
                    >
                      <span className="flex min-w-0 items-center gap-2">
                        <Mail className="size-4 shrink-0" aria-hidden="true" />
                        <span className="truncate">{profile.email}</span>
                      </span>
                      <ChevronRight className="size-4 shrink-0" aria-hidden="true" />
                    </a>
                  </div>
                )}
              </div>

              {hasProfileSections && (
                <nav
                  aria-label="Profile sections"
                  className="rounded-3xl border border-border bg-surface p-5 shadow-xs sm:p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    On this page
                  </p>
                  <ul className="mt-4 space-y-1">
                    {profile.bio && profile.bio.length > 0 && (
                      <li>
                        <a
                          href="#biography"
                          className="flex items-center justify-between rounded-lg px-2 py-2 text-sm font-medium text-body transition-colors hover:bg-primary-subtle hover:text-primary"
                        >
                          Biography
                          <ChevronRight className="size-4" aria-hidden="true" />
                        </a>
                      </li>
                    )}
                    {profile.specializations &&
                      profile.specializations.length > 0 && (
                        <li>
                          <a
                            href="#expertise"
                            className="flex items-center justify-between rounded-lg px-2 py-2 text-sm font-medium text-body transition-colors hover:bg-primary-subtle hover:text-primary"
                          >
                            Areas of expertise
                            <ChevronRight className="size-4" aria-hidden="true" />
                          </a>
                        </li>
                      )}
                    {profile.governmentsAdvised &&
                      profile.governmentsAdvised.length > 0 && (
                        <li>
                          <a
                            href="#global-advisory"
                            className="flex items-center justify-between rounded-lg px-2 py-2 text-sm font-medium text-body transition-colors hover:bg-primary-subtle hover:text-primary"
                          >
                            Global advisory
                            <ChevronRight className="size-4" aria-hidden="true" />
                          </a>
                        </li>
                      )}
                    {profile.books && profile.books.length > 0 && (
                      <li>
                        <a
                          href="#publications"
                          className="flex items-center justify-between rounded-lg px-2 py-2 text-sm font-medium text-body transition-colors hover:bg-primary-subtle hover:text-primary"
                        >
                          Publications
                          <ChevronRight className="size-4" aria-hidden="true" />
                        </a>
                      </li>
                    )}
                    {profile.portfolio && profile.portfolio.length > 0 && (
                      <li>
                        <a
                          href="#portfolio"
                          className="flex items-center justify-between rounded-lg px-2 py-2 text-sm font-medium text-body transition-colors hover:bg-primary-subtle hover:text-primary"
                        >
                          Leadership portfolio
                          <ChevronRight className="size-4" aria-hidden="true" />
                        </a>
                      </li>
                    )}
                  </ul>

                  <div className="mt-5 border-t border-border pt-4">
                    <Link
                      href={boardHref}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
                    >
                      <ArrowLeft className="size-4" aria-hidden="true" />
                      Back to {boardLabel}
                    </Link>
                  </div>
                </nav>
              )}
            </aside>
          </div>

          <section
            aria-labelledby="explore-leadership-heading"
            className="relative mt-12 isolate overflow-hidden rounded-3xl bg-surface-dark px-6 py-10 text-on-dark sm:px-10 sm:py-12 lg:mt-16 lg:px-12"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-primary-500/20 blur-3xl"
            />
            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-200">
                  Leadership &amp; Governance
                </p>
                <h2
                  id="explore-leadership-heading"
                  className="mt-3 font-display text-2xl font-bold tracking-tight text-on-dark sm:text-3xl"
                >
                  Meet the people guiding OM International
                </h2>
                <p className="mt-3 text-sm leading-7 text-on-dark/70 sm:text-base">
                  Explore the distinguished academics, professionals, and
                  business leaders shaping our strategic direction.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={boardHref}
                  className="inline-flex items-center gap-2 rounded-xl bg-surface px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary-50"
                >
                  View {boardLabel}
                  <ChevronRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  href={otherBoardHref}
                  className="inline-flex items-center gap-2 rounded-xl border border-surface/20 px-4 py-2.5 text-sm font-semibold text-on-dark transition-colors hover:border-surface/40 hover:bg-surface/10"
                >
                  {otherBoardLabel}
                  <ChevronRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <section
          aria-labelledby="profile-coming-soon-heading"
          className="border-b border-border bg-secondary/35"
        >
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="relative isolate overflow-hidden rounded-3xl border border-border bg-surface px-6 py-12 text-center shadow-xs sm:px-12 sm:py-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-primary-subtle blur-3xl"
              />
              <div className="relative mx-auto inline-flex size-14 items-center justify-center rounded-2xl border border-primary-200 bg-primary-subtle text-primary">
                <GraduationCap className="size-7" aria-hidden="true" />
              </div>
              <p className="relative mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Profile Update
              </p>
              <h2
                id="profile-coming-soon-heading"
                className="relative mt-3 font-display text-2xl font-bold tracking-tight text-heading sm:text-3xl"
              >
                This profile is coming soon
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-sm leading-7 text-body sm:text-base">
                Detailed background information and publications for {member.name}
                {" "}will be published shortly.
              </p>
              <Link
                href={boardHref}
                className="relative mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-on-dark transition-colors hover:bg-primary-hover active:bg-primary-pressed"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                Back to {boardLabel}
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
