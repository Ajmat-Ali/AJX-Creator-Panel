import { MdOutlineCalendarToday } from "react-icons/md";
function ScheduleShimmer() {
  return (
    <tr>
      <td colSpan={5} className="py-12 text-center ">
        <span className=" text-gray-400 mx-auto mb-4 flex justify-center m-auto text-5xl ">
          <MdOutlineCalendarToday />
        </span>
        <h3 className="text-lg font-medium text-gray-500">
          No scheduled posts yet
        </h3>
        <p className="text-gray-400 mt-1">
          Click "Schedule Post" to get started
        </p>
      </td>
    </tr>
  );
}
export default ScheduleShimmer;
