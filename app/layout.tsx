import type { Metadata } from "next";

import { ThemeProvider } from "@wrksz/themes/next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Theme System with @wrksz/themes",
  description: "A dark and light theme implementation for Next.js 16.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#10131c",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="system">{children}</ThemeProvider>
      </body>
    </html>
  );
}
