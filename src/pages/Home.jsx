import { Link } from "react-router";

function Home() {
  return (
    <div>
      <h1>Home Page...</h1>
      <p>Only Home Page</p>

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
