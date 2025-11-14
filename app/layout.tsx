import { URL } from "url";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wills-resume.com/"),
  title: {
    default: "Will Fritz's Resume",
    template: `%s | Will Fritz`,
  },
  description:
    "The official resume website for Will Fritz, a software developer and IT professional. Explore Will's projects, experience, and skills.",
  openGraph: {
    title: "Will Fritz's Resume",
    description:
      "The official resume website for Will Fritz, a software developer and IT professional. Explore Will's projects, experience, and skills.",
    url: "https://wills-resume.com/",
    siteName: "Will Fritz's Resume",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Will Fritz's Resume",
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}