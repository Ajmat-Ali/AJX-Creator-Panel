import formatRelativeDay from "./formatRelativeDay";
import { FiEdit2 } from "react-icons/fi";

function DisplayRecentIdeas({ recentIdea }) {
  const createdAt = new Date(
    recentIdea.createdDate + "T" + recentIdea.createdTime
  );
  const diffDay = formatRelativeDay(createdAt);

  return (
    <div className="mb-4">
      <div className="flex items-start">
        <div className="bg-blue-100 p-2 rounded-lg mr-4">
          <span data-feather="edit-2" className="text-blue-500">
            <FiEdit2 />
          </span>
        </div>
        <div>
          <h3 className="font-medium text-gray-800">{recentIdea.title}</h3>
          <p className="text-sm text-gray-500">Added {diffDay} </p>
        </div>
      </div>
    </div>
  );
}

export default DisplayRecentIdeas;
