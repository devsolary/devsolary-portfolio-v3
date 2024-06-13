import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBg from "@/components/FireFliesBg";
import Sound from "@/components/Sound";

const inter = Inter({ subsets: ["latin"],
  variable: "--font-inter"
 });

export const metadata: Metadata = {
  title: "Devsolary Porfolio",
  description: "Software developer ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "bg-background text-foreground font-inter")}>{children}<FireFliesBg />
      <Sound />
      <div id="my-modal" />
       </body>
    </html>
  );
}
