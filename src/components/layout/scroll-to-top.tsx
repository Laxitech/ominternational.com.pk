"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
        setScrollProgress(progress);
      }

      setIsVisible(scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG circular progress calculation (radius = 20)
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      tabIndex={isVisible ? 0 : -1}
      aria-label="Scroll back to top of page"
      title="Scroll to top"
      className={cn(
        "group fixed bottom-6 right-6 z-50 flex size-12 items-center justify-center rounded-full bg-primary text-surface shadow-lg shadow-primary/30 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring sm:bottom-8 sm:right-8 cursor-pointer motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
          : "opacity-0 translate-y-4 pointer-events-none scale-90",
      )}
    >
      {/* Scroll completion progress ring */}
      <svg
        className="pointer-events-none absolute inset-0 size-full -rotate-90 p-0.5"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-white/20"
        />
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="text-primary-200 transition-[stroke-dashoffset] duration-150 ease-out"
        />
      </svg>

      {/* Upward chevron icon */}
      <ArrowUp
        className="relative z-10 size-5 transition-transform duration-300 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
    </button>
  );
}
