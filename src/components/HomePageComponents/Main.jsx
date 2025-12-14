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
      <div className="border flex w-11/12 m-auto mb-10 justify-between pr-4 | max-md:flex-col | max-md:p-0">
        <div className="border border-red-500 flex flex-col gap-y-5 w-5/12 py-5 | max-lg:w-8/12 | max-md:w-12/12 max-md:text-center">
          <h3 className=" font-semibold text-3xl | max-lg:text-2xl">
            WE ARE HERE
          </h3>
          <h1 className="font-bold text-6xl | max-xl:text-5xl | max-sm22:text-4xl">
            MANAGE YOUR SOCIAL MEDIA
          </h1>
          <p className="font-semibold">
            Manage ideas, schedule posts, and track growth like pro.
          </p>
          <div className="my-8">
            <button className="font-semibold bg-black text-gray-300 p-2 rounded-2xl px-3 cursor-pointer">
              <Link to={"/dashboard"}>Start free today</Link>
            </button>
          </div>
          <div className="flex gap-x-5 max-md:justify-center">
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
  );
}
