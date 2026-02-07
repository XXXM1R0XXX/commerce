import { GeistSans } from "geist/font/sans";
import { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "components/layout/navbar";
import { baseUrl, SITE_NAME } from "lib/utils";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "SPL (System Professional Line) — один из ведущих отечественных производителей электротехнических и слаботочных решений на российском рынке.",
  robots: {
    follow: true,
    index: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={GeistSans.variable}>
      <body className="bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
