import { TfiSave } from "react-icons/tfi";
function Header() {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-gray-800">Script Generator</h1>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center cursor-pointer">
        <span data-feather="save" className="mr-2 w-4 h-4">
          <TfiSave />
        </span>
        Save Script
      </button>
    </div>
  );
}
export default Header;
