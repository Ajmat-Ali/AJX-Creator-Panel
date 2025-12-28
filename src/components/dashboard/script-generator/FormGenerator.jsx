import { FiZap } from "react-icons/fi";
// import { useState } from "react";
import ToneButton from "./ToneButton";
import validateGenerate from "./ValidateGenerate";
import { useContext } from "react";
import { LoginContext } from "../../context/createContext";
import scriptGenerator from "./scriptGenerator";

function FormGenerator({ idea, setIdea, err, setErr, setScript }) {
  const {
    user: {
      account: { firstName },
    },
  } = useContext(LoginContext);
  // -------------------------------------- Handle Tone --------------------------------------
  const handleTone = (e, value) => {
    const { name } = e.target;
    setIdea((pre) => {
      return { ...pre, [name]: value };
    });
  };

  // -------------------------------------- Handle Idea ----------------------------------------
  const handleIdea = (e) => {
    const { value, name } = e.target;

    setIdea((pre) => {
      return { ...pre, [name]: value };
    });
  };

  // -------------------------------------- Validate Idea and Generate Script -------------------
  const result = validateGenerate(idea, setErr);
  const handleGenerate = () => {
    if (!result()) {
      const generatedScriptVal = scriptGenerator(idea, firstName);

      setIdea((pre) => {
        return { ...pre, ["script"]: generatedScriptVal };
      });
      alert("Your script has been generated!");
      return;
    }
  };

  return (
    <div className="lg:col-span-1 ">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 max-md:text-center max-md:mb-8">
        Generate Script
      </h2>

      <div className="mb-6">
        <label
          htmlFor="contentIdea"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Based on Content Idea
        </label>
        <input
          type="text"
          id="contentIdea"
          name="title"
          value={idea.title}
          onChange={handleIdea}
          className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your content idea"
        />
        <span className="text-red-500 text-sm">{err.title && err.title}</span>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Script Tone
        </label>
        <div className="grid grid-cols-2 gap-2">
          <ToneButton
            idea={idea}
            handleTone={handleTone}
            text={"Professional"}
            val={"professional"}
          />
          <ToneButton
            idea={idea}
            handleTone={handleTone}
            text={"Casual"}
            val={"casual"}
          />
          <ToneButton
            idea={idea}
            handleTone={handleTone}
            text={"Funny"}
            val={"funny"}
          />
          <ToneButton
            idea={idea}
            handleTone={handleTone}
            text={"Inspirational"}
            val={"inspirational"}
          />
        </div>
        <span className="text-red-500 text-sm">{err.tone && err.tone}</span>
      </div>

      <div className="mb-6">
        <label
          htmlFor="scriptLength"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Script Length
        </label>
        <select
          id="scriptLength"
          name="length"
          onChange={handleIdea}
          value={idea.length}
          className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4
          py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="short">Short (30-60 seconds)</option>
          <option value="medium">Medium (1-3 minutes)</option>
          <option value="long">Long (3-5 minutes)</option>
        </select>
      </div>

      <button
        onClick={handleGenerate}
        className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center cursor-pointer"
      >
        <span className="mr-2 w-4 h-4">
          <FiZap />
        </span>
        Generate Script
      </button>
    </div>
  );
}
export default FormGenerator;
