"use client";

import {
  useDeferredValue,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import {
  ChevronDown,
  Filter,
  Search,
  SearchX,
  X,
} from "lucide-react";
import ProgrammeCard from "@/components/programmes/programme-card";
import type { Programme, ProgrammeLevel } from "@/types/programme";
import type { University } from "@/types/university";

type UniversityOption = Pick<University, "slug" | "name" | "shortName">;

type ProgrammeFiltersProps = {
  programmes: Programme[];
  universities: UniversityOption[];
};

type ActiveLevel = ProgrammeLevel | "all";
type StudyMode = "all" | "online" | "odl" | "conventional";

const levelOptions: Array<{ value: ActiveLevel; label: string }> = [
  { value: "all", label: "All programmes" },
  { value: "bachelors", label: "Bachelor's" },
  { value: "masters", label: "Master's" },
  { value: "doctoral", label: "Doctoral" },
  { value: "graduate-diplomas", label: "Graduate diplomas" },
];

const levelValues = new Set<ProgrammeLevel>([
  "bachelors",
  "masters",
  "doctoral",
  "graduate-diplomas",
]);

const FILTER_CHANGE_EVENT = "programme-filter-change";

function isProgrammeLevel(value: string | null): value is ProgrammeLevel {
  return value !== null && levelValues.has(value as ProgrammeLevel);
}

function getLevelSnapshot(): ActiveLevel {
  const level = new URLSearchParams(window.location.search).get("level");
  return isProgrammeLevel(level) ? level : "all";
}

function getServerLevelSnapshot(): ActiveLevel {
  return "all";
}

function subscribeToLevelChange(onStoreChange: () => void) {
  const notify = () => onStoreChange();

  window.addEventListener("popstate", notify);
  window.addEventListener(FILTER_CHANGE_EVENT, notify);

  return () => {
    window.removeEventListener("popstate", notify);
    window.removeEventListener(FILTER_CHANGE_EVENT, notify);
  };
}

export default function ProgrammeFilters({
  programmes,
  universities,
}: ProgrammeFiltersProps) {
  const activeLevel = useSyncExternalStore(
    subscribeToLevelChange,
    getLevelSnapshot,
    getServerLevelSnapshot,
  );
  const [query, setQuery] = useState("");
  const [universitySlug, setUniversitySlug] = useState("all");
  const [studyMode, setStudyMode] = useState<StudyMode>("all");
  const deferredQuery = useDeferredValue(query);

  const universityBySlug = useMemo(
    () => new Map(universities.map((university) => [university.slug, university])),
    [universities],
  );

  const levelCounts = useMemo(() => {
    const counts = new Map<ActiveLevel, number>([["all", programmes.length]]);

    for (const programme of programmes) {
      counts.set(programme.level, (counts.get(programme.level) || 0) + 1);
    }

    return counts;
  }, [programmes]);

  const filteredProgrammes = useMemo(() => {
    const normalizedQuery = deferredQuery.trim().toLowerCase();

    return programmes.filter((programme) => {
      const university = universityBySlug.get(programme.universitySlug);
      const matchesLevel =
        activeLevel === "all" || programme.level === activeLevel;
      const matchesUniversity =
        universitySlug === "all" ||
        programme.universitySlug === universitySlug;
      const matchesMode =
        studyMode === "all" ||
        (studyMode === "online" && programme.fullyOnline) ||
        (studyMode === "odl" && programme.modes.includes("odl")) ||
        (studyMode === "conventional" &&
          programme.modes.includes("conventional"));
      const searchText = [
        programme.title,
        programme.summary,
        programme.schoolName,
        programme.majors?.join(" "),
        university?.name,
        university?.shortName,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      const matchesQuery =
        normalizedQuery.length === 0 || searchText.includes(normalizedQuery);

      return matchesLevel && matchesUniversity && matchesMode && matchesQuery;
    });
  }, [
    activeLevel,
    deferredQuery,
    programmes,
    studyMode,
    universityBySlug,
    universitySlug,
  ]);

  const activeFilterCount =
    Number(activeLevel !== "all") +
    Number(query.trim().length > 0) +
    Number(universitySlug !== "all") +
    Number(studyMode !== "all");

  function updateLevel(level: ActiveLevel) {
    const params = new URLSearchParams(window.location.search);

    if (level === "all") {
      params.delete("level");
    } else {
      params.set("level", level);
    }

    const queryString = params.toString();
    const nextUrl = `${window.location.pathname}${queryString ? `?${queryString}` : ""}${window.location.hash}`;

    window.history.replaceState(window.history.state, "", nextUrl);
    window.dispatchEvent(new Event(FILTER_CHANGE_EVENT));
  }

  function clearFilters() {
    setQuery("");
    setUniversitySlug("all");
    setStudyMode("all");
    updateLevel("all");
  }

  return (
    <div>
      <div className="rounded-3xl border border-border bg-surface p-4 shadow-sm sm:p-6 lg:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary-subtle text-primary">
              <Filter className="size-4" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-sm font-semibold text-heading">
                Refine your search
              </h3>
              <p className="text-xs text-muted">
                Filter by qualification, university, or delivery mode.
              </p>
            </div>
          </div>

          {activeFilterCount > 0 && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex min-h-10 items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary-subtle hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            >
              <X className="size-3.5" aria-hidden="true" />
              Clear {activeFilterCount} filter
              {activeFilterCount === 1 ? "" : "s"}
            </button>
          )}
        </div>

        <fieldset className="mt-6">
          <legend className="text-xs font-semibold uppercase tracking-wider text-muted">
            Qualification level
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {levelOptions.map((option) => {
              const isActive = activeLevel === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => updateLevel(option.value)}
                  aria-pressed={isActive}
                  className={
                    isActive
                      ? "inline-flex min-h-10 items-center gap-2 rounded-full border border-primary bg-primary px-4 py-2 text-xs font-semibold text-surface shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring sm:text-sm"
                      : "inline-flex min-h-10 items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-body transition-colors hover:border-primary-300 hover:bg-primary-subtle hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring sm:text-sm"
                  }
                >
                  {option.label}
                  <span
                    className={
                      isActive
                        ? "rounded-full bg-surface/15 px-1.5 py-0.5 text-[10px] text-surface"
                        : "rounded-full bg-secondary px-1.5 py-0.5 text-[10px] text-muted"
                    }
                  >
                    {levelCounts.get(option.value) || 0}
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-2">
            <label
              htmlFor="programme-search"
              className="mb-2 block text-xs font-semibold text-heading"
            >
              Search programmes
            </label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
              <input
                id="programme-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try MBA, accounting, education..."
                className="min-h-12 w-full rounded-xl border border-border-strong bg-surface py-2.5 pl-10 pr-4 text-sm text-heading placeholder:text-muted focus:border-primary focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="programme-university"
              className="mb-2 block text-xs font-semibold text-heading"
            >
              University
            </label>
            <div className="relative">
              <select
                id="programme-university"
                value={universitySlug}
                onChange={(event) => setUniversitySlug(event.target.value)}
                className="min-h-12 w-full appearance-none rounded-xl border border-border-strong bg-surface py-2.5 pl-3.5 pr-9 text-sm text-heading focus:border-primary focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring"
              >
                <option value="all">All universities</option>
                {universities.map((university) => (
                  <option key={university.slug} value={university.slug}>
                    {university.shortName}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="programme-mode"
              className="mb-2 block text-xs font-semibold text-heading"
            >
              Study mode
            </label>
            <div className="relative">
              <select
                id="programme-mode"
                value={studyMode}
                onChange={(event) =>
                  setStudyMode(event.target.value as StudyMode)
                }
                className="min-h-12 w-full appearance-none rounded-xl border border-border-strong bg-surface py-2.5 pl-3.5 pr-9 text-sm text-heading focus:border-primary focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring"
              >
                <option value="all">All study modes</option>
                <option value="online">100% online available</option>
                <option value="odl">Open distance learning</option>
                <option value="conventional">On-campus available</option>
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p
            className="text-sm font-semibold text-heading"
            role="status"
            aria-live="polite"
          >
            {filteredProgrammes.length} programme
            {filteredProgrammes.length === 1 ? "" : "s"} found
          </p>
          <p className="mt-1 text-xs text-muted">
            Select a programme to review its structure and eligibility details.
          </p>
        </div>
        <p className="text-xs font-medium text-muted">
          Showing {filteredProgrammes.length} of {programmes.length}
        </p>
      </div>

      {filteredProgrammes.length > 0 ? (
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProgrammes.map((programme) => (
            <ProgrammeCard
              key={programme.id}
              programme={programme}
              university={universityBySlug.get(programme.universitySlug)}
            />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-3xl border border-dashed border-border-strong bg-surface p-8 text-center sm:p-12">
          <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary-subtle text-primary">
            <SearchX className="size-6" aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-lg font-semibold text-heading">
            No matching programmes
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-body">
            Try a broader search or clear your filters to view every available
            pathway.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-surface transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
          >
            View all programmes
          </button>
        </div>
      )}
    </div>
  );
}
