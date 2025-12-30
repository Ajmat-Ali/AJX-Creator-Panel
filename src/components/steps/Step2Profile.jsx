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
    <div
      className="w-4/12 max-xl:w-6/12 max-md:w-8/12 max-sm:w-7/12 max-sm30:w-10/12 max-sm22:w-12/12 
                bg-white shadow-lg rounded-xl m-auto px-8 py-10 max-sm22:px-4"
    >
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-8">
        Profile Details
      </h2>

      <div>
        <div className="flex gap-4 mb-5 max-sm:flex-col">
          <div className="flex flex-col gap-1 w-6/12 max-sm:w-full">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="userName"
            >
              User Name
            </label>
            <input
              type="text"
              placeholder="User Name"
              id="userName"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 
                     focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={userName}
              onChange={handleChange}
            />
            <span className="text-red-500 text-sm min-h-[18px]">
              {err.userName && err.userName}
            </span>
          </div>

          <div className="flex flex-col gap-1 w-6/12 max-sm:w-full">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="number"
              placeholder="Phone Number"
              id="phone"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 
                     focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={phone}
              onChange={handleChange}
            />
            <span className="text-red-500 text-sm min-h-[18px]">
              {err.phone && err.phone}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1 mb-5">
          <label className="text-sm font-medium text-gray-700" htmlFor="bio">
            Bio / About You
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32 
                   resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            id="bio"
            value={bio}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1 mb-5">
          <label className="text-sm font-medium text-gray-700" htmlFor="avatar">
            Choose Profile Picture
          </label>

          <input
            type="file"
            id="avatar"
            name="image"
            accept="image/*"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 
                   cursor-pointer file:mr-4 file:py-2 file:px-4 
                   file:rounded-md file:border-0 
                   file:bg-blue-50 file:text-blue-600 
                   hover:file:bg-blue-100 transition"
            onChange={handleChange}
          />

          {avatar && (
            <img
              src={avatar}
              alt="Profile Preview"
              className="mt-6 w-28 h-28 object-cover rounded-full mx-auto 
                     border border-gray-300 shadow-sm"
            />
          )}
        </div>

        <span className="text-red-500 text-sm block min-h-[18px] text-center">
          {fileError?.error}
        </span>

        <div className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <span className="text-blue-600 font-semibold hover:underline cursor-pointer">
            <Link to="/login">Login here</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Step2Profile;
