import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import FeatherIcons from "./components/FeatherIcons";

const inter = Inter({ subsets: ["latin"] });

/** @todo update metadata */
export const metadata: Metadata = {
  title: "João @jpcbarros",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <FeatherIcons />
      </body>
    </html>
  );
}
