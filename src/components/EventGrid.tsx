import EventCard from "@/components/EventCard";
import EventCardSkeleton from "@/components/EventCardSkeleton";
import type { EventItem } from "@/data/events";

interface EventGridProps {
  events: EventItem[];
  loading?: boolean;
  skeletonCount?: number;
}

const EventGrid = ({ events, loading = false, skeletonCount = 8 }: EventGridProps) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <EventCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-border bg-muted/30 py-24 text-center">
        <p className="text-lg font-semibold text-foreground">No events match your search</p>
        <p className="mt-1.5 text-sm text-muted-foreground">Try a different keyword or category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {events.map((event, i) => (
        <EventCard key={event.id} event={event} index={i} />
      ))}
    </div>
  );
};

export default EventGrid;
