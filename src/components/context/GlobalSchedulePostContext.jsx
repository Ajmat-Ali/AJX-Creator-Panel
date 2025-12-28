import { useEffect, useMemo, useState } from "react";
import { GlobalSchedulePostContextCreated } from "./createContext";

function GlobalSchedulePostContext({ children }) {
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
  };

  // -------------------------------------------- Update Schedule -------------------------------
  const updateSchedulePost = (id) => {
    const targetPost = scheduledPosts.find(
      (schedulePost) => schedulePost.id === id
    );
    if (!targetPost) return;

    setSchedule(targetPost);
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
    type: "all",
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
    <GlobalSchedulePostContextCreated.Provider value={props}>
      {children}
    </GlobalSchedulePostContextCreated.Provider>
  );
}
export default GlobalSchedulePostContext;
