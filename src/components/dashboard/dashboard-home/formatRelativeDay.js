import { diffInDays } from "./DateTime";

function formatRelativeDay(date) {
  const diff = diffInDays(date);

  if (diff === 0) return "today";
  if (diff === -1) return "yesterday";
  if (diff === 1) return "tomorrow";

  if (diff < 0) return `${Math.abs(diff)} days ago`;
  return `in ${diff} days`;
}
export default formatRelativeDay;
