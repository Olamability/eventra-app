/**
 * Date and time formatting helpers used across event UI.
 */

export const formatShortDate = (iso: string): string =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export const formatLongDate = (iso: string): string =>
  new Date(iso).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

export const formatTime = (iso: string): string =>
  new Date(iso).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

export const getMonthAbbr = (iso: string): string =>
  new Date(iso).toLocaleDateString("en-US", { month: "short" });

export const getDayOfMonth = (iso: string): number => new Date(iso).getDate();
