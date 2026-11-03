export type NavigationChild = {
  label: string;
  href: string;
};

export type NavigationItem = {
  label: string;
  href: string;
  children?: NavigationChild[];
};

export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Governing Board", href: "/governing-board" },
    ],
  },
  {
    label: "Universities",
    href: "/universities",
    children: [
      { label: "Asia e University", href: "/universities/asia-e-university" },
      { label: "UNIRAZAK", href: "/universities/unirazak" },
    ],
  },
  {
    label: "Programmes",
    href: "/programmes",
    children: [
      {
        label: "Master of Business Administration (MBA)",
        href: "/programmes/master-of-business-administration",
      },
      {
        label: "BS Accounting and Finance",
        href: "/programmes/bs-accounting-and-finance",
      },
      {
        label: "Phd Programme",
        href: "/programmes/doctor-of-philosophy",
      },
    ],
  },
  { label: "INCEIF Collaboration", href: "/inceif" },
  { label: "Learning Centers", href: "/centers" },
  { label: "Contact", href: "/contact" },
];

export function isNavigationItemActive(
  pathname: string,
  href: string,
): boolean {
  const path = href.split(/[?#]/)[0];

  if (path === "/") {
    return pathname === "/";
  }

  return pathname === path || pathname.startsWith(`${path}/`);
}
