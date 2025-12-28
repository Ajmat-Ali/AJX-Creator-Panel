import { useEffect, useState } from "react";
import { GlobalContentIdeaContextCreated } from "./createContext";
function GlobalContentIdeaContext({ children }) {
  const [storedIdeas, setStoredIdeas] = useState(
    () => JSON.parse(localStorage.getItem("ideas")) || []
  );

  const [searchedData, setSearchedData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("ideas", JSON.stringify(storedIdeas));
  }, [storedIdeas]);

  // ------------------------------------ Add Idea ----------------------------
  const addIdea = (idea) => {
    const now = new Date();
    const newIdea = {
      ...idea,
      id: Date.now(),
      createdDate: now.toISOString().split("T")[0],
      createdTime: now.toTimeString().split(" ")[0],
    };
    setStoredIdeas((pre) => [...pre, newIdea]);
  };

  // ------------------------------------ Delete Idea -------------------------
  const deleteIdea = (id) => {
    const newIdeas = storedIdeas.filter((idea) => idea.id !== id);
    if (confirm("Are you sure want to delete this idea")) {
      setStoredIdeas(newIdeas);
      const newSearchedData = searchedData.filter((idea) => idea.id != id);
      setSearchedData(newSearchedData);
    }
  };

  const props = {
    addIdea,
    deleteIdea,
    storedIdeas,
    searchedData,
    setSearchedData,
    search,
    setSearch,
  };

  return (
    <GlobalContentIdeaContextCreated.Provider value={props}>
      {children}
    </GlobalContentIdeaContextCreated.Provider>
  );
}
export default GlobalContentIdeaContext;
