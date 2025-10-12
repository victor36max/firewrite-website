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
  title: "Firewrite",
  description: "A modern, open-source, and cross-platform writing app.",
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
