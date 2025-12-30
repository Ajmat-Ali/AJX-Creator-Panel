import { useState } from "react";
import { Link } from "react-router";
import { FaPenToSquare } from "react-icons/fa6";
import { IoIosCheckboxOutline } from "react-icons/io";
import { HiOutlineMenu, HiX } from "react-icons/hi";
// import { Fragment, useState } from "react";
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="w-11/12 mx-auto py-4">
        {/* ------------------------ Desktop & Above ------------------------ */}
        <nav className="flex items-center justify-between max-md:hidden">
          <h1 className="text-2xl font-extrabold text-gray-800">
            AjX <span className="text-blue-600">Panel</span>
          </h1>

          <div className="flex items-center gap-8 text-gray-600 font-medium">
            <Link className="hover:text-blue-600 transition" to="/">
              Home
            </Link>
            <Link className="hover:text-blue-600 transition" to="/">
              Our Services
            </Link>
            <Link className="hover:text-blue-600 transition" to="/dashboard">
              Dashboard
            </Link>

            <Link
              to="/signin"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg 
                     hover:bg-blue-700 transition shadow-sm"
            >
              Sign Up
            </Link>
          </div>
        </nav>

        {/* ------------------------ Mobile ------------------------ */}
        <nav className="md:hidden">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-extrabold text-gray-800">
              AjX <span className="text-blue-600">Panel</span>
            </h1>

            <button
              className="text-gray-700"
              onClick={() => setOpen((pre) => !pre)}
            >
              {open ? <HiX size={26} /> : <HiOutlineMenu size={26} />}
            </button>
          </div>

          <div
            className={`mt-4 flex flex-col items-center gap-4 bg-white 
                    rounded-lg shadow-md transition-all duration-300 ease-out 
                    overflow-hidden ${
                      open ? "max-h-52 py-4 opacity-100" : "max-h-0 opacity-0"
                    }`}
          >
            <Link className="hover:text-blue-600 transition" to="/">
              Home
            </Link>
            <Link className="hover:text-blue-600 transition" to="/">
              Our Services
            </Link>
            <Link className="hover:text-blue-600 transition" to="/dashboard">
              Dashboard
            </Link>
            <Link
              to="/signin"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg 
                     hover:bg-blue-700 transition"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
