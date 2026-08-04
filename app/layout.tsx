import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M.R. Aakash — Portfolio",
  description:
    "Portfolio of M.R. Aakash, B.Tech Information Technology undergraduate at PSNA College of Engineering and Technology.",
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
