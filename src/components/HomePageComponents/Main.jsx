import {
  BsFacebook,
  BsGraphUpArrow,
  BsHandIndex,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { Link } from "react-router";
export default function Main() {
  return (
    <main>
      <div
        className="w-11/12 mx-auto mb-20 flex justify-between items-center 
                  max-md:flex-col max-md:gap-12"
      >
        {/* ---------------- Left Content ---------------- */}
        <div
          className="flex flex-col gap-y-6 w-5/12 py-10 
                    max-lg:w-8/12 max-md:w-full max-md:text-center"
        >
          <h3 className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
            We are here
          </h3>

          <h1
            className="font-extrabold text-6xl leading-tight text-gray-900 
                     max-xl:text-5xl max-sm22:text-4xl"
          >
            Manage Your <br className="max-md:hidden" />
            Social Media
          </h1>

          <p
            className="text-gray-600 text-lg font-medium max-w-xl 
                    max-md:mx-auto"
          >
            Manage ideas, schedule posts, and track growth like a pro — all in
            one powerful dashboard.
          </p>

          <div className="mt-6">
            <button
              className="bg-blue-600 text-white font-semibold px-6 py-3 
                           rounded-xl hover:bg-blue-700 transition 
                           shadow-md active:scale-95"
            >
              <Link to="/dashboard">Start free today</Link>
            </button>
          </div>

          <div className="flex gap-x-6 mt-8 max-md:justify-center">
            <BsInstagram
              size={28}
              className="text-pink-600 hover:scale-110 transition"
            />
            <BsYoutube
              size={28}
              className="text-red-600 hover:scale-110 transition"
            />
            <BsFacebook
              size={28}
              className="text-blue-600 hover:scale-110 transition"
            />
            <BsTwitter
              size={28}
              className="text-black hover:scale-110 transition"
            />
          </div>
        </div>

        {/* ---------------- Right Image ---------------- */}
        <div className="flex justify-center w-5/12 max-md:w-full">
          <img
            src="https://placehold.co/400"
            alt="Dashboard Preview"
            className="w-96 h-96 object-cover rounded-3xl shadow-xl 
                   max-sm:w-72 max-sm:h-72"
          />
        </div>
      </div>
    </main>
  );
}
