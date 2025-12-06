import { Link } from "react-router";
import Signin from "./Signin";
import {
  BsFacebook,
  BsHandIndex,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { useState } from "react";

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border p-4">
      <header className="border w-11/12 m-auto p-2 mb-10 | ">
        {/* -------------------------------------------------------- Desktop and Above ------------------------------------ */}
        <nav className="flex justify-between max-md:hidden">
          <div>
            <h1 className="text-2xl font-bold">AjX Panel</h1>
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
            <button className="" onClick={() => setOpen((pre) => !pre)}>
              {open ? <HiX size={25} /> : <HiOutlineMenu size={25} />}
            </button>
            <h1 className="text-2xl font-bold">AjX Panel</h1>
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
      <main>
        <div className="border flex w-11/12 m-auto mb-10 justify-between pr-4 | max-md:flex-col | max-md:p-0">
          <div className="border border-red-500 flex flex-col gap-y-5 w-5/12 | max-lg:w-8/12 | max-md:w-12/12 max-md:text-center">
            <h3 className="text-3xl | max-lg:text-2xl">WE ARE HERE</h3>
            <h1 className="text-6xl | max-xl:text-5xl | ">
              MANAGE YOUR SOCIAL MEDIA
            </h1>
            <p>Manage ideas, schedule posts, and track growth like pro.</p>
            <div className="my-8">
              <button className=" bg-black text-gray-300 p-2 rounded-2xl px-3 cursor-pointer">
                <Link to={"/dashboard"}>Start free today</Link>
              </button>
            </div>
            <div className="flex gap-x-5 max-md:justify-center ">
              <BsInstagram size={30} color="#E1306C" />
              <BsYoutube size={30} color="#FF0000" />
              <BsFacebook size={30} color="#1877F2" />
              <BsTwitter size={30} color="#000000" />
            </div>
          </div>
          <div className="border">
            <img
              src="https://placehold.co/400"
              alt=""
              className="rounded-full "
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
