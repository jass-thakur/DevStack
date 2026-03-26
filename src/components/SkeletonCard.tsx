import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="glass-card p-6 flex flex-col gap-4 relative overflow-hidden animate-pulse">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-xl bg-white/5" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-24 bg-white/5" />
            <Skeleton className="h-3 w-16 bg-white/5" />
          </div>
        </div>
        <Skeleton className="h-5 w-12 rounded bg-white/5" />
      </div>

      <div className="space-y-2">
        <Skeleton className="h-3 w-full bg-white/5" />
        <Skeleton className="h-3 w-[80%] bg-white/5" />
      </div>

      <div className="flex gap-2">
        <Skeleton className="h-4 w-12 rounded bg-white/5" />
        <Skeleton className="h-4 w-12 rounded bg-white/5" />
        <Skeleton className="h-4 w-12 rounded bg-white/5" />
      </div>

      <div className="flex items-center gap-2 mt-auto pt-4">
        <Skeleton className="h-9 flex-1 rounded-lg bg-white/5" />
        <Skeleton className="h-9 flex-1 rounded-lg bg-white/5" />
      </div>
    </div>
  );
}
