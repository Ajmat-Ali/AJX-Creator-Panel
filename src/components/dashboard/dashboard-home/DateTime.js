const startOfDay = (date) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

const diffInDays = (targetDate) => {
  const today = startOfDay(new Date());
  const target = startOfDay(targetDate);

  const diffTime = target - today;
  return Math.round(diffTime / (1000 * 60 * 60 * 24));
};

export { startOfDay, diffInDays };
