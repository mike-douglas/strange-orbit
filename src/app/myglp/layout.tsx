
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MyGLP",
  description: "Manage your GLP-1 medication and health.",
};

export default function MyGplLayout({
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
