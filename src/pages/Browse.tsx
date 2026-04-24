import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import CategoryFilters from "@/components/CategoryFilters";
import EventGrid from "@/components/EventGrid";
import Footer from "@/components/Footer";
import { events, categories } from "@/data/events";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";

type CategoryFilter = (typeof categories)[number];

const Browse = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `Browse Events — ${APP_NAME}`;
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  const filtered = useMemo(
    () =>
      events.filter((e) => {
        const matchesQuery = e.title.toLowerCase().includes(query.toLowerCase());
        const matchesCat = activeCategory === "All" || e.category === activeCategory;
        return matchesQuery && matchesCat;
      }),
    [query, activeCategory]
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page header */}
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
        <div className="container relative py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/60 px-4 py-1.5 text-xs font-medium text-foreground shadow-xs backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              {events.length} events available
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold text-foreground md:text-5xl">
              Browse all events
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore curated tech, music, and business events across Africa.
            </p>

            {/* Search bar */}
            <div className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-2xl border border-border/80 bg-card p-2 shadow-elevated">
              <Search className="ml-3 h-5 w-5 shrink-0 text-muted-foreground" strokeWidth={2.25} />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search events, cities, organizers…"
                className="border-0 bg-transparent text-base text-foreground shadow-none focus-visible:ring-0"
                aria-label="Search events"
              />
              {query && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setQuery("")}
                  className="rounded-xl text-muted-foreground hover:text-foreground"
                >
                  Clear
                </Button>
              )}
              <Button size="sm" className="rounded-xl bg-foreground font-medium text-background hover:bg-foreground/90">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Events section */}
      <section className="container py-16 md:py-20">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">
              {loading
                ? "Loading events…"
                : `${filtered.length} ${filtered.length === 1 ? "event" : "events"} found`}
            </p>
          </div>
          <CategoryFilters active={activeCategory} onChange={setActiveCategory} />
        </div>

        <EventGrid events={filtered} loading={loading} />
      </section>

      <Footer />
    </div>
  );
};

export default Browse;
