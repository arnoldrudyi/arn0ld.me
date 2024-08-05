import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react"
import { IBM_Plex_Mono } from "next/font/google";

import "./globals.css";
import { Header, Footer } from "@/components/shared";

const ibm_plex_mono = IBM_Plex_Mono({ 
  subsets: ["latin"], 
  variable: "--font-ibm-plex-mono", 
  weight: ["400", "500", "600", "700"] 
});

export const metadata: Metadata = {
  title: "arn0ld",
  description: "Portfolio Website",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibm_plex_mono.className}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
