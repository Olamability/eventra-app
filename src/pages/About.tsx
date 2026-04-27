import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Globe2, Sparkles, Users, TrendingUp, Heart, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { APP_NAME } from "@/lib/constants";

const values = [
  {
    icon: Globe2,
    title: "Africa-first",
    description:
      "We're built for the continent — from Lagos to Nairobi, Accra to Cape Town. Every feature is designed with African creators and attendees in mind.",
  },
  {
    icon: Sparkles,
    title: "Curation over clutter",
    description:
      "We don't list everything. Every event on Eventra is hand-reviewed to ensure quality, authenticity, and genuine value for attendees.",
  },
  {
    icon: Heart,
    title: "Community-driven",
    description:
      "Events are nothing without people. We invest in tools that help communities form, grow, and reconnect — before, during, and after every event.",
  },
  {
    icon: Zap,
    title: "Built for speed",
    description:
      "Discover, save, and purchase tickets in seconds. No friction, no unnecessary steps — just a fast path from interest to attendance.",
  },
];

const stats = [
  { icon: Sparkles, value: "200+", label: "Curated events" },
  { icon: Globe2, value: "12", label: "Countries" },
  { icon: Users, value: "50k+", label: "Attendees" },
  { icon: TrendingUp, value: "98%", label: "Satisfaction" },
];

const team = [
  {
    name: "Amara Osei",
    role: "Co-founder & CEO",
    location: "Accra, Ghana",
    initials: "AO",
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Tunde Adewale",
    role: "Co-founder & CTO",
    location: "Lagos, Nigeria",
    initials: "TA",
    color: "bg-accent/10 text-accent",
  },
  {
    name: "Naledi Dlamini",
    role: "Head of Design",
    location: "Cape Town, South Africa",
    initials: "ND",
    color: "bg-secondary text-foreground",
  },
];

const About = () => {
  useEffect(() => {
    document.title = `About — ${APP_NAME}`;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
        <div className="container relative py-20 md:py-28 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/60 px-4 py-1.5 text-xs font-medium text-foreground shadow-xs backdrop-blur">
            Our story
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl animate-fade-in-up text-balance">
            Building the future
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              of African events.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {APP_NAME} was born from a simple frustration: finding great events across Africa was harder than it needed to be. We set out to change that — creating a platform where world-class events are discoverable, accessible, and unforgettable.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="container py-14">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 shadow-soft sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-2 bg-card/95 px-6 py-8 text-center backdrop-blur"
            >
              <s.icon className="h-5 w-5 text-primary" strokeWidth={2.25} />
              <div className="font-display text-2xl font-bold text-foreground">{s.value}</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="container py-6 md:py-10">
        <div className="relative mx-auto max-w-3xl rounded-3xl bg-foreground p-7 text-center shadow-elegant md:p-10 lg:p-14">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30 rounded-3xl pointer-events-none" />
          <h2 className="font-display text-3xl font-bold text-background md:text-4xl text-balance">
            Our mission
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-background/75 text-pretty">
            To make every great event in Africa discoverable, accessible, and unforgettable — empowering organizers with the tools they need and connecting attendees with moments that matter.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="container py-14 md:py-20">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            What drives us
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            Our values
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                <v.icon className="h-5 w-5 text-primary" strokeWidth={2} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{v.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="container pb-14">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            The people
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            Meet the team
          </h2>
        </div>
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center gap-4 rounded-3xl border border-border/60 bg-card p-8 text-center shadow-soft"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full text-lg font-bold ${member.color}`}
              >
                {member.initials}
              </div>
              <div>
                <p className="font-semibold text-foreground">{member.name}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{member.role}</p>
                <p className="mt-1.5 text-xs text-muted-foreground/70">{member.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-foreground p-8 text-center shadow-elegant md:p-12 lg:p-16">
          <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
          <div className="relative">
            <h3 className="font-display text-3xl font-bold text-background md:text-4xl text-balance">
              Join the {APP_NAME} community
            </h3>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-background/70">
              Thousands of attendees and organizers are already building memorable experiences. You're next.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Link to="/get-started" className="sm:w-auto">
                <Button size="lg" className="w-full rounded-full bg-background font-semibold text-foreground hover:bg-background/90 sm:w-auto">
                  Get started free
                </Button>
              </Link>
              <Link to="/browse" className="sm:w-auto">
                <Button size="lg" variant="ghost" className="w-full rounded-full font-semibold text-background hover:bg-background/10 hover:text-background sm:w-auto">
                  Browse events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
