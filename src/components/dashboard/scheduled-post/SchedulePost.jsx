import { useState } from "react";
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

  const props = {
    modal,
    setModal,
    schedule,
    setSchedule,
    err,
    setErr,
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
