import type { Metadata } from "next";
import { Inter, Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shamil | Full-Stack Web & App Developer",
  description: "Personal portfolio of Mohammed Shamil K P - Full-Stack Developer specializing in React, Next.js, and Mobile App Development.",
  keywords: ["Full-Stack Developer", "Next.js Portfolio", "React Native", "Flutter", "Web Development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body 
        className="font-sans min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
