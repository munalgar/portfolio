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
  title: "Alejandro Muñoz | CTO & AI Engineer",
  description:
    "Chief Technology Officer at SOL AI and AI Engineer specializing in full-stack development, team leadership, and AI systems. Building innovative MVPs with Python, TypeScript, and modern web technologies.",
  keywords: [
    "Chief Technology Officer",
    "CTO",
    "AI Engineer",
    "Software Engineer",
    "Python",
    "TypeScript",
    "JavaScript",
    "Full Stack Developer",
    "Team Leadership",
    "Artificial Intelligence",
    "Machine Learning",
  ],
  authors: [{ name: "Alejandro Muñoz" }],
  openGraph: {
    title: "Alejandro Muñoz | CTO & AI Engineer",
    description:
      "Chief Technology Officer and AI Engineer specializing in full-stack development and team leadership",
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
