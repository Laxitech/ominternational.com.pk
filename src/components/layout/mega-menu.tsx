"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef } from "react";
import type { FocusEvent, KeyboardEvent, PointerEvent } from "react";
import { ChevronDown } from "lucide-react";
import {
  isNavigationItemActive,
  type NavigationItem,
} from "@/data/navigation";
import { cn } from "@/lib/utils";

type MegaMenuProps = {
  item: NavigationItem;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function MegaMenu({
  item,
  isOpen,
  onOpenChange,
}: MegaMenuProps) {
  const pathname = usePathname();
  const panelId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const focusTargetRef = useRef<"first" | "last" | null>(null);
  const isActive = isNavigationItemActive(pathname, item.href);

  function getLinks() {
    return Array.from(
      panelRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]") ?? [],
    );
  }

  useEffect(() => {
    if (!isOpen || !focusTargetRef.current) {
      return;
    }

    const links = Array.from(
      panelRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]") ?? [],
    );
    const target =
      focusTargetRef.current === "first" ? links[0] : links[links.length - 1];

    target?.focus();
    focusTargetRef.current = null;
  }, [isOpen]);

  function handleTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") {
      if (event.key === "Escape" && isOpen) {
        event.preventDefault();
        onOpenChange(false);
      }
      return;
    }

    event.preventDefault();

    if (isOpen) {
      const links = getLinks();
      const target =
        event.key === "ArrowDown" ? links[0] : links[links.length - 1];
      target?.focus();
      return;
    }

    focusTargetRef.current = event.key === "ArrowDown" ? "first" : "last";
    onOpenChange(true);
  }

  function handlePanelKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      onOpenChange(false);
      triggerRef.current?.focus();
      return;
    }

    const links = getLinks();

    if (links.length === 0) {
      return;
    }

    const currentIndex = links.indexOf(
      document.activeElement as HTMLAnchorElement,
    );

    if (event.key === "ArrowDown") {
      event.preventDefault();
      links[(currentIndex + 1) % links.length]?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      links[(currentIndex - 1 + links.length) % links.length]?.focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      links[0]?.focus();
    } else if (event.key === "End") {
      event.preventDefault();
      links[links.length - 1]?.focus();
    }
  }

  function handlePointerEnter(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "touch") {
      onOpenChange(true);
    }
  }

  function handlePointerLeave(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "touch") {
      onOpenChange(false);
    }
  }

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    if (
      !event.currentTarget.contains(event.relatedTarget as Node | null)
    ) {
      onOpenChange(false);
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onBlur={handleBlur}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => onOpenChange(!isOpen)}
        onKeyDown={handleTriggerKeyDown}
        className={cn(
          "inline-flex items-center gap-1 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none",
          isActive
            ? "bg-primary-subtle text-primary"
            : "text-body hover:bg-primary-subtle hover:text-primary",
          isOpen && !isActive && "bg-primary-subtle text-primary",
        )}
      >
        {item.label}
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "size-4 transition-transform duration-200 motion-reduce:transition-none",
            isOpen && "rotate-180",
          )}
        />
      </button>

      <div
        id={panelId}
        ref={panelRef}
        className={cn(
          "absolute left-0 top-full z-50 pt-5",
          isOpen ? "block" : "hidden",
        )}
        onKeyDown={handlePanelKeyDown}
      >
        <ul className="w-64 overflow-hidden rounded-xl border border-border bg-surface p-2 shadow-xl shadow-primary/10">
          {item.children?.map((child) => {
            const isChildActive =
              !child.href.includes("?") &&
              isNavigationItemActive(pathname, child.href);

            return (
              <li key={child.href}>
                <Link
                  href={child.href}
                  onClick={() => onOpenChange(false)}
                  aria-current={isChildActive ? "page" : undefined}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none",
                    isChildActive
                      ? "bg-primary-subtle text-primary"
                      : "text-body hover:bg-primary-subtle hover:text-primary",
                  )}
                >
                  {child.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
