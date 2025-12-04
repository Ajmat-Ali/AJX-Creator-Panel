function Review({ formData }) {
  const {
    step,
    account: { firstName, lastName, email, password, confirmPassword, privacy },
    profile: { userName, phone, bio, avatar },
    preference: { contentGoal, experience, weeklyPostingGoal },
  } = formData;

  return (
    <div className="border-2 border-red-500 w-4/12 m-auto py-0 px-6 | max-xl:w-6/12 | max-md:w-8/12 | max-sm:w-9/12 max-sm30:w-12/12 max-sm22:px-2">
      <h1 className="text-4xl text-blue-500 text-center font-bold | max-sm:text-3xl">
        Review Details
      </h1>
      <div className="mb-8 mt-8">
        <h1 className="text-2xl text-teal-600 font-bold">Account Details</h1>
        <ReviewItem label={"First Name"} value={firstName} />
        <ReviewItem label={"Last Name"} value={lastName} />
        <ReviewItem label={"Email"} value={email} />
        <ReviewItem label={"Password"} value={password} />
        <ReviewItem label={"Confirm Password"} value={confirmPassword} />
        <ReviewItem label={"T&C"} value={privacy} changedValue={true} />
      </div>
      <div className="mb-8">
        <h1 className="text-2xl text-teal-600 font-bold">Profile Details</h1>
        <ReviewItem label={"User Name"} value={userName} />
        <ReviewItem label={"Phone"} value={phone} />
        {/* <ReviewItem label={"Bio"} value={bio} /> */}
        <div className="w-30">
          <ReviewItem label={"Avatar"} />
          {avatar && <img src={avatar} alt="Avatar" />}
        </div>
      </div>
      <div className="mb-8">
        <h1 className="text-2xl text-teal-600 font-bold">Preference Details</h1>
        <ReviewItem label={"Content Goal"} value={contentGoal} />
        <ReviewItem label={"Working Style"} value={experience} />
        <ReviewItem label={"Posting Goal"} value={weeklyPostingGoal} />
      </div>
    </div>
  );
}

export default Review;

function ReviewItem({ label, value, changedValue = false }) {
  return (
    <div className="flex gap-5 p-1 max-sm30:w-12/12 ">
      <span className="font-medium w-5/12 max-sm:w-6/12 max-sm30:w-12/12">{label} :</span>
      <span className=" border-green-600">
        {value && (changedValue ? "Accepted" : value)}
      </span>
    </div>
  );
}
