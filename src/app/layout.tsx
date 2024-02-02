import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import { cn } from "@/shared/ui/utils";

export const metadata: Metadata = {
  title: "Easy Drumpad",
  description: "Easy Drumpad – fast and simple",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background", inter.className)}>
        {children}
      </body>
    </html>
  );
}
