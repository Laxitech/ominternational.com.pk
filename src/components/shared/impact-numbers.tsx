import { IMPACT_NUMBERS, type ImpactNumberItem } from "@/data/numbers";
import { cn } from "@/lib/utils";

export type ImpactNumbersProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items?: ImpactNumberItem[];
  className?: string;
};

export default function ImpactNumbers({
  eyebrow = "Our Impact in Numbers",
  title = "Proven Reach & Milestone Numbers",
  subtitle = "Delivering accredited global higher education to thousands of corporate leaders, certified professionals, and civil servants.",
  items = IMPACT_NUMBERS,
  className,
}: ImpactNumbersProps) {
  return (
    <section
      aria-labelledby="impact-numbers-heading"
      className={cn("py-12 sm:py-16 lg:py-20", className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          {eyebrow && (
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-accent sm:text-sm">
              {eyebrow}
            </span>
          )}
          <h2
            id="impact-numbers-heading"
            className="mt-2 text-2xl font-display font-bold tracking-tight text-heading sm:text-3xl lg:text-4xl"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-body">
              {subtitle}
            </p>
          )}
        </div>

        {/* 9 Numbering Cards Grid (3x3 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <div>
                  <div className="inline-flex size-12 items-center justify-center rounded-xl bg-primary-subtle border border-primary-200 text-primary transition-transform duration-300 group-hover:scale-105">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>

                  <div className="mt-5">
                    <p className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-heading group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                    <h3 className="mt-1.5 font-display text-base sm:text-lg font-bold text-heading">
                      {item.label}
                    </h3>
                  </div>
                </div>

                {item.description && (
                  <p className="mt-3 border-t border-border/70 pt-3 text-xs sm:text-sm text-body leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
