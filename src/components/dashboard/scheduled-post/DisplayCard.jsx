import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";

import PlatFormIcon from "./PlatFormIcon";
import { useContext } from "react";
import {
  GlobalSchedulePostContextCreated,
  ScheduleContext,
} from "../../context/createContext";
function DisplayCard({ schedulePost }) {
  const { id, platform, postType, postTitle, date, time } = schedulePost;

  const { setModal } = useContext(ScheduleContext);
  const { updateSchedulePost, deleteSchedulePost } = useContext(
    GlobalSchedulePostContextCreated
  );

  const handleEditSchedule = (id) => {
    updateSchedulePost(id);
    setModal(true);
  };

  const handleDeleteSchedule = (id) => {
    deleteSchedulePost(id);
  };

  return (
    <div className=" bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl  hover:-translate-y-1 transition-all duration-300   ease-out  overflow-hidden ">
      <div className="p-6 ">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 flex-wrap">
          <div className="flex items-center space-x-3">
            <div className="bg-linear-to-br from-primary-100 to-primary-200 p-2.5 rounded-xl shadow-inner group-hover:shadow-md transition  ">
              <span
                className="text-primary-600 w-5 h-5"
                onClick={() => handleEditSchedule(id)}
              >
                <PlatFormIcon title={platform} />
              </span>
            </div>

            <span className="font-semibold text-gray-700 capitalize tracking-wide">
              {platform}
            </span>
          </div>

          <span className=" text-md px-3 py-1  font-semibold rounded-full bg-gray-100/70 text-secondary-800 backdrop-blur hover:bg-gray-200 transition ">
            {postType}
          </span>
        </div>

        {/* Title */}
        <div>
          <h3 className=" text-lg  font-semibold  text-gray-800  leading-snug mb-3 hover:text-primary-600 transition-colors">
            {postTitle.substring(0, 50)} {postTitle.length > 50 ? "..." : ""}
          </h3>
        </div>

        {/* Meta */}
        <div className="flex items-center space-x-5 text-sm text-gray-500 mb-5 flex-wrap">
          <div className="flex items-center hover:text-gray-800 transition">
            <span className="w-4 h-4 mr-1">
              <CiCalendar />
            </span>
            <span className="font-medium">{date}</span>
          </div>

          <div className="flex items-center hover:text-gray-800 transition">
            <span className="w-4 h-4 mr-1">
              <CiClock2 />
            </span>
            <span className="font-medium">{time}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-3">
          <button
            onClick={() => handleEditSchedule(id)}
            className="text-blue-500 p-2.5 rounded-xl hover:bg-blue-50 hover:text-blue-700 hover:scale-110 transition shadow-sm hover:shadow-md cursor-pointer"
          >
            <span className="w-5 h-5">
              <FiEdit />
            </span>
          </button>

          <button
            onClick={() => handleDeleteSchedule(id)}
            className="text-red-500 p-2.5 rounded-xl hover:bg-red-50 hover:text-red-700 hover:scale-110 transition shadow-sm hover:shadow-md cursor-pointer"
          >
            <span className="w-5 h-5">
              <FaRegTrashAlt />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default DisplayCard;

// --------------------------------------------------------------------- 1st -------------------------------------------------------
// import { FiEdit } from "react-icons/fi";
// import { FaRegTrashAlt } from "react-icons/fa";
// import PlatFormIcon from "./PlatFormIcon";
// import { useContext } from "react";
// import { ScheduleContext } from "../../context/createContext";
// function DisplayCard({ schedulePost }) {
//   const { id, platform, postType, postTitle, date, time } = schedulePost;
//   const { updateSchedulePost, deleteSchedulePost } =
//     useContext(ScheduleContext);

//   const handleEditSchedule = (id) => {
//     updateSchedulePost(id);
//   };

//   const handleDeleteSchedule = (id) => {
//     deleteSchedulePost(id);
//   };

//   return (
//     <div className="border-b1 border-gray-100- hover:bg-gray-50 grid grid-cols-5 justify-between border-2 ">
//       <div className="py-4 ">
//         <div className="flex items-center">
//           <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3">
//             <span className="w-4 h-4 ">
//               <PlatFormIcon title={platform} />
//             </span>
//           </div>
//           <span className="capitalize">{platform}</span>
//         </div>
//       </div>
//       <div className="py-4 ">
//         <p className="font-medium text-gray-800 line-clamp-1">
//           {postTitle.substring(0, 50)} {postTitle.length > 50 ? "..." : ""}
//         </p>
//         <p className="text-sm text-gray-500 capitalize">{postType}</p>
//       </div>
//       <div className="py-4 ">
//         <p className="text-gray-800">{date}</p>
//         <p className="text-sm text-gray-500">{time}</p>
//       </div>
//       <div className="py-4 ">
//         <span className="px-2 py-1 text-xs rounded-full text-green-300 bg-green-800">
//           {"scheduled"}
//         </span>
//       </div>
//       <div className="py-4 text-right border ">
//         <div className="flex justify-end space-x-2">
//           <button
//             onClick={() => handleEditSchedule(id)}
//             className="text-blue-500 hover:text-blue-700 p-2 rounded-lg hover:bg-blue-50 cursor-pointer"
//           >
//             <span className="w-4 h-4">
//               <FiEdit />
//             </span>
//           </button>
//           <button
//             onClick={() => handleDeleteSchedule(id)}
//             className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 cursor-pointer"
//           >
//             <span data-feather="trash-2" className="w-4 h-4">
//               <FaRegTrashAlt />
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default DisplayCard;
