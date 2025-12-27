function RecentSchedulePost() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Upcoming Scheduled Posts
      </h2>
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="bg-green-100 p-2 rounded-lg mr-4">
            <i data-feather="calendar" className="text-green-500"></i>
          </div>
          <div>
            <h3 className="font-medium text-gray-800">
              New product announcement
            </h3>
            <p className="text-sm text-gray-500">
              Scheduled for tomorrow at 2:00 PM
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-green-100 p-2 rounded-lg mr-4">
            <i data-feather="calendar" className="text-green-500"></i>
          </div>
          <div>
            <h3 className="font-medium text-gray-800">
              Weekly inspiration quote
            </h3>
            <p className="text-sm text-gray-500">
              Scheduled for Friday at 9:00 AM
            </p>
          </div>
        </div>
      </div>
      <a
        href="/scheduled-posts"
        className="mt-4 inline-flex items-center text-green-500 hover:text-green-700"
      >
        View all scheduled posts
        <i data-feather="arrow-right" className="ml-2 w-4 h-4"></i>
      </a>
    </div>
  );
}

export default RecentSchedulePost;
