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
    <div className="bg-white rounded-xl shadow-md p-6 mb-8 ">
      <div className="flex mb-6  | max-sm30:flex-col max-sm30:gap-y-5 ">
        <div>
          <select
            name="type"
            value={type}
            onChange={handleChange}
            className="max-sm30:w-full sm30:ml-4 bg-gray-100 border border-gray-300 text-gray-700 py-2 px-20 rounded-lg focus:outline-none cursor-pointer | max-lg:px-10 | max-sm:px-5 | max-sm30:px-2"
          >
            <option value="all">All type</option>
            <option value="image">Image</option>
            <option value="video">Video</option>
            <option value="text">Text</option>
            <option value="story">Story</option>
          </select>
        </div>
        <div>
          <select
            name="platform"
            value={platform}
            onChange={handleChange}
            className="max-sm30:w-full sm30:ml-4 bg-gray-100 border border-gray-300 text-gray-700 py-2 px-20 rounded-lg focus:outline-none cursor-pointer | max-lg:px-10 | max-sm:px-5 | max-sm30:px-2"
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

      <div>
        <DisplaySchedule />
      </div>
    </div>
  );
}
export default SchedulePostBody;
