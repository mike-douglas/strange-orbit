import type { Metadata } from "next";
import "./chatto.css";

export const metadata: Metadata = {
  title: "Chatto — Learn Japanese by Typing",
  description:
    "Chatto teaches kana recognition and keyboard typing together. Build real fluency through flashcards and chat-style typing practice.",
  openGraph: {
    images: [{ url: "/chatto/images/og.png" }],
  },
  twitter: {
    images: ["/chatto/images/og.png"],
  },
};

export default function ChattoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
