"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type UseCountUpOptions = {
  duration?: number;
  pad?: number;
  start?: boolean;
  easing?: (progress: number) => number;
};

const easeOutCubic = (progress: number) =>
  1 - Math.pow(1 - progress, 3);

export function useCountUp(
  target: number,
  {
    duration = 1600,
    pad = 0,
    start = false,
    easing = easeOutCubic,
  }: UseCountUpOptions = {},
) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start || prefersReducedMotion || target <= 0) {
      return;
    }

    let frame = 0;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);

      setValue(Math.round(easing(progress) * target));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [duration, easing, prefersReducedMotion, start, target]);

  const currentValue = prefersReducedMotion ? target : value;

  return {
    value: currentValue,
    display: String(currentValue).padStart(pad, "0"),
    isComplete: prefersReducedMotion || value >= target,
    prefersReducedMotion,
  } as const;
}
