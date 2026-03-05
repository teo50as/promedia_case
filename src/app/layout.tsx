import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProMediaIT | Broadcast Studio Case Study",
  description: "A premium audio-visual integration case study by ProMediaIT. Delivering a state-of-the-art broadcast studio featuring Dante audio routing and SDI video matrices.",
  keywords: ["AV Integration", "Broadcast Studio", "ProMediaIT", "Yamaha Audio", "Video Matrix", "Studio Installation"],
  openGraph: {
    title: "ProMediaIT | Broadcast Studio Case Study",
    description: "State-of-the-art audio-visual implementation delivering unparalleled broadcasting capabilities.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProMediaIT | Broadcast Studio Case Study",
    description: "State-of-the-art audio-visual implementation delivering unparalleled broadcasting capabilities.",
  }
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
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
