import { useEffect, useState } from "react";

// ------------------------------------------------------ Local Import ------------------
import AddIdeaModel from "./AddIdeaModel";
import ContentIdeaMain from "./ContentIdeaMain";
import { IdeaContext } from "../../context/createContext";

function ContentIdea() {
  const [modal, setModal] = useState(false);

  let props = {
    modal,
    setModal,
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
