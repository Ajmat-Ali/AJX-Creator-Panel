import { useEffect, useState } from "react";

// ------------------------------------------------------ Local Import ------------------
import AddIdeaModel from "./AddIdeaModel";
import ContentIdeaMain from "./ContentIdeaMain";
import { IdeaContext } from "../../context/createContext";

function ContentIdea() {
  const [modal, setModal] = useState(false);

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

  let props = {
    deleteIdea,
    addIdea,
    modal,
    setModal,
    storedIdeas,
    searchedData,
    setSearchedData,
    search,
    setSearch,
  };

  return (
    <div className="flex">
      <IdeaContext.Provider value={props}>
        <ContentIdeaMain />
        <AddIdeaModel />
      </IdeaContext.Provider>
    </div>
  );
}

export default ContentIdea;
