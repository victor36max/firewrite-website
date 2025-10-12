import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dmSans = DM_Sans({
  subsets: ["latin"],
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const lora = Lora({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Firewrite - Where Writing Feels Magical",
  description:
    "A minimalist desktop writing app where AI elevates your voice, never replaces it. Stay in control while writing faster and better.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-3XPG63V9TG" />
    </html>
  );
}
