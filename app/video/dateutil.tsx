import { format, formatDistanceToNow, parseISO } from "date-fns";

export const formatTimestamp = (timestamp: string): string => {
  const date = parseISO(timestamp);

  // If the date is less than 7 days ago, show "x days ago"
  const daysAgo = formatDistanceToNow(date, { addSuffix: true });

  // If more than 7 days ago, display the full date
  const fullDate = format(date, "d MMMM yyyy");

  // Decide which format to use
  const isRecent = new Date().getTime() - date.getTime() < 7 * 24 * 60 * 60 * 1000;

  return isRecent ? daysAgo : fullDate;
};