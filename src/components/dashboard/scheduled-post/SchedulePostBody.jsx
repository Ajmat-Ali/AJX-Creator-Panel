import { useContext } from "react";
import DisplaySchedule from "./DisplaySchedule";
import { ScheduleContext } from "../../context/createContext";

function SchedulePostBody() {
  const { searchedSchedule, setSearchedSchedule } = useContext(ScheduleContext);
  const { type, platform } = searchedSchedule;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setSearchedSchedule((pre) => ({ ...pre, [name]: value }));
  };
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <div className="flex mb-6">
        <div className=" -border">
          <select
            name="type"
            value={type}
            onChange={handleChange}
            className="ml-4 bg-gray-100 border border-gray-300 text-gray-700 py-2 px-20 rounded-lg focus:outline-none cursor-pointer"
          >
            <option value="all">All type</option>
            <option value="image">Image</option>
            <option value="video">Video</option>
            <option value="text">Text</option>
            <option value="story">Story</option>
          </select>
        </div>
        <div className=" -border">
          <select
            name="platform"
            value={platform}
            onChange={handleChange}
            className="ml-4 bg-gray-100 border border-gray-300 text-gray-700 py-2 px-20 rounded-lg focus:outline-none cursor-pointer"
          >
            <option value={"allPlatform"}>All Platforms</option>
            <option value={"instagram"}>Instagram</option>
            <option value={"youtube"}>YouTube</option>
            <option value={"twitter"}>Twitter</option>
            <option value={"facebook"}>Facebook</option>
            <option value={"linkedin"}>Linkedin</option>
            <option value={"all"}>All</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500 border-b border-gray-200 ">
              <th className="pb-3">Platform</th>
              <th className="pb-3">Content</th>
              <th className="pb-3">Scheduled Time</th>
              <th className="pb-3">Status</th>
              <th className="pb-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody id="scheduledPostsContainer">
            <DisplaySchedule />
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default SchedulePostBody;
