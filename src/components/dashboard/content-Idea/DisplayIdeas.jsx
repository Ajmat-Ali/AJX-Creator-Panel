// --------------------------------------------------------------------- Local Import
import { useContext } from "react";
import Idea from "./Idea";
import ShimmerIdea from "./ShimmerIdea";
import { GlobalContentIdeaContextCreated } from "../../context/createContext";

export default function DisplayIdeas() {
  const { storedIdeas, searchedData } = useContext(
    GlobalContentIdeaContextCreated
  );

  if (storedIdeas?.length < 1) {
    return <ShimmerIdea />;
  }
  let displayData = searchedData?.length < 1 ? storedIdeas : searchedData;

  return (
    <>
      {displayData?.map((idea) => {
        return <Idea idea={idea} key={idea.id} />;
      })}
    </>
  );
}
