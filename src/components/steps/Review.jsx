function Review({ formData }) {
  const {
    step,
    account: { firstName, lastName, email, password, confirmPassword, privacy },
    profile: { userName, phone, bio, avatar },
    preference: { contentGoal, experience, weeklyPostingGoal },
  } = formData;

  return (
    <div>
      <h1 className="text-4xl">Review Your Details</h1>
      <div className="mb-8 mt-8">
        <h1 className="text-2xl">Account Details</h1>
        <ReviewItem label={"First Name"} value={firstName} />
        <ReviewItem label={"Last Name"} value={lastName} />
        <ReviewItem label={"Email"} value={email} />
        <ReviewItem label={"Password"} value={password} />
        <ReviewItem label={"Confirm Password"} value={confirmPassword} />
        <ReviewItem label={"T&C"} value={privacy} changedValue={true} />
      </div>
      <div className="mb-8">
        <h1 className="text-2xl">Profile Details</h1>
        <ReviewItem label={"User Name"} value={userName} />
        <ReviewItem label={"Phone"} value={phone} />
        {/* <ReviewItem label={"Bio"} value={bio} /> */}
        <div>
          <ReviewItem label={"Avatar"} />
          {avatar && <img src={avatar} alt="Avatar" />}
        </div>
      </div>
      <div className="mb-8">
        <h1 className="text-2xl">Preference Details</h1>
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
    <div className="flex  gap-5 p-1">
      <span className="font-medium w-5/12">{label} :</span>
      <span className=" border-green-600">
        {value ? (changedValue ? "Accepted" : value) : "null"}
      </span>
    </div>
  );
}
