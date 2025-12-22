import { FiFileText } from "react-icons/fi";
function ScriptShimmer() {
  return (
    <div className="col-span-full text-center py-12">
      <div className=" text-gray-400 text-5xl mb-4 flex justify-center max-sm22:text-4xl">
        <FiFileText />
      </div>
      <h3 className="text-lg font-medium text-gray-500">
        No saved scripts yet
      </h3>
      <p className="text-gray-400 mt-1">Generate and save your first script</p>
    </div>
  );
}
export default ScriptShimmer;
