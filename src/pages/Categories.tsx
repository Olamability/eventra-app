import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import EventGrid from "@/components/EventGrid";
import Footer from "@/components/Footer";
import { events, type Category } from "@/data/events";
import { Cpu, Music2, Briefcase } from "lucide-react";
import { APP_NAME } from "@/lib/constants";

type ActiveCategory = Category | null;

const categoryMeta: {
  id: Category;
  label: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bg: string;
}[] = [
  {
    id: "Tech",
    label: "Tech",
    description: "Summits, hackathons, and deep-dive workshops pushing the frontiers of African innovation.",
    icon: Cpu,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    id: "Music",
    label: "Music",
    description: "Afrobeats, jazz, amapiano, and live concerts celebrating the sounds of a generation.",
    icon: Music2,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    id: "Business",
    label: "Business",
    description: "Forums, investor days, and leadership summits driving Pan-African economic growth.",
    icon: Briefcase,
    color: "text-foreground",
    bg: "bg-secondary",
  },
];

const Categories = () => {
  const [active, setActive] = useState<ActiveCategory>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = `Categories — ${APP_NAME}`;
  }, []);

  const filtered = useMemo(
    () => (active ? events.filter((e) => e.category === active) : events),
    [active]
  );

  const handleSelect = (id: Category) => {
    if (active === id) {
      setActive(null);
    } else {
      setLoading(true);
      setActive(id);
      setTimeout(() => setLoading(false), 400);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page header */}
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
        <div className="container relative py-16 md:py-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/60 px-4 py-1.5 text-xs font-medium text-foreground shadow-xs backdrop-blur">
            Explore by type
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold text-foreground md:text-5xl animate-fade-in-up">
            Event categories
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Browse events by category. Click a card to filter events below.
          </p>
        </div>
      </section>

      {/* Category cards */}
      <section className="container py-14">
        <div className="grid gap-6 sm:grid-cols-3">
          {categoryMeta.map((cat) => {
            const isActive = active === cat.id;
            const count = events.filter((e) => e.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => handleSelect(cat.id)}
                className={`group relative flex flex-col gap-4 overflow-hidden rounded-3xl border p-8 text-left shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elevated ${
                  isActive
                    ? "border-primary/40 bg-primary/5 ring-2 ring-primary/30"
                    : "border-border/60 bg-card hover:border-primary/20"
                }`}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${cat.bg}`}>
                  <cat.icon className={`h-6 w-6 ${cat.color}`} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{cat.label}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{cat.description}</p>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {count} {count === 1 ? "event" : "events"}
                  </span>
                  <span
                    className={`text-xs font-semibold transition-base ${
                      isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                    }`}
                  >
                    {isActive ? "Showing ✓" : "Filter →"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Filtered events */}
      <section className="container pb-20">
        <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">
              {active ? `${active} Events` : "All Events"}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "event" : "events"}{" "}
              {active ? `in ${active}` : "across all categories"}
            </p>
          </div>
          {active && (
            <button
              onClick={() => setActive(null)}
              className="text-sm font-medium text-primary hover:underline transition-base"
            >
              ← Show all
            </button>
          )}
        </div>
        <EventGrid events={filtered} loading={loading} />
      </section>

      <Footer />
    </div>
  );
};

export default Categories;
