import { ArrowUpRight } from "lucide-react";

const PROGRAMMES_URL = "https://unirazak.edu.my/all-programmes/";

const programmes = [
  "Bachelor Programs",
  "Master Programs",
  "PHD Programs",
];

export default function WeOfferPrograms() {
  return (
    <section
      aria-labelledby="we-offer-programs-heading"
      className="bg-surface py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2
          id="we-offer-programs-heading"
          className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.15] font-semibold tracking-tight text-heading"
        >
          We Offer following Programs
        </h2>

        <ul className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-3">
          {programmes.map((programme) => (
            <li key={programme}>
              <a
                href={PROGRAMMES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-lg border border-border bg-surface px-5 py-4 transition-colors duration-200 hover:border-primary hover:bg-primary-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none"
              >
                <span className="text-sm font-medium text-heading sm:text-base">
                  {programme}
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 shrink-0 text-primary"
                />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
