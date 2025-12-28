import { TfiSave } from "react-icons/tfi";
import { validateScript } from "./ValidateGenerate";
function Header({ idea, setErr, addScript }) {
  const validation = validateScript(idea, setErr);

  const handleSaveScript = () => {
    if (!validation()) {
      addScript(idea);
      alert("Script saved");
      return;
    }
    alert("No Script Generated");
  };

  return (
    <div className="  flex justify-between items-center flex-wrap mb-8 | max-sm30:flex-col max-sm30:gap-y-10">
      <h1 className="text-3xl font-bold text-gray-800 | max-sm30:text-2xl">
        Script Generator
      </h1>
      <button
        onClick={handleSaveScript}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center cursor-pointer"
      >
        <span data-feather="save" className="mr-2 w-4 h-4">
          <TfiSave />
        </span>
        Save Script
      </button>
    </div>
  );
}
export default Header;
