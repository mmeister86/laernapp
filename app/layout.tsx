import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LaernApp - Spielend bessere Noten",
  description:
    "Die gamifizierte Lernplattform für deutsche Schulkinder. Lerne mit Spaß, sammle XP und erreiche deine Ziele!",
  keywords: [
    "Lernen",
    "Gamification",
    "Schule",
    "Deutschland",
    "Kinder",
    "Bildung",
  ],
  authors: [{ name: "LaernApp Team" }],
  openGraph: {
    title: "LaernApp - Spielend bessere Noten",
    description: "Die gamifizierte Lernplattform für deutsche Schulkinder",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
