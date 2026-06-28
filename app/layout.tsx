import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CustomCursor } from "@/components/custom-cursor/custom-cursor";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Prestige Auto Tints — Certified XPEL Installer | Connecticut & New York",
  description:
    "Paint protection film, ceramic coating, and premium window tint for discerning owners who demand nothing less than perfection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
