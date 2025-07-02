
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ShipKit",
  description: "Streamline your shipping process.",
};

export default function ShipKitLayout({
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
