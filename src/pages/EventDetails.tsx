import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MapPin, CheckCircle2, Ticket, Share2, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { getEventById } from "@/data/events";
import { formatLongDate, formatTime } from "@/lib/format";
import { toast } from "sonner";
import { APP_NAME } from "@/lib/constants";

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const event = id ? getEventById(id) : undefined;
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    if (event) {
      document.title = `${event.title} — ${APP_NAME}`;
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [event]);

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-32 text-center">
          <h1 className="font-display text-3xl font-bold">Event not found</h1>
          <p className="mt-2 text-muted-foreground">The event you're looking for doesn't exist.</p>
          <Button asChild className="mt-6 rounded-full">
            <Link to="/">Back to events</Link>
          </Button>
        </div>
      </div>
    );
  }

  const formattedDate = formatLongDate(event.date);
  const formattedTime = formatTime(event.date);

  const handleRegister = () => {
    setRegistered(true);
    toast.success("Registration successful!", {
      description: `You're going to ${event.title}. Check your email for confirmation.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container pt-8">
        <Button asChild variant="ghost" size="sm" className="rounded-full text-muted-foreground hover:text-foreground">
          <Link to="/">
            <ArrowLeft className="mr-1.5 h-4 w-4" /> Back to events
          </Link>
        </Button>
      </div>

      {/* Hero image */}
      <section className="container pt-6 animate-fade-in">
        <div className="relative overflow-hidden rounded-[2rem] shadow-elegant ring-1 ring-border/60">
          <img
            src={event.image}
            alt={event.title}
            width={1024}
            height={640}
            className="h-[44vh] w-full object-cover md:h-[60vh]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 md:p-12">
            <span className="inline-flex items-center rounded-full bg-background/95 px-3 py-1 text-xs font-semibold text-foreground shadow-soft backdrop-blur">
              {event.category}
            </span>
            <h1 className="mt-4 font-display text-3xl font-bold leading-[1.05] text-background text-balance sm:text-4xl md:text-5xl lg:text-6xl">
              {event.title}
            </h1>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-background/85">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {formattedDate}</span>
              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {event.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="container pb-28 pt-16 md:pb-24 md:pt-24 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-16">
          <article className="animate-fade-in-up">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="rounded-full">
                  <Heart className="mr-1.5 h-3.5 w-3.5" /> Save
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Share2 className="mr-1.5 h-3.5 w-3.5" /> Share
                </Button>
              </div>
            </div>

            <div className="mt-10">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                About
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-foreground">What to expect</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
                {event.description}
              </p>
            </div>

            <div className="mt-12">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Details
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-foreground">Event information</h2>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <DetailTile icon={<Calendar className="h-5 w-5" />} label="Date" value={formattedDate} />
                <DetailTile icon={<Clock className="h-5 w-5" />} label="Time" value={formattedTime} />
                <DetailTile icon={<MapPin className="h-5 w-5" />} label="Location" value={event.location} />
                <DetailTile icon={<Ticket className="h-5 w-5" />} label="Pricing" value={event.price} />
              </div>
            </div>
          </article>

          {/* Sticky register card */}
          <aside className="lg:sticky lg:top-24 lg:self-start animate-scale-in">
            <div className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-elegant">
              <div className="bg-gradient-mesh p-7">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Reserve your seat
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold text-foreground">{event.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Secure your spot — refundable up to 7 days before.
                </p>

                <Button
                  onClick={handleRegister}
                  disabled={registered}
                  size="lg"
                  className="mt-6 h-12 w-full rounded-2xl bg-gradient-hero text-base font-semibold text-primary-foreground shadow-glow transition-spring hover:scale-[1.02] disabled:opacity-100 disabled:hover:scale-100"
                >
                  {registered ? (
                    <>
                      <CheckCircle2 className="mr-2 h-5 w-5" /> You're registered
                    </>
                  ) : (
                    "Register now"
                  )}
                </Button>

                {registered && (
                  <div className="mt-4 rounded-2xl border border-accent/30 bg-accent/10 p-4 text-sm text-accent animate-fade-in">
                    <div className="font-semibold">🎉 Registration successful!</div>
                    <div className="mt-1 text-accent/80">A confirmation has been sent to your email.</div>
                  </div>
                )}
              </div>

              <div className="space-y-3.5 border-t border-border/60 p-7 text-sm">
                <Row icon={<Calendar className="h-4 w-4" />} label="Date" value={formattedDate} />
                <Row icon={<Clock className="h-4 w-4" />} label="Time" value={formattedTime} />
                <Row icon={<MapPin className="h-4 w-4" />} label="Venue" value={event.location} />
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              By registering you agree to the event terms.
            </p>
          </aside>
        </div>
      </section>
      {/* Mobile sticky register bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border/60 bg-background/95 p-4 backdrop-blur lg:hidden">
        <Button
          onClick={handleRegister}
          disabled={registered}
          size="lg"
          className="h-12 w-full rounded-2xl bg-gradient-hero text-base font-semibold text-primary-foreground shadow-glow transition-spring hover:scale-[1.02] disabled:opacity-100 disabled:hover:scale-100"
        >
          {registered ? (
            <>
              <CheckCircle2 className="mr-2 h-5 w-5" /> You're registered
            </>
          ) : (
            `Register — ${event.price}`
          )}
        </Button>
      </div>
    </div>
  );
};

const DetailTile = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-xs transition-base hover:-translate-y-0.5 hover:shadow-soft hover:border-border">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-base group-hover:bg-primary group-hover:text-primary-foreground">
      {icon}
    </div>
    <div className="min-w-0">
      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{label}</div>
      <div className="mt-1 font-medium text-foreground">{value}</div>
    </div>
  </div>
);

const Row = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-start justify-between gap-4">
    <div className="flex items-center gap-2 text-muted-foreground">
      {icon}
      <span>{label}</span>
    </div>
    <span className="text-right font-medium text-foreground">{value}</span>
  </div>
);

export default EventDetails;
