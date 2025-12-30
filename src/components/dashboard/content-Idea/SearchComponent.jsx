import { useContext, useEffect, useRef, useState } from "react";
import {
  GlobalContentIdeaContextCreated,
  IdeaContext,
} from "../../context/createContext";
import { FiSearch } from "react-icons/fi";
import { debounce } from "../../../utils/debounce";

function SearchComponent() {
  const [searchErr, setSearchErr] = useState("");
  let debounceRef = useRef(null);

  const { storedIdeas, setSearchedData, search, setSearch } = useContext(
    GlobalContentIdeaContextCreated
  );
  const storedIdeasRef = useRef(storedIdeas);

  useEffect(() => {
    storedIdeasRef.current = storedIdeas;
  }, [storedIdeas]);

  //   ---------------------------------------------- handleChange (change) -------------------------------
  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setSearchErr("");
    debounceRef.current(value);
  };

  //   ---------------------------------------------- handleSearchIdea (click) -------------------------------
  const handleSearchIdea = (value) => {
    if (!value.trim()) {
      setSearchedData([]);
      return;
    }
    value = value.trim();

    const searched = storedIdeasRef?.current?.filter((idea) =>
      idea.title.toLowerCase().includes(value.toLowerCase())
    );

    if (searched.length < 1) {
      setSearchedData([]);
      setSearchErr("Data not found!");
      return;
    }
    setSearchedData(searched);
  };

  if (!debounceRef.current) {
    debounceRef.current = debounce(handleSearchIdea, 1000);
  }

  return (
    <div>
      <div className="flex items-center mb-4 | max-sm30:relative max-sm30:mx-3 ">
        <input
          value={search}
          onChange={handleChange}
          type="text"
          placeholder="Search ideas..."
          className="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 | | max-sm30:px-2 | max-sm30:py-2 z-1"
        />
        <button
          onClick={() => handleSearchIdea(search)}
          className="ml-2 bg-gray-100 p-2 rounded-lg cursor-pointer text-2xl max-sm30:hidden"
        >
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
      <div className="text-center mb-8">
        <span className="text-red-500 font-bold text-sm">
          {searchErr && searchErr}
        </span>
      </div>
    </div>
  );
}
export default SearchComponent;
