import { useEffect, useState, type ReactNode } from "react";
import "@/i18n";

export function I18nBoot({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(typeof window === "undefined");
  useEffect(() => setReady(true), []);
  // Render server HTML in default lang; hydrate without blocking.
  return <>{ready ? children : children}</>;
}
