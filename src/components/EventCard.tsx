import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import type { EventItem } from "@/data/events";
import { formatShortDate, getMonthAbbr, getDayOfMonth } from "@/lib/format";

interface EventCardProps {
  event: EventItem;
  index?: number;
}

const EventCard = ({ event, index = 0 }: EventCardProps) => {
  return (
    <Link
      to={`/events/${event.id}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-card shadow-soft ring-1 ring-border/60 transition-smooth hover:-translate-y-2 hover:shadow-elegant hover:ring-primary/20 animate-fade-in-up"
      style={{ animationDelay: `${index * 60}ms` }}
      aria-label={`View details for ${event.title}`}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          width={1024}
          height={640}
          className="h-full w-full object-cover transition-smooth group-hover:scale-[1.06]"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />

        {/* Category badge */}
        <div className="absolute left-3 top-3">
          <span className="inline-flex items-center rounded-full bg-background/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground shadow-soft backdrop-blur">
            {event.category}
          </span>
        </div>

        {/* Date badge */}
        <div className="absolute right-3 top-3 flex h-[52px] w-[52px] flex-col items-center justify-center rounded-2xl bg-background/95 shadow-soft backdrop-blur">
          <div className="text-[9px] font-bold uppercase tracking-widest text-primary">
            {getMonthAbbr(event.date)}
          </div>
          <div className="font-display text-[1.25rem] font-bold leading-none text-foreground">
            {getDayOfMonth(event.date)}
          </div>
        </div>

        {/* Arrow CTA — revealed on hover */}
        <div className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-primary opacity-0 shadow-glow transition-smooth group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="line-clamp-2 font-display text-[1.05rem] font-semibold leading-snug text-foreground transition-base group-hover:text-primary">
          {event.title}
        </h3>

        <div className="mt-auto space-y-1.5 border-t border-border/60 pt-3 text-[13px] text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 shrink-0 text-primary/70" strokeWidth={2.25} />
            <span>{formatShortDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-primary/70" strokeWidth={2.25} />
            <span className="line-clamp-1">{event.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="text-sm font-bold text-foreground">{event.price}</span>
          <span className="text-xs font-semibold text-primary opacity-0 transition-base group-hover:opacity-100">
            View details →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
