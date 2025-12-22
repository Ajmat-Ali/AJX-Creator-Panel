import { TiEyeOutline } from "react-icons/ti";
import { PiEyeLight } from "react-icons/pi";
import { FaRegTrashAlt } from "react-icons/fa";
function DisplaySavedScripts({ script, deleteScript, loadScript }) {
  const handleDelete = (id) => {
    deleteScript(id);
  };

  const handleLoadScript = (id) => {
    loadScript(id);
  };
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-medium text-gray-800 truncate">{script.title}</h3>
        <div className="flex space-x-3">
          <button
            onClick={() => handleLoadScript(script.id)}
            className="text-blue-500 hover:text-blue-700 cursor-pointer"
            title="Load script"
          >
            <span>
              <PiEyeLight size={20} />
            </span>
          </button>
          <button
            onClick={() => handleDelete(script.id)}
            className="text-red-500 hover:text-red-700 cursor-pointer"
            title="Delete"
          >
            <span>
              <FaRegTrashAlt size={15} />
            </span>
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-3 line-clamp-3">{script.script}</p>
      <p className="text-sm text-gray-400">Saved {script.createdDate}</p>
    </div>
  );
}

export default DisplaySavedScripts;
