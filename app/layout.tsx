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
  title: "Anurag Wazarkar | Web Developer & AI Automation Engineer",
  description: "Portfolio of Anurag Wazarkar - Web Developer & AI Automation Engineer specializing in modern websites, full-stack applications, and AI-powered automations. Hire for freelance web development projects.",
  keywords: ["web developer", "AI automation", "full-stack developer", "Next.js", "React", "TypeScript", "portfolio"],
  authors: [{ name: "Anurag Wazarkar" }],
  openGraph: {
    title: "Anurag Wazarkar | Web Developer & AI Automation Engineer",
    description: "I build fast, modern websites and AI-powered automations. Check out my portfolio and projects.",
    type: "website",
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
