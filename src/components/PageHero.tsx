import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <section className="pt-40 pb-20 lg:pt-52 lg:pb-28 px-6 lg:px-12 border-b border-gold/10">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mt-5 text-bone text-balance">
            {title}
          </h1>
          {lede && (
            <p className="mt-6 text-bone/70 text-lg leading-relaxed max-w-2xl mx-auto text-balance">
              {lede}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
