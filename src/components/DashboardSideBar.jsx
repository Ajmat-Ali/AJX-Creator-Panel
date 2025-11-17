function DashboardSideBar() {
  return (
    <div className="w-64 p-4  border-r-4 border-black overflow-y-auto">
      <ul className="flex flex-col gap-y-5">
        <li>Home</li>
        <li>Content Idea</li>
        <li>Video Planner</li>
        <li>Content Performance</li>
        <li>Script Generator</li>
      </ul>
    </div>
  );
}

export default DashboardSideBar;
