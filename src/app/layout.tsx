import type { Metadata } from "next";
import { META_DATA } from "../utils/constants/meta-data";
import "./globals.css";

export const metadata: Metadata = {
  title: META_DATA.title,
  description: META_DATA.description,
  applicationName: META_DATA.title,
  keywords: META_DATA.keywords,
  authors: {
    name: META_DATA.authorName,
    url: META_DATA.authorUrl,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
