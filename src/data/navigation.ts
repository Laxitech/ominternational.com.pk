export type NavigationChild = {
  label: string;
  href: string;
  group?: string;
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
    href: "/who-we-are",
    children: [
      {
        label: "Governing Board",
        href: "/governing-board",
        group: "Management",
      },
      {
        label: "Advisory Board",
        href: "/advisory-board",
        group: "Management",
      },
      {
        label: "Who We Are",
        href: "/who-we-are",
        group: "About Us",
      },
      {
        label: "Why Study With Us",
        href: "/why-study-with-us",
        group: "About Us",
      },
      {
        label: "What to Expect From Us",
        href: "/what-to-expect-from-us",
        group: "About Us",
      },
    ],
  },
  {
    label: "UNIRAZAK",
    href: "/universities/unirazak",
    children: [
      {
        label: "About UNIRAZAK",
        href: "/universities/unirazak",
      },
      {
        label: "UniRazak Accreditation",
        href: "/unirazak-accreditation",
      },
    ],
  },
  { label: "INCEIF Collaboration", href: "/inceif" },
  { label: "Learning Centers", href: "/centers" },
  { label: "Events Book", href: "/events-book" },
  { label: "Testimonials", href: "/testimonials" },
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
