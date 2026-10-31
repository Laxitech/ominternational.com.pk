import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type PageHeaderProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  imageSrc?: string;
  imageAlt?: string;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
  children?: React.ReactNode;
};

export default function PageHeader({
  title,
  subtitle,
  eyebrow,
  imageSrc = "/images/page header/unirazak.jpg",
  imageAlt = "OM International educational pathway banner",
  breadcrumbs,
  className,
  children,
}: PageHeaderProps) {
  return (
    <section
      aria-labelledby="page-header-title"
      className={cn(
        "relative isolate flex min-h-[260px] sm:min-h-[300px] md:min-h-[340px] items-center overflow-hidden bg-primary-900",
        className,
      )}
    >
      {/* Background image & gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Multi-stop gradient overlay for maximum readability */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/85 to-primary-900/55 lg:via-primary-900/75 lg:to-primary-900/35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-primary-900/85 via-transparent to-primary-900/30"
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
        <div className="max-w-3xl">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumbs" className="mb-4">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-primary-200">
                {breadcrumbs.map((item, index) => {
                  const isLast = index === breadcrumbs.length - 1;
                  return (
                    <li key={item.label} className="flex items-center gap-1.5">
                      {index > 0 && (
                        <ChevronRight
                          className="size-3 text-primary-300/70"
                          aria-hidden="true"
                        />
                      )}
                      {item.href && !isLast ? (
                        <Link
                          href={item.href}
                          className="transition-colors duration-200 hover:text-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface motion-reduce:transition-none"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span
                          className="text-surface font-semibold"
                          aria-current={isLast ? "page" : undefined}
                        >
                          {item.label}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          )}

          {/* Eyebrow */}
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-200 sm:text-sm">
              {eyebrow}
            </p>
          )}

          {/* Main Title */}
          <h1
            id="page-header-title"
            className="text-balance text-3xl font-semibold tracking-tight text-surface sm:text-4xl lg:text-5xl"
          >
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="mt-3 text-balance text-base leading-relaxed text-surface/90 sm:text-lg sm:leading-8">
              {subtitle}
            </p>
          )}

          {/* Optional Action Slot */}
          {children && (
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
