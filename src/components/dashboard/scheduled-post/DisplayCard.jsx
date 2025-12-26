import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import PlatFormIcon from "./PlatFormIcon";
import { useContext } from "react";
import { ScheduleContext } from "../../context/createContext";
function DisplayCard({ schedulePost }) {
  const { id, platform, postType, postTitle, date, time } = schedulePost;
  const { updateSchedulePost, deleteSchedulePost } =
    useContext(ScheduleContext);

  const handleEditSchedule = (id) => {
    updateSchedulePost(id);
  };

  const handleDeleteSchedule = (id) => {
    deleteSchedulePost(id);
  };

  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50">
      <td className="py-4">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3">
            <span className="w-4 h-4 ">
              <PlatFormIcon title={platform} />
            </span>
          </div>
          <span className="capitalize">{platform}</span>
        </div>
      </td>
      <td className="py-4">
        <p className="font-medium text-gray-800 line-clamp-1">
          {postTitle.substring(0, 50)} {postTitle.length > 50 ? "..." : ""}
        </p>
        <p className="text-sm text-gray-500 capitalize">{postType}</p>
      </td>
      <td className="py-4">
        <p className="text-gray-800">{date}</p>
        <p className="text-sm text-gray-500">{time}</p>
      </td>
      <td className="py-4">
        <span className="px-2 py-1 text-xs rounded-full ">{"status"}</span>
      </td>
      <td className="py-4 text-right">
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => handleEditSchedule(id)}
            className="text-blue-500 hover:text-blue-700 p-2 rounded-lg hover:bg-blue-50 cursor-pointer"
          >
            <span className="w-4 h-4">
              <FiEdit />
            </span>
          </button>
          <button
            onClick={() => handleDeleteSchedule(id)}
            className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 cursor-pointer"
          >
            <span data-feather="trash-2" className="w-4 h-4">
              <FaRegTrashAlt />
            </span>
          </button>
        </div>
      </td>
    </tr>
  );
}
export default DisplayCard;
