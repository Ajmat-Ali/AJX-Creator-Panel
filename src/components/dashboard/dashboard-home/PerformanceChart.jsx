function PerformanceChart() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8 max-sm22:px-2">
      <div className="flex justify-between items-center mb-6 flex-wrap max-sm30:flex-col max-sm30:gap-y-5">
        <h2 className="text-xl font-semibold text-gray-800">
          Recent Performance
        </h2>
        <select className="bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg focus:outline-none">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
      </div>
      <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Performance chart will appear here</p>
      </div>
    </div>
  );
}
export default PerformanceChart;
