import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link href={href} className={`${styles.button} ${styles[variant]} ${className || ''}`}>
      {children}
    </Link>
  );
}
