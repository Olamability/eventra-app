import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, Globe2, Users } from "lucide-react";

const stats = [
  { icon: Sparkles, value: "200+", label: "Curated events" },
  { icon: Globe2, value: "12", label: "Countries" },
  { icon: Users, value: "50k", label: "Attendees" },
  { icon: TrendingUp, value: "98%", label: "Satisfaction" },
];

interface HeroProps {
  query: string;
  onQueryChange: (value: string) => void;
}

const Hero = ({ query, onQueryChange }: HeroProps) => {
  return (
    <section className="relative overflow-hidden border-b border-border/50">
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)",
        }}
      />

      <div className="container relative py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/60 px-4 py-1.5 text-xs font-medium text-foreground shadow-xs backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Live · 24 events this month
          </span>

          <h1 className="mt-7 font-display text-5xl font-bold leading-[1.05] text-foreground text-balance md:text-6xl lg:text-7xl">
            Discover events that
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              move the continent.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
            From Lagos to Cape Town — a curated platform for the tech, music, and business gatherings shaping Africa's next decade.
          </p>

          <div className="mx-auto mt-10 flex max-w-xl items-center gap-2 rounded-2xl border border-border/80 bg-card p-2 shadow-elevated">
            <Search className="ml-3 h-5 w-5 shrink-0 text-muted-foreground" strokeWidth={2.25} />
            <Input
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search events, cities, organizers…"
              className="border-0 bg-transparent text-base text-foreground shadow-none focus-visible:ring-0"
              aria-label="Search events"
            />
            <Button size="sm" className="rounded-xl bg-foreground font-medium text-background hover:bg-foreground/90">
              Search
            </Button>
          </div>

          <div className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 shadow-soft sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1.5 bg-card/95 px-4 py-5 backdrop-blur">
                <s.icon className="h-4 w-4 text-primary" strokeWidth={2.25} />
                <div className="font-display text-xl font-bold text-foreground">{s.value}</div>
                <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
