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
  title: "Myagmarsuren Nyamkhuu | Web Developer",
  description: "Full-stack web developer from Ulaanbaatar, Mongolia. Specialized in Next.js, React, TypeScript, and AWS. Building modern, scalable web applications.",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Web Developer", "MongoDB", "AWS"],
  openGraph: {
    title: "Myagmarsuren Nyamkhuu | Web Developer",
    description: "Full-stack web developer from Ulaanbaatar, Mongolia. Building modern web applications.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
