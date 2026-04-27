import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Zap, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import { APP_NAME } from "@/lib/constants";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for discovering events and getting started.",
    icon: null,
    cta: "Get started free",
    ctaHref: "/get-started",
    features: [
      "Browse all public events",
      "Save up to 5 events",
      "Basic search & filters",
      "Email event reminders",
      "Mobile-friendly access",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    description: "For active attendees and emerging event organizers.",
    icon: Zap,
    cta: "Start Pro trial",
    ctaHref: "/get-started",
    features: [
      "Everything in Free",
      "Unlimited saved events",
      "Early-access tickets",
      "Advanced search & location filters",
      "Host up to 3 events/month",
      "Attendee analytics dashboard",
      "Priority email support",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$39",
    period: "per month",
    description: "For professional organizers and agencies at scale.",
    icon: Crown,
    cta: "Contact sales",
    ctaHref: "/get-started",
    features: [
      "Everything in Pro",
      "Unlimited event hosting",
      "Custom branding & white-label",
      "Dedicated account manager",
      "Revenue share & ticketing fees waived",
      "API access & integrations",
      "SLA-backed uptime guarantee",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  useEffect(() => {
    document.title = `Pricing — ${APP_NAME}`;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
        <div className="container relative py-16 md:py-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/60 px-4 py-1.5 text-xs font-medium text-foreground shadow-xs backdrop-blur">
            Simple, transparent pricing
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl animate-fade-in-up text-balance">
            Plans for every stage
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Start free and grow into the tools you need. No hidden fees, cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="container py-16 md:py-20">
        <div className="grid gap-8 pt-4 md:grid-cols-3 md:items-start md:pt-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-8 transition-smooth hover:-translate-y-1 ${
                plan.highlighted
                  ? "border-primary/40 bg-foreground text-background shadow-glow ring-2 ring-primary/30"
                  : "border-border/60 bg-card shadow-soft hover:shadow-elevated"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-glow">
                    Most popular
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <div className="flex items-center gap-2.5 mb-3">
                  {plan.icon && (
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-xl ${
                        plan.highlighted ? "bg-primary/20" : "bg-primary/10"
                      }`}
                    >
                      <plan.icon
                        className={`h-4 w-4 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`}
                        strokeWidth={2.5}
                      />
                    </span>
                  )}
                  <h3
                    className={`font-display text-xl font-bold ${
                      plan.highlighted ? "text-background" : "text-foreground"
                    }`}
                  >
                    {plan.name}
                  </h3>
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    plan.highlighted ? "text-background/70" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-end gap-1.5">
                  <span
                    className={`font-display text-4xl font-bold leading-none ${
                      plan.highlighted ? "text-background" : "text-foreground"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`mb-1 text-sm ${plan.highlighted ? "text-background/60" : "text-muted-foreground"}`}
                  >
                    / {plan.period}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <Link to={plan.ctaHref}>
                <Button
                  size="lg"
                  className={`w-full rounded-full font-semibold transition-base active:scale-95 ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  {plan.cta}
                </Button>
              </Link>

              {/* Features */}
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.highlighted ? "text-primary" : "text-accent"
                      }`}
                      strokeWidth={2.5}
                    />
                    <span
                      className={`text-sm leading-snug ${
                        plan.highlighted ? "text-background/85" : "text-muted-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ note */}
        <p className="mt-14 text-center text-sm text-muted-foreground">
          All plans include a 14-day free trial. No credit card required.{" "}
          <Link to="/about" className="font-medium text-primary hover:underline transition-base">
            Learn more about {APP_NAME} →
          </Link>
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
