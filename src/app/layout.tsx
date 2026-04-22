import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "../components/transitions/transitions.scss";
import PageLoader from "@/components/PageLoader";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import TransitionLayout from "@/components/transitions/TransitionLayout";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Debjit Das — Designer & Developer",
  description:
    "Freelance Designer & Developer crafting premium digital experiences. Portfolio showcasing creative work in design and development.",
  keywords: ["designer", "developer", "portfolio", "freelance", "web design"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`} suppressHydrationWarning>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-manrope), sans-serif" }}
      >
        <PageLoader />
        <Navbar />
        <SmoothScroll>
          <TransitionLayout>{children}</TransitionLayout>
        </SmoothScroll>
      </body>
    </html>
  );
}
