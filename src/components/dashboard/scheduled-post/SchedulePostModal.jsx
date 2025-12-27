import { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { ScheduleContext } from "../../context/createContext";
import { validateDateAndTime, validationSchedulePost } from "./validation";

function SchedulePostModal() {
  const { modal, setModal, schedule, setSchedule, err, setErr, addSchedule } =
    useContext(ScheduleContext);

  const { platform, postType, postTitle, date, time } = schedule;

  const handleModal = () => {
    setModal(false);
  };

  // ----------------------------------------------- Handle Submit  ---------------------------------------------
  const validate = validationSchedulePost(schedule);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { status, err } = validate();

    if (status) {
      setErr(err);
      return;
    }
    addSchedule(schedule);
    setSchedule({
      platform: "",
      postType: "",
      postTitle: "",
      date: "",
      time: "",
    });
    setErr({});
    alert("Successful submitted");
  };
  // ----------------------------------------------- Handle Schedule  ---------------------------------------------

  const handleSchedule = (e) => {
    const { name, value } = e.target;
    setSchedule((pre) => ({ ...pre, [name]: value }));
  };
  // ----------------------------------------------- Handle Date  ---------------------------------------------
  const today = new Date().toISOString().split("T")[0];

  function isPastDate(date) {
    return date < today;
  }
  const handleDate = (e) => {
    const { value, name } = e.target;
    if (isPastDate(value)) {
      return;
    }
    setSchedule((prev) => {
      if (prev.time && !validateDateAndTime(value, prev.time)) {
        return { ...prev, [name]: value, time: "" };
      }
      return { ...prev, [name]: value };
    });
  };
  // ---------------------------------------------------- Handle Time -----------------------------------------------

  const handleTime = (e) => {
    const { value, name } = e.target;
    let selectTime = {};
    setErr({ time: "" });
    selectTime = { [name]: value };

    if (!date) {
      alert("Please select Date ");
      selectTime = { [name]: "" };
    }
    if (!validateDateAndTime(date, value)) {
      alert("You have selected past time");
      selectTime = { [name]: "" };
    }

    setSchedule((prev) => {
      return { ...prev, ...selectTime };
    });
  };

  return (
    <div
      id="scheduleModal"
      className={`fixed inset-0 flex items-center p-4 justify-center z-50 ${
        modal ? "flex" : "hidden"
      }`}
    >
      <div
        onClick={handleModal}
        className=" absolute inset-0 bg-black opacity-50"
      ></div>
      <div className="relative z-10 bg-white rounded-xl p-6 w-full max-w-xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Schedule New Post
          </h2>
          <button
            onClick={handleModal}
            className="text-gray-500 hover:text-gray-700 text-2xl cursor-pointer"
          >
            <span data-feather="x">
              <RxCross1 />
            </span>
          </button>
        </div>
        <form id="scheduleForm" className="space-y-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="postPlatform"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Platform
              </label>
              <select
                name="platform"
                value={platform}
                onChange={handleSchedule}
                id="postPlatform"
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                required
              >
                <option value="">Select platform</option>
                <option value="all">All</option>
                <option value="instagram">Instagram</option>
                <option value="youtube">YouTube</option>
                <option value="twitter">Twitter</option>
                <option value="facebook">Facebook</option>
                <option value="linkedin">Linkedin</option>
              </select>
              <span className="text-red-500 text-sm">
                {err.platform && err.platform}
              </span>
            </div>
            <div>
              <label
                htmlFor="postType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Post Type
              </label>
              <select
                name="postType"
                value={postType}
                onChange={handleSchedule}
                id="postType"
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                required
              >
                <option value="">Select type</option>
                <option value="image">Image</option>
                <option value="video">Video</option>
                <option value="text">Text</option>
                <option value="story">Story</option>
              </select>
              <span className="text-red-500 text-sm">
                {err.postType && err.postType}
              </span>
            </div>
          </div>

          <div>
            <label
              htmlFor="postContent"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Content
            </label>
            <textarea
              name="postTitle"
              value={postTitle}
              onChange={handleSchedule}
              id="postContent"
              rows="4"
              className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your post content here..."
              required
            ></textarea>
            <span className="text-red-500 text-sm">
              {err.postTitle && err.postTitle}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="postDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Date
              </label>
              <input
                type="date"
                name="date"
                value={date}
                onChange={handleDate}
                min={today}
                id="postDate"
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <span className="text-red-500 text-sm">
                {err.date && err.date}
              </span>
            </div>
            <div>
              <label
                htmlFor="postTime"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Time
              </label>
              <input
                type="time"
                name="time"
                value={time}
                onChange={handleTime}
                id="postTime"
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                required
              />
              <span className="text-red-500 text-sm">
                {err.time && err.time}
              </span>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={handleModal}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer"
            >
              Schedule Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SchedulePostModal;
