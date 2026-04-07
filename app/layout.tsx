import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spark SEO | SEO Services That Drive Qualified Traffic",
  description:
    "Spark SEO helps businesses grow with technical SEO, on-page SEO, content strategy, and local SEO services that attract qualified traffic and more leads.",
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
