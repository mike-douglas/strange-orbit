import "../reset.css";
import "./globals.css";

export default function MyGLPLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {children}
    </main>
  );
}
