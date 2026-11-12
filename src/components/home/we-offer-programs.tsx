import { ArrowUpRight } from "lucide-react";

type ProgrammeOffering = {
  name: string;
  href: string;
};

const programmes: ProgrammeOffering[] = [
  {
    name: "Foundation",
    href: "https://unirazak.edu.my/programmes/foundation-in-arts-2/",
  },
  {
    name: "Bachelor",
    href: "https://unirazak.edu.my/programmes/bachelor-in-accounting-honours/",
  },
  {
    name: "Master",
    href: "https://unirazak.edu.my/programmes/master-of-business-administration/",
  },
  {
    name: "PhD",
    href: "https://unirazak.edu.my/programmes/doctor-of-philosophy/",
  },
];

export default function WeOfferPrograms() {
  return (
    <section
      aria-labelledby="we-offer-programs-heading"
      className="bg-surface py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2
          id="we-offer-programs-heading"
          className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.15] font-semibold tracking-tight text-heading"
        >
          We Offer following Programs
        </h2>

        <ul className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {programmes.map((programme) => (
            <li key={programme.name}>
              <a
                href={programme.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-surface px-5 py-4 transition-all duration-200 hover:border-primary hover:bg-primary-subtle hover:shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none"
              >
                <span className="text-sm font-semibold text-heading sm:text-base group-hover:text-primary transition-colors">
                  {programme.name}
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 shrink-0 text-primary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
