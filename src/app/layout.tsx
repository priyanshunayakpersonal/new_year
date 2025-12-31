import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";
import MusicPlayer from "@/components/MusicPlayer";
import BackgroundEffects from "@/components/BackgroundEffects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy New Year My Love ❤️",
  description: "A magical New Year surprise for my love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} antialiased relative min-h-screen`}
      >
        <BackgroundEffects />
        <MusicPlayer />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
