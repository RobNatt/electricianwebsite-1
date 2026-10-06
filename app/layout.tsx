import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: `${site.name} | Licensed electricians for homes and commercial builds`,
  description:
    "Licensed electricians for custom homes and commercial builds, from first-fix wiring to the last lighting scene. Fixed, itemised quotes and a 5-year workmanship warranty.",
};

export const viewport: Viewport = { themeColor: "#05080F" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
