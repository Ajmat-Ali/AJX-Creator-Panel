import { useContext } from "react";
import {
  GlobalSchedulePostContextCreated,
  ScheduleContext,
} from "../../context/createContext";
import ScheduleShimmer from "./ScheduleShimmer";
import DisplayCard from "./DisplayCard";

function DisplaySchedule() {
  const { scheduledPosts } = useContext(GlobalSchedulePostContextCreated);
  return scheduledPosts?.length < 1 ? (
    <div>
      <ScheduleShimmer />
    </div>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {scheduledPosts?.map((schedulePost) => (
        <DisplayCard schedulePost={schedulePost} key={schedulePost.id} />
      ))}
    </div>
  );
}
export default DisplaySchedule;
