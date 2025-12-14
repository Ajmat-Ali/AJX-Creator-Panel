import { useState } from "react";
import { Link } from "react-router";
import { FaPenToSquare } from "react-icons/fa6";
import { IoIosCheckboxOutline } from "react-icons/io";
import { HiOutlineMenu, HiX } from "react-icons/hi";
// import { Fragment, useState } from "react";
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border w-11/12 m-auto p-2 mb-10 | ">
      {/* -------------------------------------------------------- Desktop and Above ------------------------------------ */}
      <nav className="flex justify-between max-md:hidden">
        <div>
          <h1 className="text-2xl font-extrabold">AjX Panel</h1>
        </div>
        <div>
          <Link to={"/"}>Home</Link>
        </div>
        <div>
          <Link to={"/"}>Our Services</Link>
        </div>
        <div>
          <Link to={"/signin"}>Sign Up</Link>
        </div>
        <div>
          <Link to={"/dashboard"}>Dashboard</Link>
        </div>
      </nav>
      {/* -------------------------------------------------------- Below Desktop ------------------------------------ */}
      <nav className="md:hidden">
        <div className="flex justify-between">
          <button
            className="cursor-pointer"
            onClick={() => setOpen((pre) => !pre)}
          >
            {open ? <HiX size={25} /> : <HiOutlineMenu size={25} />}
          </button>
          <h1 className="text-2xl font-extrabold">AjX Panel</h1>
        </div>
        <div
          className={` border gap-y-3 mt-4 flex flex-col justify-center items-center transition-all duration-300 ease-out overflow-hidden ${
            open ? "max-h-40 opacity-100" : " max-h-0 opacity-0"
          }`}
        >
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Our Services</Link>
          <Link to={"/signin"}>Sign Up</Link>
          <Link to={"/dashboard"}>Dashboard</Link>
        </div>
      </nav>
    </header>
  );
}
