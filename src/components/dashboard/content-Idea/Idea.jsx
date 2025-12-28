import { RiDeleteBinLine } from "react-icons/ri";
import { FiFileText } from "react-icons/fi";
import { useContext } from "react";
import { GlobalContentIdeaContextCreated } from "../../context/createContext";

const Idea = ({ idea }) => {
  const { deleteIdea } = useContext(GlobalContentIdeaContextCreated);

  const handleDelete = (id) => {
    deleteIdea(id);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-medium text-gray-800">{idea.title}</h3>
        <div className="flex space-x-2">
          <button
            className="text-blue-500 hover:text-blue-700 cursor-pointer"
            title="Generate Script"
          >
            <span className="text-lg">
              <FiFileText />
            </span>
          </button>
          <button
            onClick={() => handleDelete(idea.id)}
            className="text-red-500 hover:text-red-700 cursor-pointer"
            title="Delete"
          >
            <span className="text-lg">
              <RiDeleteBinLine />
            </span>
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-3">
        {idea.description || "No description"}
      </p>
      <p className="text-xs text-gray-400">Created {idea.createdDate}</p>
    </div>
  );
};

export default Idea;
