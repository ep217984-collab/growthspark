import { createFileRoute, Outlet, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/editorial")({
  component: EditorialLayout,
});

const editorialNav = [
  { to: "/editorial", label: "Home", exact: true },
  { to: "/editorial/featured-authors", label: "Featured Authors" },
  { to: "/editorial/interviews", label: "Author Interviews" },
  { to: "/editorial/spotlights", label: "Book Spotlights" },
  { to: "/editorial/editors-picks", label: "Editor's Picks" },
  { to: "/editorial/conversations", label: "Literary Conversations" },
  { to: "/editorial/reading-lists", label: "Reading Lists" },
  { to: "/editorial/collections", label: "Seasonal Collections" },
  { to: "/editorial/why-we-feature", label: "Why We Feature" },
] as const;

function EditorialLayout() {
  return (
    <div className="bg-background">
      {/* Editorial masthead */}
      <div className="border-b border-[oklch(0.308_0.034_127_/_0.16)] bg-[var(--section-alt)]">
        <div className="mx-auto max-w-[1240px] px-6 py-6 flex items-center justify-between flex-wrap gap-4">
          <Link to="/editorial" className="flex items-baseline gap-3">
            <span className="font-serif text-2xl tracking-tight">GrowthSpark <span className="text-gold italic">Editorial</span></span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.28em] text-muted-foreground">A Literary Publication</span>
          </Link>
          <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            Vol. 01 · {new Date().toLocaleString("en-US", { month: "long", year: "numeric" })}
          </span>
        </div>
        <div className="border-t border-[oklch(0.308_0.034_127_/_0.14)]">
          <div className="mx-auto max-w-[1240px] px-6">
            <nav className="flex gap-6 overflow-x-auto py-4 text-[12px] tracking-wide">
              {editorialNav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  activeOptions={{ exact: "exact" in n ? n.exact : false }}
                  className="whitespace-nowrap text-foreground/60 hover:text-foreground transition"
                  activeProps={{ className: "whitespace-nowrap text-gold" }}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
