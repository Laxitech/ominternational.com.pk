"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu as MenuIcon, X } from "lucide-react";
import {
  isNavigationItemActive,
  navigation,
} from "@/data/navigation";
import { cn } from "@/lib/utils";

function panelIdFor(href: string) {
  return `mobile-nav-${href.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "")}`;
}

export default function MobileNav() {
  const pathname = usePathname();
  const [menuState, setMenuState] = useState<{
    open: boolean;
    path: string;
  } | null>(null);
  const [expandedState, setExpandedState] = useState<{
    section: string | null;
    path: string;
  } | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const isOpen = menuState?.path === pathname ? menuState.open : false;
  const activeSection = navigation.find(
    (item) =>
      item.children &&
      (isNavigationItemActive(pathname, item.href) ||
        item.children.some((child) =>
          isNavigationItemActive(pathname, child.href),
        )),
  );
  const expandedSection =
    expandedState?.path === pathname
      ? expandedState.section
      : (activeSection?.href ?? null);

  function setIsOpen(open: boolean) {
    setMenuState({ open, path: pathname });
  }

  function setExpandedSection(section: string | null) {
    setExpandedState({ section, path: pathname });
  }

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuState(null);
        triggerRef.current?.focus();
      }
    }

    function handlePointerDown(event: globalThis.PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setMenuState(null);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1280px)");

    function handleChange(event: MediaQueryListEvent) {
      if (event.matches) {
        setMenuState(null);
        setExpandedState(null);
      }
    }

    desktopQuery.addEventListener("change", handleChange);

    return () => {
      desktopQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div ref={rootRef} className="xl:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex size-10 items-center justify-center rounded-lg text-heading transition-colors duration-200 hover:bg-primary-subtle hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none"
      >
        {isOpen ? (
          <Image src="/icons/close.png" className="cursor-pointer" alt="Menu" width={30} height={30} />
        ) : (

          <Image src="/icons/humburger.png" className="cursor-pointer" alt="Menu" width={30} height={30} />
        )}
      </button>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-border bg-surface shadow-xl shadow-primary/10"
        >
          <nav
            aria-label="Mobile navigation"
            className="w-full px-4 py-4 sm:px-5"
          >
            <ul className="flex flex-col gap-1">
              {navigation.map((item) => {
                const isAnyChildActive = item.children?.some((child) =>
                  isNavigationItemActive(pathname, child.href),
                );
                const isActive =
                  isNavigationItemActive(pathname, item.href) ||
                  Boolean(isAnyChildActive);

                if (item.children) {
                  const isExpanded = expandedSection === item.href;
                  const sectionId = panelIdFor(item.href);

                  return (
                    <li key={item.href}>
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        aria-controls={sectionId}
                        onClick={() =>
                          setExpandedSection(isExpanded ? null : item.href)
                        }
                        className={cn(
                          "flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-base font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none",
                          isActive
                            ? "bg-primary-subtle text-primary"
                            : "text-body hover:bg-primary-subtle hover:text-primary",
                        )}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          aria-hidden="true"
                          className={cn(
                            "size-4 transition-transform duration-200 motion-reduce:transition-none",
                            isExpanded && "rotate-180",
                          )}
                        />
                      </button>

                      <div
                        id={sectionId}
                        className={cn(
                          "mt-1 border-l-2 border-border pl-3",
                          isExpanded ? "block" : "hidden",
                        )}
                      >
                        <ul className="flex flex-col gap-1">
                          {item.children.map((child) => {
                            const isChildActive =
                              !child.href.includes("?") &&
                              isNavigationItemActive(pathname, child.href);

                            return (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={() => setIsOpen(false)}
                                  aria-current={
                                    isChildActive ? "page" : undefined
                                  }
                                  className={cn(
                                    "flex rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none",
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
                    </li>
                  );
                }

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "flex items-center rounded-lg px-3 py-3 text-base font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none",
                        isActive
                          ? "bg-primary-subtle text-primary"
                          : "text-body hover:bg-primary-subtle hover:text-primary",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/apply"
              onClick={() => setIsOpen(false)}
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-surface shadow-sm transition-colors duration-200 hover:bg-primary-hover active:bg-primary-pressed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none"
            >
              Contact Us
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
              />
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
