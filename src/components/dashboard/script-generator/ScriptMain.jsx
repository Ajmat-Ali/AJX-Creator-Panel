import FormGenerator from "./FormGenerator";
import GeneratedScript from "./GeneratedScript";

function ScriptMain({ idea, setIdea, err, setErr, message, setMessage }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8  | max-sm22:p-3">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
        <FormGenerator
          idea={idea}
          setIdea={setIdea}
          err={err}
          setErr={setErr}
        />
        <GeneratedScript
          idea={idea}
          setIdea={setIdea}
          err={err}
          message={message}
          setMessage={setMessage}
        />
      </div>
    </div>
  );
}

export default ScriptMain;
