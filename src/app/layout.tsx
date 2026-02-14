import type { Metadata } from "next";
import { Michroma, Chivo_Mono } from "next/font/google";
import "./globals.css";

const michroma = Michroma({
  weight: "400",
  variable: "--font-michroma",
  subsets: ["latin"],
});

const chivoMono = Chivo_Mono({
  variable: "--font-chivo-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Machine Audit | Industrial Ghost Parts",
  description: "Critical risk assessment and real-time inventory for discontinued Allen-Bradley and industrial PLC parts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${michroma.variable} ${chivoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
