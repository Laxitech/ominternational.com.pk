"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { isNavigationItemActive, navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";
import MegaMenu from "./mega-menu";

export default function DesktopNav() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [menuState, setMenuState] = useState<{
    open: string | null;
    path: string;
  }>({ open: null, path: pathname });
  const openMenu = menuState.path === pathname ? menuState.open : null;

  function setOpenMenu(open: string | null) {
    setMenuState({ open, path: pathname });
  }

  useEffect(() => {
    if (!openMenu) {
      return;
    }

    function handlePointerDown(event: globalThis.PointerEvent) {
      if (!navRef.current?.contains(event.target as Node)) {
        setMenuState((current) => ({ ...current, open: null }));
      }
    }

    function handleKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuState((current) => ({ ...current, open: null }));
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openMenu]);

  return (
    <nav
      ref={navRef}
      aria-label="Primary navigation"
      className="hidden xl:flex"
    >
      <ul className="flex items-center gap-0.5">
        {navigation.map((item) => {
          if (item.children) {
            return (
              <li key={item.href}>
                <MegaMenu
                  item={item}
                  isOpen={openMenu === item.href}
                  onOpenChange={(open) => setOpenMenu(open ? item.href : null)}
                />
              </li>
            );
          }

          const isActive = isNavigationItemActive(pathname, item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpenMenu(null)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "inline-flex rounded-lg px-2.5 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring motion-reduce:transition-none",
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
    </nav>
  );
}
