import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project Amphibian",
  description: "A Froggy Weather PWA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
