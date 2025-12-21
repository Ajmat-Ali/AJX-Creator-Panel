import { useState } from "react";
import FormGenerator from "./FormGenerator";
import GeneratedScript from "./GeneratedScript";

function ScriptMain() {
  const [idea, setIdea] = useState({ title: "", tone: "", length: "medium" });
  const [err, setErr] = useState({});
  const [script, setScript] = useState("");

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <FormGenerator
          idea={idea}
          setIdea={setIdea}
          err={err}
          setErr={setErr}
          setScript={setScript}
        />
        <GeneratedScript script={script} setScript={setScript} />
      </div>
    </div>
  );
}

export default ScriptMain;
