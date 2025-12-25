function validationSchedulePost() {
  return () => {};
}

function validateDateAndTime(date, time) {
  if (!date || !time) return true;
  const selected = new Date(`${date}T${time}`);
  const now = new Date();
  return selected >= now;
}

export { validationSchedulePost, validateDateAndTime };
