function Step2Profile({ formData, dispatch, err }) {
  const {
    profile: { userName, phone, bio, avatar },
  } = formData;
  const handleChange = (e) => {
    const { id, value } = e.target;
    dispatch({
      type: "PROFILE",
      data: { ...formData.profile, [id]: value },
    });
  };
  return (
    <div className="mt-4">
      <h2 className="text-xl text-center font-semibold">Profile Details</h2>
      <form className="p-4">
        <div className="flex justify-center gap-5 mb-4">
          <div className="flex flex-col gap-1 w-6/12">
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              placeholder="User Name"
              id="userName"
              className="border p-2"
              value={userName}
              onChange={handleChange}
            />
            <span className="text-red-500">{err.userName && err.userName}</span>
          </div>
          <div className="flex flex-col gap-1 w-6/12">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              placeholder="Phone Number"
              id="phone"
              className=" border p-2"
              value={phone}
              onChange={handleChange}
            />
            <span className="text-red-500">{err.phone && err.phone}</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="password">Bio / About You</label>
          <textarea
            className="border h-32"
            id="bio"
            value={bio}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="email">Profile Pic</label>
          <input
            type="file"
            id="imageUpload"
            name="image"
            accept="image/*"
            className="border rounded-4xl w-3/12"
            // value={avatar}
            // onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default Step2Profile;
