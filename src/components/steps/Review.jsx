function Review({ formData }) {
  const {
    step,
    account: { firstName, lastName, email, password, confirmPassword, privacy },
    profile: { userName, phone, bio, avatar },
    preference: { contentGoal, experience, weeklyPostingGoal },
  } = formData;

  return (
    <div
      className="w-4/12 max-xl:w-6/12 max-md:w-8/12 max-sm:w-9/12 max-sm30:w-12/12 
                bg-white shadow-lg rounded-xl m-auto px-8 py-10 max-sm22:px-4"
    >
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10 max-sm:text-2xl">
        Review Details
      </h1>

      {/* Account Details */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-blue-600 mb-4">
          Account Details
        </h2>

        <ReviewItem label="First Name" value={firstName} />
        <ReviewItem label="Last Name" value={lastName} />
        <ReviewItem label="Email" value={email} />
        <ReviewItem label="Password" value={password} />
        <ReviewItem label="Confirm Password" value={confirmPassword} />
        <ReviewItem label="T&C" value={privacy} changedValue={true} />
      </div>

      {/* Profile Details */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-blue-600 mb-4">
          Profile Details
        </h2>

        <ReviewItem label="User Name" value={userName} />
        <ReviewItem label="Phone" value={phone} />

        <div className="mt-4">
          <ReviewItem label="Avatar" />
          {avatar && (
            <img
              src={avatar}
              alt="Avatar"
              className="mt-3 w-24 h-24 object-cover rounded-full 
                     border border-gray-300 shadow-sm"
            />
          )}
        </div>
      </div>

      {/* Preference Details */}
      <div>
        <h2 className="text-lg font-semibold text-blue-600 mb-4">
          Preference Details
        </h2>

        <ReviewItem label="Content Goal" value={contentGoal} />
        <ReviewItem label="Working Style" value={experience} />
        <ReviewItem label="Posting Goal" value={weeklyPostingGoal} />
      </div>
    </div>
  );
}

export default Review;

function ReviewItem({ label, value, changedValue = false }) {
  return (
    <div className="flex items-start gap-4 py-2 border-b border-gray-100 last:border-none max-sm:flex-col">
      <span className="text-sm font-medium text-gray-600 w-5/12 max-sm:w-full">
        {label}
      </span>

      <span className="text-sm text-gray-800 w-7/12 max-sm:w-full">
        {value && (changedValue ? "Accepted" : value)}
      </span>
    </div>
  );
}
