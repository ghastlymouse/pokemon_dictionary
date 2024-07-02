import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "./provider";

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
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
