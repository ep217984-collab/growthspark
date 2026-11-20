import type { ReactNode } from "react";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <section className="border-b border-[oklch(0.236_0.047_306_/_0.14)]">
        <div className="mx-auto max-w-3xl px-6 pt-28 pb-16">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-10 bg-gold/60" /> Legal
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl leading-[1.05]">{title}</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: {updated}</p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 prose-legal space-y-6 text-muted-foreground leading-relaxed">
          {children}
        </div>
      </section>
    </>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="font-serif text-2xl text-foreground mt-10">{children}</h2>;
}
