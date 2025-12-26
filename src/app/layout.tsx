import type { Metadata } from "next";

import "./globals.css";
export const metadata: Metadata = {
  title: "Saish Ghatol - Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-neutral-950 text-neutral-200 antialiased selection:bg-neutral-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}