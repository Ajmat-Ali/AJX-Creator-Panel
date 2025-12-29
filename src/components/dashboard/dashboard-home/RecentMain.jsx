import RecentContentIdea from "./RecentContentIdea";
import RecentSchedulePost from "./RecentSchedulePost";

function RecentMain() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <RecentContentIdea />
      <RecentSchedulePost />
    </div>
  );
}
export default RecentMain;
