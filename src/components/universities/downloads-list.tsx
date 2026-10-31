"use client";

import { Download as DownloadIcon, FileText, ExternalLink } from "lucide-react";
import type { Download } from "@/types/programme";
import { cn } from "@/lib/utils";

type DownloadsListProps = {
  downloads: Download[];
  universityName?: string;
};

export default function DownloadsList({
  downloads,
  universityName,
}: DownloadsListProps) {
  return (
    <section
      aria-labelledby="downloads-heading"
      id="downloads"
      className="border-y border-border bg-secondary/25 py-14 sm:py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary sm:text-sm">
            Official Literature
          </p>
          <h2
            id="downloads-heading"
            className={cn(
              "mt-2 text-balance font-serif",
              "text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.2]",
              "font-semibold tracking-tight text-heading",
              "sm:text-[2.75rem]",
            )}
          >
            Brochures &amp; Prospectus
          </h2>
          <p className="mt-3 text-sm text-body sm:text-base">
            {universityName
              ? `Download official academic literature, degree syllabi, and student guides for ${universityName}.`
              : "Download official academic literature, degree syllabi, and student guides."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {downloads.map((download) => (
            <div
              key={download.title}
              className="flex flex-col justify-between rounded-3xl border border-border bg-surface p-6 shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:border-primary-300 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="inline-flex size-11 items-center justify-center rounded-2xl border border-primary-200 bg-primary-subtle text-primary">
                    <FileText className="size-5" aria-hidden="true" />
                  </div>
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-semibold text-primary">
                    {download.label ?? "PDF"}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-semibold text-heading leading-snug">
                  {download.title}
                </h3>
              </div>

              <div className="mt-6 border-t border-border/80 pt-4">
                <a
                  href={download.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary-hover transition-colors"
                >
                  <DownloadIcon className="size-3.5" aria-hidden="true" />
                  <span>Download Document</span>
                  <ExternalLink className="size-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
