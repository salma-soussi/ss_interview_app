import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrepProAI",
  description:
    "PrepProAI is an AI-powered interview prep platform offering mock interviews, real-time feedback, and expert-curated questions to help you land your dream job.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body className={`${monaSans.className} antialiased pattern`}>{children}</body>
    </html>
  );
}
