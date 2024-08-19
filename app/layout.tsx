import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
   subsets: ["latin"],
   weight : ["300", "400","500","600","700"],
  variable : '--font-sans'
  });

export const metadata: Metadata = {
  title: "Testify",
  description: "AI-recommandation SAAS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("mini-h-screen bg-dark-300 font-sans  antialised",)}>{children}</body>
    </html>
  );
}
