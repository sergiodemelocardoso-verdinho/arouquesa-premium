import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "solid" | "ghost";

export function GoldButton({
  children,
  variant = "solid",
  className = "",
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; children: ReactNode }) {
  const base =
    "group inline-flex items-center justify-center gap-3 px-7 py-3.5 text-[0.78rem] tracking-[0.24em] uppercase font-medium transition-all duration-300";
  const styles =
    variant === "solid"
      ? "bg-gold text-charcoal hover:bg-gold-soft hover:-translate-y-0.5 shadow-[0_1px_0_rgba(0,0,0,0.2)]"
      : "border border-gold/60 text-gold hover:border-gold hover:bg-gold/5";
  return (
    <a className={`${base} ${styles} ${className}`} {...rest}>
      <span>{children}</span>
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}
