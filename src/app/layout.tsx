import type { Metadata } from "next";
import { Public_Sans, IBM_Plex_Mono } from "next/font/google";
import Footer from "@/components/layout/Footer";
import { WebMCPProvider } from "@/components/providers/WebMCPProvider";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hiddenspares.com"),
  title: {
    default: "Industrial Ghost Parts | Single Point of Failure Audit",
    template: "%s | Industrial Ghost Parts"
  },
  description: "Global risk assessment and real-time inventory for discontinued Allen-Bradley and industrial PLC parts. Stop downtime before it stops you.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hiddenspares.com",
    siteName: "Industrial Ghost Parts",
    images: [{ url: '/images/audit-og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Ghost Parts",
    description: "Critical risk assessment for discontinued automation assets.",
    images: ['/images/audit-og.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.variable} ${plexMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <WebMCPProvider>
          {children}
          <Footer />
        </WebMCPProvider>
      </body>
    </html>
  );
}
