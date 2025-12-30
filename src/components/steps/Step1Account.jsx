import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router";

export default function Step1Account({ dispatch, formData, err }) {
  const [show, setShow] = useState({
    password: false,
    confirmPassword: false,
  });
  const {
    account: { firstName, lastName, email, password, confirmPassword, privacy },
  } = formData;
  const handleChange = (e) => {
    const { id, value, checked, type } = e.target;
    const x = type === "checkbox" ? checked : value;
    dispatch({
      type: "ACCOUNT",
      data: { ...formData.account, [id]: x },
    });
  };

  return (
    <div
      className="w-4/12 max-xl:w-6/12 max-md:w-8/12 max-sm:w-7/12 max-sm30:w-9/12 max-sm22:w-12/12 
                bg-white shadow-lg rounded-xl m-auto px-8 py-10 max-sm22:px-4"
    >
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-8">
        Account Details
      </h2>

      <div>
        <div className="flex gap-4 mb-5 max-sm:flex-col">
          <div className="flex flex-col gap-1 w-6/12 max-sm:w-full">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              placeholder="First Name"
              id="firstName"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 
                     focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              name="firstName"
              value={firstName}
              onChange={handleChange}
            />
            <span className="text-red-500 text-sm min-h-[18px]">
              {err.firstName && err.firstName}
            </span>
          </div>

          <div className="flex flex-col gap-1 w-6/12 max-sm:w-full">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              id="lastName"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 
                     focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              name="lastName"
              value={lastName}
              onChange={handleChange}
            />
            <span className="text-red-500 text-sm min-h-[18px]">
              {err.lastName && err.lastName}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1 mb-5">
          <label className="text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 
                   focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            value={email}
            onChange={handleChange}
          />
          <span className="text-red-500 text-sm min-h-[18px]">
            {err.email && err.email}
          </span>
        </div>

        <div className="flex flex-col gap-1 mb-5">
          <label
            className="text-sm font-medium text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={show.password ? "text" : "password"}
              placeholder="Password"
              id="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 
                     focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={password}
              onChange={handleChange}
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() =>
                setShow((pre) => ({ ...pre, password: !pre.password }))
              }
            >
              {show.password ? <BsEyeSlash /> : <BsEye />}
            </button>
          </div>
          <span className="text-red-500 text-sm min-h-[18px]">
            {err.password && err.password}
          </span>
        </div>

        <div className="flex flex-col gap-1 mb-5">
          <label
            className="text-sm font-medium text-gray-700"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={show.confirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirm Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 
                     focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={confirmPassword}
              onChange={handleChange}
            />
            <button
              onClick={() =>
                setShow((pre) => ({
                  ...pre,
                  confirmPassword: !pre.confirmPassword,
                }))
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {show.confirmPassword ? <BsEyeSlash /> : <BsEye />}
            </button>
          </div>
          <span className="text-red-500 text-sm min-h-[18px]">
            {err.confirmPassword && err.confirmPassword}
          </span>
        </div>

        <div className="flex flex-col mt-6 mb-4">
          <label
            htmlFor="privacy"
            className="text-sm font-medium text-gray-700 mb-2"
          >
            Accept Terms & Privacy Policy
          </label>
          <input
            type="checkbox"
            id="privacy"
            className="h-4 w-4 cursor-pointer"
            checked={privacy}
            onChange={handleChange}
          />
          <span className="text-red-500 text-sm mt-2 min-h-[18px]">
            {err.privacy && err.privacy}
          </span>
        </div>

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
