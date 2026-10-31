"use client";

import { useEffect, useRef, useState } from "react";

type UseInViewOptions = {
  threshold?: number;
  rootMargin?: string;
};

export function useInView<T extends Element = HTMLElement>({
  threshold = 0.35,
  rootMargin = "0px",
}: UseInViewOptions = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || inView) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      const frame = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [inView, rootMargin, threshold]);

  return { ref, inView } as const;
}
