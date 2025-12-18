import { FiSearch } from "react-icons/fi";
import DisplayIdeas from "./DisplayIdeas";
function ContentIdeaMain({ setModal, storedIdeas }) {
  function handleModal() {
    setModal(true);
  }

  return (
    <div className="flex-1 p-8 mt-10 | max-sm30:px-0 border">
      <div className="flex justify-between items-center mb-8 w-full | max-sm30:px-3 | max-sm30:flex-col max-sm30:gap-y-10 ">
        <h1 className="text-3xl font-bold text-gray-800 | ">Content Ideas</h1>
        <button
          onClick={handleModal}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center cursor-pointer | max-sm:text-sm | max-sm:px-2 max-sm:py-1"
        >
          <span className="mr-2 mb-1 text-xl">+</span>
          Add New Idea
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-8 w-full | max-sm30:p-">
        <div className="flex items-center mb-4 | max-sm30:relative">
          <input
            type="text"
            placeholder="Search ideas..."
            className="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 | | max-sm30:px-2 | max-sm30:py-2 z-1"
          />
          <button className="ml-2 bg-gray-100 p-2 rounded-lg cursor-pointer text-2xl max-sm30:hidden">
            <span className="text-gray-500">
              {" "}
              <FiSearch />
            </span>
          </button>
          <button className=" sm30:hidden ml-2 bg-gray-100 p-2 rounded-lg cursor-pointer text-2xl | max-sm30:absolute max-sm30:right-1 max-sm30:bg-gray-100 z-1">
            <span className="text-gray-500">
              {" "}
              <FiSearch />
            </span>
          </button>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-2 border-green-400"
          id="ideas-container"
        >
          <DisplayIdeas storedIdeas={storedIdeas} />
        </div>
      </div>
    </div>
  );
}

export default ContentIdeaMain;
