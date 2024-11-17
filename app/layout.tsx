"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Loader from "./_components/Loader";
import Head from "next/head";

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
      <Head>
        {/* SEO général */}
        <title>Isidore OGOULODO | FullStack  developer</title>
        <meta name="description" content="Explore the portfolio of Isidore OGOULODO, a skilled web developer showcasing a range of projects, technical skills, and professional experiences.
 " />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph (pour Facebook, WhatsApp, etc.) */}
        <meta property="og:title" content="Isidore OGOULODO | FullStack  developer" />
        <meta property="og:description" content="Explore the portfolio of Isidore OGOULODO, a skilled web developer showcasing a range of projects, technical skills, and professional experiences.
 " />
        <meta property="og:image" content="/isidore-port.png" />
        <meta property="og:url" content="https://isidore-og.netlify.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Isidore OGOULODO| FullStack  developer" />
        <meta name="twitter:description" content="Explore the portfolio of Isidore OGOULODO, a skilled web developer showcasing a range of projects, technical skills, and professional experiences.
 ." />
        <meta name="twitter:image" content="/isidore-port.png" />
      </Head>
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
