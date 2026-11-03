import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface">
      <div className="flex h-16 w-full items-center justify-between gap-4 px-4 sm:px-5 xl:h-[72px]">
        <Link
          href="/"
          className="shrink-0 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
        >
          <Image
            src="/images/om-logo.png"
            alt={siteConfig.name}
            width={130}
            height={49}
            priority
            className="h-9 w-auto sm:h-10 xl:h-11"
          />
        </Link>

        <div className="hidden items-center gap-3 xl:flex">
          <DesktopNav />

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-surface shadow-sm transition-colors duration-200 hover:bg-primary-hover active:bg-primary-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none"
          >
            Contact Us
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
            />
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
