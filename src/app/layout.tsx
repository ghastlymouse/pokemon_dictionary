import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "./_Providers";

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
      <body className="flex flex-col justify-center items-center gap-4">
        <header className="text-2xl">포켓몬 도감</header>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
