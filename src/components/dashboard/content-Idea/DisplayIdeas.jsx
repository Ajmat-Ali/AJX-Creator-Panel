import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiFileText } from "react-icons/fi";
export default function DisplayIdeas({ storedIdeas }) {
  if (storedIdeas.length < 1) {
    return <ShimmerIdea />;
  }
  return (
    <>
      {storedIdeas.map((idea) => {
        return <DisplayIdeaComponent idea={idea} key={idea.id} />;
      })}
    </>
  );
}

const ShimmerIdea = () => {
  return (
    <div className="col-span-full text-center py-12">
      <div className="w-12 h-12 text-gray-400 mx-auto mb-4 text-6xl | max-sm:text-5xl | max-sm30:text-4xl">
        <FiEdit2 />
      </div>
      <h3 className="text-lg font-medium text-gray-500">
        No content ideas yet
      </h3>
      <p className="text-gray-400 mt-1">Click "Add New Idea" to get started</p>
    </div>
  );
};

const DisplayIdeaComponent = ({ idea }) => {
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
// const DisplayIdeaComponent = ({ idea }) => {
//   return (
//     <div className="flex flex-col">
//       <div>
//         <div>{idea.title}</div>
//         <div className="flex gap-x-1">
//           <button>S</button>
//           <button>T</button>
//         </div>
//       </div>
//       <div>{idea.description}</div>
//       <div>{idea.createdDate}</div>
//       <div>{idea.createdTime}</div>
//     </div>
//   );
// };
