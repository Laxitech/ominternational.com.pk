import type { Metadata } from "next";
import { Roboto, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/layout/scroll-to-top";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OM International",
  description: "Education facilitation for Asia e University and UNIRAZAK programmes",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${geistMono.variable} h-full scroll-pt-20 scroll-smooth antialiased motion-reduce:scroll-auto`}
    >
      <body className={`${roboto.className} min-h-full flex flex-col font-sans`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary focus:outline-2 focus:outline-offset-2 focus:outline-focus-ring"
        >
          Skip to main content
        </a>
        <Header />
        <div id="main-content" tabIndex={-1} className="flex-1 scroll-mt-20">
          {children}
        </div>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
