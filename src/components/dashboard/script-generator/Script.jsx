import { useEffect, useState } from "react";
import Header from "./Header";
import ScriptMain from "./ScriptMain";
import ScriptShimmer from "./ScriptShimmer";
import DisplaySavedScripts from "./DisplaySaveScripts";

function Script() {
  const [idea, setIdea] = useState({
    title: "",
    tone: "",
    length: "medium",
    script: "",
  });

  const [err, setErr] = useState({});
  const [savedScript, setSavedScript] = useState(
    JSON.parse(localStorage.getItem("scripts")) || []
  );

  useEffect(() => {
    localStorage.setItem("scripts", JSON.stringify(savedScript));
  }, [savedScript]);

  // --------------------------------------------------- Add Script -----------------------
  const addScript = (idea) => {
    const now = new Date();
    const newIdea = {
      ...idea,
      id: Date.now(),
      createdDate: now.toISOString().split("T")[0],
      createdTime: now.toTimeString().split(" ")[0],
    };

    setSavedScript((pre) => {
      return [...pre, newIdea];
    });
  };

  // --------------------------------------------------- Delete Script -----------------------
  const deleteScript = (id) => {
    if (confirm("Are you sure want to delete this script")) {
      const newScripts = savedScript.filter((script) => script.id !== id);
      setSavedScript(newScripts);
    }
  };
  // --------------------------------------------------- Load Script -----------------------

  const loadScript = (id) => {
    const loadIdea = savedScript.find((script) => script.id === id);
    setIdea(loadIdea);
    alert("Script Loaded!");
  };

  return (
    <div className="flex">
      <main className="flex-1 p-8 mt-16 | max-sm30:p-0">
        <Header
          idea={idea}
          setIdea={setIdea}
          err={err}
          setErr={setErr}
          savedScript={savedScript}
          setSavedScript={setSavedScript}
          addScript={addScript}
        />
        <ScriptMain idea={idea} setIdea={setIdea} err={err} setErr={setErr} />
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Saved Scripts
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            id="savedScriptsContainer"
          >
            {savedScript?.length < 1 ? (
              <ScriptShimmer />
            ) : (
              savedScript?.map((script) => (
                <DisplaySavedScripts
                  script={script}
                  key={script.id}
                  deleteScript={deleteScript}
                  loadScript={loadScript}
                />
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Script;
