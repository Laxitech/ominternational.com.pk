"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  delayMs?: number;
  className?: string;
}

const emptySubscribe = () => () => {};

export default function Reveal({
  children,
  delayMs = 0,
  className,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });
  const isHydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: isHydrated ? `${delayMs}ms` : "0ms",
      }}
      className={cn(
        "transition-all duration-500 ease-out",
        isHydrated && !inView
          ? "opacity-0 translate-y-4"
          : "opacity-100 translate-y-0",
        "motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none motion-reduce:transform-none",
        className,
      )}
    >
      {children}
    </div>
  );
}
