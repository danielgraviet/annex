import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Annex — Extraordinary workspaces for ambitious teams",
  description:
    "Find flexible space inside hangars, warehouses, workshops, and industrial campuses built for companies doing real work.",
  openGraph: {
    title: "Annex — Extraordinary workspaces for ambitious teams",
    description:
      "Find flexible space inside hangars, warehouses, workshops, and industrial campuses built for companies doing real work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
