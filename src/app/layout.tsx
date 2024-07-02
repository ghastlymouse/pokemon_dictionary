import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "포켓몬 도감",
  description: "개인과제",
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
