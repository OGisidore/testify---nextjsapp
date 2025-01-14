
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// Font configuration
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Isidore OGOULODO | FullStack Developer",
  description: "Explore the portfolio of Isidore OGOULODO, a skilled web developer showcasing a range of projects, technical skills, and professional experiences.",
  keywords: ["portfolio", "developer", "projects", "Isidore OGOULODO", "FullStack Developer"],
  author: "Isidore OGOULODO",
  openGraph: {
    title: "Isidore OGOULODO | FullStack Developer",
    description: "Explore the portfolio of Isidore OGOULODO, a skilled web developer showcasing a range of projects, technical skills, and professional experiences.",
    image: "https://isidore-og.netlify.app/isidore-port.png",
    url: "https://isidore-og.netlify.app/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isidore OGOULODO | FullStack Developer",
    description: "Explore the portfolio of Isidore OGOULODO, a skilled web developer showcasing a range of projects, technical skills, and professional experiences.",
    image: "https://isidore-og.netlify.app/isidore-port.png",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 

  return (
    <html lang="en" className={inter.variable}>
     
      <body
        className={cn(
          "h-full w-full bg-background text-foreground font-sans"
        )}
      >
         {children}
      </body>
    </html>
  );
}
