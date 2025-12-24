import { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { ScheduleContext } from "../../context/createContext";

function SchedulePostModal() {
  const { modal, setModal } = useContext(ScheduleContext);

  const handleModal = () => {
    setModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      id="scheduleModal"
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        modal ? "flex" : "hidden"
      }`}
    >
      <div
        onClick={handleModal}
        className="absolute inset-0 bg-black opacity-50"
      ></div>
      <div className="relative z-10 bg-white rounded-xl p-6 w-full max-w-2xl">
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
        <form id="scheduleForm" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="postPlatform"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Platform
              </label>
              <select
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
              </select>
            </div>
            <div>
              <label
                htmlFor="postType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Post Type
              </label>
              <select
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
              id="postContent"
              rows="4"
              className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your post content here..."
              required
            ></textarea>
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
                id="postDate"
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
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
                id="postTime"
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                required
              />
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
