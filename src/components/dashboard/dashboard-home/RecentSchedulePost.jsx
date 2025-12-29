import { useContext } from "react";
import DisplayUpcomingSchedulePost from "./DisplayUpcomingSchedulePost";
import { GlobalSchedulePostContextCreated } from "../../context/createContext";
import NoDataShimmer from "./NoDateShimmer";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";

function RecentSchedulePost() {
  const { scheduledPosts } = useContext(GlobalSchedulePostContextCreated);
  const upcomingScheduled = [...scheduledPosts]
    .map((post) => {
      return { ...post, scheduledAt: new Date(post.date + "T" + post.time) };
    })
    .filter((post) => {
      return post.scheduledAt > new Date();
    })
    .sort((a, b) => a.scheduledAt - b.scheduledAt)
    .slice(0, 2);

  if (upcomingScheduled.length <= 0) {
    return <NoDataShimmer />;
  }

  return (
    <div className="bg-white rounded-xl shadow-2xl p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Upcoming Scheduled Posts
      </h2>
      {upcomingScheduled.map((upcomingScheduled) => (
        <DisplayUpcomingSchedulePost
          key={upcomingScheduled.id}
          upcomingScheduled={upcomingScheduled}
        />
      ))}
      <Link
        to={"schedulePost"}
        className="mt-4 inline-flex items-center text-green-500 hover:text-green-700"
      >
        View all scheduled posts
        <span data-feather="arrow-right" className="ml-2 w-4 h-4">
          <FaArrowRight />
        </span>
      </Link>
    </div>
  );
}

export default RecentSchedulePost;
