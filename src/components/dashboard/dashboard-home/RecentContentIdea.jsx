import { useContext } from "react";
import { GlobalContentIdeaContextCreated } from "../../context/createContext";
import DisplayRecentIdeas from "./DisplayRecentIdeas";
import NoDateShimmer from "./NoDateShimmer";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";

function RecentContentIdea() {
  const { storedIdeas } = useContext(GlobalContentIdeaContextCreated);
  const recentContentIdes = [...storedIdeas]
    .sort((a, b) => {
      const dateA = new Date(a.createdDate + "T" + a.createdTime);
      const dateB = new Date(b.createdDate + "T" + b.createdTime);
      return dateB - dateA;
    })
    .slice(0, 2);

  if (recentContentIdes.length <= 0) {
    return <NoDateShimmer />;
  }

  return (
    <div className="bg-white rounded-xl shadow-2xl p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Recent Content Ideas
      </h2>
      {recentContentIdes.map((recentIdea) => (
        <DisplayRecentIdeas key={recentIdea.id} recentIdea={recentIdea} />
      ))}
      <Link
        to={"contentIdea"}
        className="mt-4 inline-flex items-center text-blue-500 hover:text-blue-700"
      >
        View all ideas
        <i data-feather="arrow-right" className="ml-2 w-4 h-4">
          <FaArrowRight />
        </i>
      </Link>
    </div>
  );
}

export default RecentContentIdea;
