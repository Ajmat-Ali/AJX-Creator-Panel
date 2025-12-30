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
    <div
      className="w-4/12 max-xl:w-6/12 max-md:w-8/12 max-sm:w-7/12 max-sm30:w-10/12 max-sm22:w-12/12 
                bg-white shadow-lg rounded-xl m-auto px-8 py-10 max-sm22:px-4"
    >
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-8">
        Preference Details
      </h2>

      <form>
        <div className="flex gap-4 mb-5 max-md:flex-col">
          <div className="flex flex-col gap-1 w-6/12 max-md:w-full">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="contentGoal"
            >
              Content Goal
            </label>
            <input
              type="text"
              placeholder="Your Content Goal"
              id="contentGoal"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 
                     focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={contentGoal}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-1 w-6/12 max-md:w-full">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="experience"
            >
              Work Style
            </label>
            <select
              id="experience"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 
                     focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={experience}
              onChange={handleChange}
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1 mb-2">
          <label
            htmlFor="weeklyPostingGoal"
            className="text-sm font-medium text-gray-700"
          >
            Weekly Posting Goal (Posts per Week)
          </label>
          <select
            id="weeklyPostingGoal"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 
                   focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            value={weeklyPostingGoal}
            onChange={handleChange}
          >
            <option value="1">1</option>
            <option value="7">1–7</option>
            <option value="7+">7+</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Step3Preference;
