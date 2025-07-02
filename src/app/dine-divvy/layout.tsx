
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dine Divvy",
  description: "Split restaurant bills with ease.",
};

export default function DineDivvyLayout({
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
