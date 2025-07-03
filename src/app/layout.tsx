import type { Metadata } from "next";

import "./reset.css"
import "./global.css"

export const metadata: Metadata = {
  title: "Strange Orbit",
  description: "Welcome to Strange Orbit",
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
