function SchedulePostBody() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <div className="flex items-center mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search scheduled posts..."
            className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <i
            data-feather="search"
            className="absolute left-3 top-3 text-gray-500"
          ></i>
        </div>
        <select className="ml-4 bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg focus:outline-none cursor-pointer">
          <option>All Platforms</option>
          <option>Instagram</option>
          <option>YouTube</option>
          <option>Twitter</option>
          <option>Facebook</option>
        </select>
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
            {/* <!-- Scheduled posts will be loaded here --> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default SchedulePostBody;
