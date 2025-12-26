function validationSchedulePost(schedule) {
  const { platform, postType, postTitle, date, time } = schedule;
  return () => {
    const err = {};
    if (!platform) {
      err.platform = "Please select Platform";
    }
    if (!postType) {
      err.postType = "Please select Post Type";
    }
    if (!postTitle || postTitle.length < 5) {
      err.postTitle = "Content is required with min 5 character";
    }
    if (!date) {
      err.date = "Date is required";
    }
    if (!time) {
      err.time = "Time is required";
    }

    return err.platform || err.postType || err.postTitle || err.date || err.time
      ? { status: true, err: err }
      : { status: false, err: err };
  };
}

function validateDateAndTime(date, time) {
  if (!date || !time) return true;
  const selected = new Date(`${date}T${time}`);
  const now = new Date();
  return selected >= now;
}

export { validationSchedulePost, validateDateAndTime };

// -------------------------------------------------------
