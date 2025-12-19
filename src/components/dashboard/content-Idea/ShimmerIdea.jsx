import { FiEdit2 } from "react-icons/fi";
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

export default ShimmerIdea;
