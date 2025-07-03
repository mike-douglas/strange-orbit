import type { Metadata } from "next";

import "./reset.css"
import "./global.css"

export const metadata: Metadata = {
  title: "Strange Orbit",
  description: "A portfolio of beautiful, delightful apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
