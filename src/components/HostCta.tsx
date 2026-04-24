import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart2, Megaphone, Shield } from "lucide-react";

const features = [
  { icon: Megaphone, label: "Instant reach", desc: "Get in front of thousands of curated attendees from day one." },
  { icon: BarChart2, label: "Real-time analytics", desc: "Track registrations, views, and revenue in a single dashboard." },
  { icon: Shield, label: "Hassle-free ticketing", desc: "Secure payments, instant confirmations, and zero commission on Free plan." },
];

const HostCta = () => (
  <section className="container pb-24">
    <div className="relative overflow-hidden rounded-[2rem] bg-foreground shadow-elegant">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative grid gap-0 lg:grid-cols-2">
        {/* Left: Copy */}
        <div className="p-8 md:p-12 lg:p-14">
          <span className="inline-flex items-center rounded-full border border-background/20 bg-background/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-background/80">
            For organizers
          </span>
          <h3 className="mt-5 font-display text-3xl font-bold leading-snug text-background md:text-4xl text-balance">
            Hosting an event?<br />Reach the right audience.
          </h3>
          <p className="mt-4 max-w-md text-base leading-relaxed text-background/70">
            Publish in minutes, reach thousands of curated attendees, and manage everything from a single dashboard.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="rounded-full bg-background font-semibold text-foreground hover:bg-background/90" asChild>
              <Link to="/get-started">
                List an event <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="ghost" className="rounded-full font-semibold text-background hover:bg-background/10 hover:text-background" asChild>
              <Link to="/pricing">See pricing</Link>
            </Button>
          </div>
        </div>

        {/* Right: Feature tiles */}
        <div className="flex flex-col justify-center gap-4 border-t border-background/10 p-8 md:p-12 lg:border-l lg:border-t-0 lg:p-14">
          {features.map((f) => (
            <div key={f.label} className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-background/10">
                <f.icon className="h-5 w-5 text-background/80" strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-semibold text-background">{f.label}</p>
                <p className="mt-0.5 text-sm text-background/60">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HostCta;
