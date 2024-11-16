"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Loader from "./_components/Loader";

// Font configuration
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <html lang="en" className={inter.variable}>
      <body
        className={cn(
          "h-full w-full bg-background text-foreground font-sans"
        )}
      >
        {loading ? <Loader /> : children}
      </body>
    </html>
  );
}
