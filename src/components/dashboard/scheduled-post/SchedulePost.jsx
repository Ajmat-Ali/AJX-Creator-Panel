import { useState } from "react";
import SchedulePostBody from "./SchedulePostBody";
import SchedulePostHeader from "./schedulePostHeader";
import SchedulePostModal from "./SchedulePostModal";
import { ScheduleContext } from "../../context/createContext";

function SchedulePost() {
  const [modal, setModal] = useState(false);

  const props = {
    modal,
    setModal,
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
