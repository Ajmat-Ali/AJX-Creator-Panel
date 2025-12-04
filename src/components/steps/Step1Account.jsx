import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

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
    <div className="border-2 border-red-500 w-4/12 m-auto py-0 px-6 | max-xl:w-6/12 | max-md:w-8/12 | max-sm:w-7/12 max-sm30:w-9/12 max-sm22:w-12/12  max-sm22:px-2">
      <h2 className="text-xl text-center font-semibold mb-8">
        Account Details
      </h2>
      <div>
        <div className="flex justify-center gap-1 mb-4 | max-sm:flex-col">
          <div className="flex flex-col gap-1 w-6/12 | max-sm:w-full">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              id="firstName"
              className="w-full border border-gray-400 rounded-md px-4 py-2 pr-10"
              name="firstName"
              value={firstName}
              onChange={handleChange}
            />
            <span className="text-red-500 text-sm">
              {err.firstName && err.firstName}
            </span>
          </div>
          <div className="flex flex-col gap-1 w-6/12 |  max-sm:w-full">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              id="lastName"
              className="w-full border border-gray-400 rounded-md px-4 py-2 pr-10"
              name="lastName"
              value={lastName}
              onChange={handleChange}
            />
            <span className="text-red-500 text-sm">
              {err.lastName && err.lastName}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full border border-gray-400 rounded-md px-4 py-2 pr-10"
            value={email}
            onChange={handleChange}
          />
          <span className="text-red-500 text-sm">{err.email && err.email}</span>
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="password">Password</label>
          <div className="relative">
            <input
              type={show.password ? "text" : "password"}
              placeholder="Password"
              id="password"
              className="w-full border border-gray-400 rounded-md px-4 py-2 pr-10"
              value={password}
              onChange={handleChange}
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer"
              onClick={() => {
                setShow((pre) => ({ ...pre, password: !pre.password }));
              }}
            >
              {" "}
              {show.password ? <BsEyeSlash /> : <BsEye />}
            </button>
          </div>
          <span className="text-red-500 text-sm">
            {err.password && err.password}
          </span>
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="relative">
            <input
              type={show.confirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="confirm Password"
              className="w-full border border-gray-400 rounded-md px-4 py-2 pr-10"
              value={confirmPassword}
              onChange={handleChange}
            />
            <button
              onClick={() => {
                setShow((pre) => ({
                  ...pre,
                  confirmPassword: !pre.confirmPassword,
                }));
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer"
            >
              {show.confirmPassword ? <BsEyeSlash /> : <BsEye />}
            </button>
          </div>
          <span className="text-red-500 text-sm">
            {err.confirmPassword && err.confirmPassword}
          </span>
        </div>
        <div className="flex flex-col mt-8 mb-4">
          <label htmlFor="privacy" className="mb-3">
            Accept T&C for privacy
          </label>
          <input
            type="checkbox"
            id="privacy"
            className="p-2 h-4 w-18 cursor-pointer"
            checked={privacy}
            onChange={handleChange}
          />
          <span className="text-red-500 text-sm mt-2">
            {err.privacy && err.privacy}
          </span>
        </div>
      </div>
    </div>
  );
}
