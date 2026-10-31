import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Home } from "lucide-react";
import Image from "next/image";
import errorIllustration from "../../public/icons/404-error.png";

export const metadata: Metadata = {
  title: "404 - Page Not Found | OM International",
  description:
    "The page or study pathway you are looking for doesn't exist or has moved. Explore international university degree programmes with OM International.",
};

export default function NotFound() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      {/* Background subtle radial aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden"
      >
        <div className="h-[460px] w-[620px] rounded-full bg-primary-subtle/60 blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        {/*  illustration */}

        <Image src={errorIllustration} width={400} height={400} alt="Error 404" />



        {/* Heading & description */}
        <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-heading sm:text-4xl md:text-5xl">
          Page Not Found
        </h1>

        <p className="mt-3.5 max-w-lg text-balance text-base leading-relaxed text-body sm:text-lg">
          The page you are looking for doesn’t exist or may have been moved.
          Return to the homepage or explore our academic programmes.
        </p>

        {/* Primary and secondary CTAs */}
        <div className="mt-8 flex w-full max-w-xs flex-col gap-3 sm:max-w-md sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-surface shadow-sm transition-colors duration-200 hover:bg-primary-hover active:bg-primary-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none sm:min-h-12"
          >
            <Home
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 motion-reduce:transition-none"
            />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/programmes"
            className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border-strong bg-surface px-6 py-2.5 text-sm font-semibold text-heading transition-colors duration-200 hover:border-primary hover:bg-secondary hover:text-primary active:bg-primary-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none sm:min-h-12"
          >
            <BookOpen
              aria-hidden="true"
              className="size-4 text-accent transition-colors duration-200 group-hover:text-primary motion-reduce:transition-none"
            />
            <span>Explore Programmes</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
