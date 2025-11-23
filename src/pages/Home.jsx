import { Link } from "react-router";
import Signin from "./Signin";

function Home() {
  return (
    <div className="flex justify-evenly">
      <h1>Home Page...</h1>
      <p>Only Home Page</p>
      <div>
        <Link to={`/signin`}>Register</Link>/<Link to={`/login`}>Login</Link>
      </div>
      <Link
        to="/dashboard"
        className="text-green-800 text-2xl m-4 font-bold underline underline-offset-8"
      >
        Dashboard
      </Link>
    </div>
  );
}

export default Home;
