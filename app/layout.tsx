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
  title: "Isidore OGOULODO",
  description: "developer portfolio, fullstack developer, web designer, AI passionnate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={cn("h-full w-full bg-background text-foreground font-sans  ",)}>{children}</body>
    </html>
  );
}
