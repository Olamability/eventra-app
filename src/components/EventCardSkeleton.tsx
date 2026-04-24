import { Skeleton } from "@/components/ui/skeleton";

const EventCardSkeleton = () => (
  <div className="overflow-hidden rounded-3xl bg-card ring-1 ring-border/60 shadow-soft">
    <Skeleton className="aspect-[16/10] w-full rounded-none" />
    <div className="space-y-3 p-5">
      <Skeleton className="h-5 w-4/5" />
      <div className="space-y-1.5 border-t border-border/60 pt-3">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      <div className="flex justify-between pt-1">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  </div>
);

export default EventCardSkeleton;
