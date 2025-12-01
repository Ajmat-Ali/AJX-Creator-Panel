import { useRef, useState } from "react";

function Step2Profile({ formData, dispatch, err }) {
  const [preview, setPreview] = useState(null);
  const [fileError, setFileError] = useState(null);

  const {
    profile: { userName, phone, bio, avatar },
  } = formData;
  const ALLOWED = ["image/jpeg", "image/webp"];
  const MAX_BYTES = 1 * 1024 * 1024; // 2 MB

  // ------------------------------------------------------ Handle Change -----------------------
  const handleChange = (e) => {
    const { id, value, type, files } = e.target;
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
      const imgUrl = URL.createObjectURL(file);
      setPreview(imgUrl);
      setFileError({});
    }
    dispatch({
      type: "PROFILE",
      data: { ...formData.profile, [id]: value },
    });
  };
  return (
    <div>
      <h2 className="text-xl text-center font-semibold mb-8">
        Profile Details
      </h2>
      <form className="">
        <div className="flex justify-center gap-5 mb-4 max-sm:flex-col">
          <div className="flex flex-col gap-1 w-6/12 max-sm:w-full">
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              placeholder="User Name"
              id="userName"
              className="border p-2"
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
              className=" border p-2"
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
            className="border h-32"
            id="bio"
            value={bio}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="email">Choose Profile Pic</label>
          <div className="flex gap-10 mt-4 max-sm22:flex-col max-sm22:gap-0">
            <input
              type="file"
              id="imageUpload"
              name="image"
              accept="image/*"
              className="border cursor-pointer size-16 rounded-full max-sm22:size-10"
              // capture="user"
              // value={avatar}
              onChange={handleChange}
            />
            <img
              src={preview}
              alt="Image URL"
              className={`${
                preview ? "inline" : "hidden"
              } w-30 m-auto max-sm:w-20 max-sm22:w-5/12 `}
            />
          </div>
        </div>
        <span className="text-red-500">{fileError?.error}</span>
      </form>
    </div>
  );
}

export default Step2Profile;
