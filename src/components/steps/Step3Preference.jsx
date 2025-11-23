function Step3Preference() {
  return (
    <div className="space-y-4 mt-4 flex flex-col items-center">
      <h2 className="text-xl font-semibold">Preference Details</h2>
      <form className="w-4/12 border-2 border-black p-4">
        <div className="flex justify-center gap-5 mb-4">
          <div className="flex flex-col gap-1 w-6/12">
            <label htmlFor="userName">Content Goal</label>
            <input
              type="text"
              placeholder="Your Content Goal"
              id="userName"
              className="border p-2"
            />
          </div>
          <div className="flex flex-col gap-1 w-6/12">
            <label htmlFor="work-style">Work Style</label>
            <select className="border p-2" id="work-style">
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="posting-goal">
            Weekly Posting Goal (Post per Week)
          </label>
          <select
            name="posting-goal"
            id="posting-goal"
            className="border-2 p-2 w-6/12"
          >
            <option value="1">1</option>
            <option value="7">1-7</option>
            <option value="more">more</option>
          </select>
        </div>
        <div className="flex justify-center gap-4 w-10/12  mt-4 m-auto">
          <button className="border">Back</button>
          <button className="border">Next</button>
        </div>
      </form>
    </div>
  );
}

export default Step3Preference;
