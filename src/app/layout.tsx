import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
        className={`${spaceGrotesk.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {/* Skip to main content — keyboard accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-1/2 focus:-translate-x-1/2 focus:z-[99999] focus:px-6 focus:py-3 focus:bg-accent focus:text-white focus:rounded-full focus:text-sm focus:font-medium focus:shadow-lg"
          >
            Skip to content
          </a>
          <main id="main-content">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
