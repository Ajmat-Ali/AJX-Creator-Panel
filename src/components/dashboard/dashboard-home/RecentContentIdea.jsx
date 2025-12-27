function RecentContentIdea() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Recent Content Ideas
      </h2>
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="bg-blue-100 p-2 rounded-lg mr-4">
            <i data-feather="edit-2" className="text-blue-500"></i>
          </div>
          <div>
            <h3 className="font-medium text-gray-800">
              Behind the scenes of my new project
            </h3>
            <p className="text-sm text-gray-500">Added 2 days ago</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-blue-100 p-2 rounded-lg mr-4">
            <i data-feather="edit-2" className="text-blue-500"></i>
          </div>
          <div>
            <h3 className="font-medium text-gray-800">
              Q&A session with followers
            </h3>
            <p className="text-sm text-gray-500">Added 5 days ago</p>
          </div>
        </div>
      </div>
      <a
        href="/content-ideas"
        className="mt-4 inline-flex items-center text-blue-500 hover:text-blue-700"
      >
        View all ideas
        <i data-feather="arrow-right" className="ml-2 w-4 h-4"></i>
      </a>
    </div>
  );
}

export default RecentContentIdea;
