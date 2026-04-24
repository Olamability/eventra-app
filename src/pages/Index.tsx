import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryFilters from "@/components/CategoryFilters";
import EventGrid from "@/components/EventGrid";
import HostCta from "@/components/HostCta";
import Footer from "@/components/Footer";
import { events, categories } from "@/data/events";
import { APP_NAME, APP_TAGLINE } from "@/lib/constants";

type CategoryFilter = (typeof categories)[number];

const Index = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `${APP_NAME} — ${APP_TAGLINE}`;
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
      <Hero query={query} onQueryChange={setQuery} />

      <section className="container py-20 md:py-28">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Upcoming
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Events worth your time
            </h2>
            <p className="text-muted-foreground">
              {loading
                ? "Loading curated events…"
                : `${filtered.length} ${filtered.length === 1 ? "event" : "events"} · hand-picked for you`}
            </p>
          </div>

          <CategoryFilters active={activeCategory} onChange={setActiveCategory} />
        </div>

        <EventGrid events={filtered} loading={loading} />
      </section>

      <HostCta />
      <Footer />
    </div>
  );
};

export default Index;
