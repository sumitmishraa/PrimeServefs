import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PrimeServe — B2B Facility Management Marketplace",
  description:
    "Your trusted B2B marketplace for housekeeping materials, cleaning chemicals, office stationery, and pantry items. Flexible credit terms, bulk pricing, and Pro plan benefits.",
  keywords: [
    "B2B marketplace",
    "facility management",
    "housekeeping supplies",
    "cleaning chemicals",
    "office stationery",
    "pantry items",
    "bulk ordering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-[#F9FAFB] text-[#111827]`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
