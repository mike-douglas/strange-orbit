import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const baseStyles = "inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50";

  const variantStyles = {
    primary: "bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300",
    secondary: "border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300",
  };

  return (
    <Link href={href} className={clsx(baseStyles, variantStyles[variant], className)}>
      {children}
    </Link>
  );
}
