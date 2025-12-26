import { useContext } from "react";
import { ScheduleContext } from "../../context/createContext";
import ScheduleShimmer from "./ScheduleShimmer";
import DisplayCard from "./DisplayCard";

function DisplaySchedule() {
  const { scheduledPosts } = useContext(ScheduleContext);
  return scheduledPosts?.length < 1 ? (
    <ScheduleShimmer />
  ) : (
    scheduledPosts?.map((schedulePost) => (
      <DisplayCard schedulePost={schedulePost} key={schedulePost.id} />
    ))
  );
}
export default DisplaySchedule;
