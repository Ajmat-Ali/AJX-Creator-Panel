import { useEffect, useState } from "react";
import AddIdeaModel from "./AddIdeaModel";
import ContentIdeaMain from "./ContentIdeaMain";
function ContentIdea() {
  const [modal, setModal] = useState(false);
  const [storedIdeas, setStoredIdeas] = useState(
    () => JSON.parse(localStorage.getItem("ideas")) || []
  );
  useEffect(() => {
    localStorage.setItem("ideas", JSON.stringify(storedIdeas));
  }, [storedIdeas]);

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

  return (
    <div className="flex border-3 border-green-400">
      <ContentIdeaMain
        modal={modal}
        setModal={setModal}
        storedIdeas={storedIdeas}
      />
      <AddIdeaModel modal={modal} setModal={setModal} addIdea={addIdea} />
    </div>
  );
}

export default ContentIdea;
