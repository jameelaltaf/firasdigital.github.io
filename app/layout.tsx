import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollObserver from "@/components/ScrollObserver";

export const metadata: Metadata = {
  title: "Firas Digital | We Grow Businesses",
  description:
    "Performance-first digital marketing for ambitious brands ready to shift gears and dominate their category. Paid media, SEO, web design & CRO, social media management.",
  keywords: [
    "digital marketing agency",
    "paid media",
    "SEO",
    "social media management",
    "web design",
    "CRO",
    "performance marketing",
    "Meta ads",
    "Google ads",
  ],
  openGraph: {
    title: "Firas Digital | We Grow Businesses",
    description:
      "Performance-first digital marketing for ambitious brands ready to dominate their category.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Firas Digital | We Grow Businesses",
    description:
      "Performance-first digital marketing for ambitious brands ready to dominate their category.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background selection:bg-secondary selection:text-on-secondary">
        <CustomCursor />
        <ScrollProgress />
        <ScrollObserver />
        {children}
      </body>
    </html>
  );
}
