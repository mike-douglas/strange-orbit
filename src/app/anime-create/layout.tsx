
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anime Create",
  description: "Create your own anime characters.",
};

export default function AnimeCreateLayout({
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
