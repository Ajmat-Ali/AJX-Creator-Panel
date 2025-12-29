import formatRelativeDay from "./formatRelativeDay";

import { FaCalendar } from "react-icons/fa";

function DisplayUpcomingSchedulePost({ upcomingScheduled }) {
  const scheduledAt = new Date(
    upcomingScheduled.date + "T" + upcomingScheduled.time
  );

  const diffDay = formatRelativeDay(scheduledAt);

  return (
    <div className="mb-4">
      <div className="flex items-start">
        <div className="bg-green-100 p-2 rounded-lg mr-4">
          <span data-feather="calendar" className="text-green-500">
            <FaCalendar />
          </span>
        </div>
        <div>
          <h3 className="font-medium text-gray-800">
            {upcomingScheduled.postTitle}
          </h3>
          <p className="text-sm text-gray-500">Scheduled for {diffDay}</p>
        </div>
      </div>
    </div>
  );
}
export default DisplayUpcomingSchedulePost;
