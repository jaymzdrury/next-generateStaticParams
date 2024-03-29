import type { Metadata } from "next";
import { inter } from "@/font/font";

export const metadata: Metadata = {
  title: "Generate Static Params",
  description: "genStaticParams",
  icons: {
    icon: "/img/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
