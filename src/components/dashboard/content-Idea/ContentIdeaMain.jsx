import DisplayIdeas from "./DisplayIdeas";
import { useContext } from "react";
import { IdeaContext } from "../../context/createContext";
import SearchComponent from "./SearchComponent";
function ContentIdeaMain() {
  const { setModal } = useContext(IdeaContext);

  function handleModal() {
    setModal(true);
  }

  return (
    <div className="flex-1 p-8 mt-10 | max-sm30:px-0 ">
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
      <SearchComponent />

      <div className="bg-white rounded-xl shadow-md p-6 mb-8 w-full | max-sm30:p-">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          id="ideas-container"
        >
          <DisplayIdeas />
        </div>
      </div>
    </div>
  );
}

export default ContentIdeaMain;
