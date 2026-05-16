import { Manrope, Oswald } from "next/font/google";
import "@/app/globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap"
});

const headingFont = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

export const metadata = {
  metadataBase: new URL("https://astromining-industrial.com"),
  title: {
    default: "Astro Mining & Industrial V2",
    template: "%s | Astro Mining & Industrial V2"
  },
  description:
    "A cinematic homepage concept for Astro Mining & Industrial featuring full-screen storytelling around industrial minerals, export supply, and Egyptian mining expertise.",
  keywords: [
    "Astro Mining",
    "Astro Mining V2",
    "industrial minerals Egypt",
    "silica sand",
    "feldspar",
    "kaolin",
    "gypsum",
    "dolomite",
    "calcium carbonate"
  ],
  openGraph: {
    title: "Astro Mining & Industrial V2",
    description:
      "Scroll-driven homepage concept for Astro Mining & Industrial with immersive media, product storytelling, and export-focused messaging.",
    url: "https://astromining-industrial.com",
    siteName: "Astro Mining & Industrial",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Astro Mining & Industrial V2",
    description:
      "Scroll-driven homepage concept for Astro Mining & Industrial with immersive media and export-focused storytelling."
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>{children}</body>
    </html>
  );
}
