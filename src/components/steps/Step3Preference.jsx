function Step3Preference({ formData, dispatch }) {
  const {
    preference: { contentGoal, experience, weeklyPostingGoal },
  } = formData;

  const handleChange = (e) => {
    const { id, value } = e.target;
    dispatch({
      type: "PREFERENCE",
      data: { ...formData.preference, [id]: value },
    });
  };
  return (
    <div className="mt-4">
      <h2 className="text-xl text-center font-semibold">Preference Details</h2>
      <form className="p-4">
        <div className="flex justify-center gap-5 mb-4">
          <div className="flex flex-col gap-1 w-6/12">
            <label htmlFor="contentGoal">Content Goal</label>
            <input
              type="text"
              placeholder="Your Content Goal"
              id="contentGoal"
              className="border p-2"
              value={contentGoal}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 w-6/12">
            <label htmlFor="experience">Work Style</label>
            <select
              className="border p-2"
              id="experience"
              value={experience}
              onChange={handleChange}
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="weeklyPostingGoal">
            Weekly Posting Goal (Post per Week)
          </label>
          <select
            id="weeklyPostingGoal"
            className="border-2 p-2 w-6/12"
            value={weeklyPostingGoal}
            onChange={handleChange}
          >
            <option value="1">1</option>
            <option value="7">1-7</option>
            <option value="more">more</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Step3Preference;
