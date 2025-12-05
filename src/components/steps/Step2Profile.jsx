import { useState } from "react";
import { Link } from "react-router";

function Step2Profile({ formData, dispatch, err }) {
  // const [avatar, setavatar] = useState(null);
  const [fileError, setFileError] = useState(null);

  const {
    profile: { userName, phone, bio, avatar },
  } = formData;
  const ALLOWED = ["image/jpeg", "image/png", "image/webp"];
  const MAX_BYTES = 1 * 1024 * 1024; // 2 MB

  // ------------------------------------------------------ Handle Change ----------------------------------
  const handleChange = (e) => {
    const { id, value, type, files } = e.target;

    let newVal = type === "file" ? avatar : value;

    if (type === "file") {
      const file = files[0];

      if (!file) return;

      if (!ALLOWED.includes(file.type)) {
        setFileError({ error: "Please upload a JPEG, PNG, or WebP image." });
        return;
      }

      if (file.size > MAX_BYTES) {
        setFileError({
          error: "File too large. Please choose an image under 1 MB.",
        });
        return;
      }

      const reader = new FileReader();

      reader.onload = (e) => {
        const base64Img = e.target.result;

        dispatch({
          type: "PROFILE",
          data: { ...formData.profile, [id]: base64Img },
        });
      };
      reader.readAsDataURL(file);
      setFileError({});

      return;
    }

    dispatch({
      type: "PROFILE",
      data: { ...formData.profile, [id]: newVal },
    });
  };
  return (
    <div className="border-2 border-green-600 w-4/12 m-auto py-0 px-6 | max-xl:w-6/12 | max-md:w-8/12 | max-sm:w-7/12 max-sm30:w-10/12 max-sm22:w-12/12  max-sm22:px-2">
      <h2 className="text-xl text-center font-semibold mb-8">
        Profile Details
      </h2>
      <div className="">
        <div className="flex justify-center gap-5 mb-4 max-sm:flex-col">
          <div className="flex flex-col gap-1 w-6/12 max-sm:w-full">
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              placeholder="User Name"
              id="userName"
              className="w-full border border-gray-400 rounded-md px-4 py-2 pr-10"
              value={userName}
              onChange={handleChange}
            />
            <span className="text-red-500 text-sm">
              {err.userName && err.userName}
            </span>
          </div>
          <div className="flex flex-col gap-1 w-6/12 max-sm:w-full">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              placeholder="Phone Number"
              id="phone"
              className="w-full border border-gray-400 rounded-md px-4 py-2 pr-10"
              value={phone}
              onChange={handleChange}
            />
            <span className="text-red-500 text-sm">
              {err.phone && err.phone}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="password">Bio / About You</label>
          <textarea
            className="w-full border border-gray-400 rounded-md px-4 py-2 pr-10 h-32"
            id="bio"
            value={bio}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="avatar">Choose Profile Pic</label>
          <div className="flex gap-10  mb-4 max-sm22:flex-col max-sm:gap-0">
            <input
              type="file"
              id="avatar"
              name="image"
              accept="image/*"
              className="w-full border border-gray-400 rounded-md px-4 py-2 pr-10 cursor-pointer"
              onChange={handleChange}
            />
          </div>
          {avatar && (
            <img
              src={avatar}
              alt="Image URL"
              className={`${
                avatar ? "inline" : "hidden"
              } w-30 m-auto max-sm:w-20 max-sm22:w-5/12 border border-gray-400 rounded-md px-4 py-2`}
            />
          )}
        </div>
        <span className="text-red-500">{fileError?.error}</span>
        <div className="text-center mt-4 mb-2">
          Already have account!{" "}
          <span className="text-blue-500 underline cursor-pointer">
            <Link to="/login">Login here</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Step2Profile;
