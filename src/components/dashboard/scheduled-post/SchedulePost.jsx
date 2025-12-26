import { useEffect, useMemo, useState } from "react";
import SchedulePostBody from "./SchedulePostBody";
import SchedulePostHeader from "./schedulePostHeader";
import SchedulePostModal from "./SchedulePostModal";
import { ScheduleContext } from "../../context/createContext";

function SchedulePost() {
  const [modal, setModal] = useState(false);
  const [schedule, setSchedule] = useState({
    platform: "",
    postType: "",
    postTitle: "",
    date: "",
    time: "",
  });
  const [err, setErr] = useState({});
  const [scheduledPosts, setScheduledPosts] = useState(
    () => JSON.parse(localStorage.getItem("scheduledPosts")) || []
  );

  useEffect(() => {
    localStorage.setItem("scheduledPosts", JSON.stringify(scheduledPosts));
  }, [scheduledPosts]);

  // -------------------------------------------- Add Schedule -------------------------------
  const addSchedule = (schedule) => {
    if (schedule.id) {
      setScheduledPosts((prev) => {
        return prev.map((scp) => {
          return scp.id === schedule.id ? schedule : scp;
        });
      });
    } else {
      const newScheduledPost = { ...schedule, id: Date.now() };
      setScheduledPosts((prev) => [...prev, newScheduledPost]);
    }
    setModal(false);
  };
  // -------------------------------------------- Update Schedule -------------------------------

  const updateSchedulePost = (id) => {
    const targetPost = scheduledPosts.find(
      (schedulePost) => schedulePost.id === id
    );
    if (!targetPost) return;

    setSchedule(targetPost);
    setModal(true);
  };
  // -------------------------------------------- Delete Schedule -------------------------------
  const deleteSchedulePost = (id) => {
    const newScheduledPosts = scheduledPosts.filter(
      (schedulePost) => schedulePost.id !== id
    );
    if (confirm("Are you sure, want to delete this")) {
      setScheduledPosts(newScheduledPosts);
    }
  };
  // -------------------------------------------- Search Schedule -------------------------------
  const [searchedSchedule, setSearchedSchedule] = useState({
    type: "all", //text
    platform: "allPlatform",
  });

  const filteredScheduledPosts = useMemo(() => {
    return scheduledPosts.filter((schedulePost) => {
      const type =
        searchedSchedule.type === "all" ||
        searchedSchedule.type === schedulePost.postType;
      const platform =
        searchedSchedule.platform === "allPlatform" ||
        searchedSchedule.platform === schedulePost.platform;
      return type && platform;
    });
  }, [searchedSchedule, scheduledPosts]);

  const props = {
    modal,
    setModal,
    schedule,
    setSchedule,
    err,
    setErr,
    addSchedule,
    scheduledPosts: filteredScheduledPosts,
    updateSchedulePost,
    deleteSchedulePost,
    searchedSchedule,
    setSearchedSchedule,
  };

  return (
    <div className="flex-1 p-8 mt-16">
      <ScheduleContext.Provider value={props}>
        <SchedulePostHeader />
        <SchedulePostBody />
        <SchedulePostModal />
      </ScheduleContext.Provider>
    </div>
  );
}
export default SchedulePost;
