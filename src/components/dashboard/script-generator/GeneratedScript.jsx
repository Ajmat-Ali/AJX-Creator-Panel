import { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { IoCopyOutline } from "react-icons/io5";
import generateScript from "./scriptGenerator";
function GeneratedScript({ script, setScript }) {
  const handleChange = (e) => {
    const { value } = e.target;
    setScript(value);
  };

  return (
    <div className="lg:col-span-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Generated Script
        </h2>
        <div className="flex space-x-2">
          <button
            className="text-gray-500 hover:text-gray-700 p-2 rounded-lg bg-gray-100 cursor-pointer"
            title="Copy to clipboard"
          >
            <span data-feather="copy" className="w-4 h-4">
              <IoCopyOutline />
            </span>
          </button>
          <button
            className="text-gray-500 hover:text-gray-700 p-2 rounded-lg bg-gray-100 cursor-pointer"
            title="Clear script"
          >
            <span data-feather="trash-2" className="w-4 h-4">
              <BsTrash />
            </span>
          </button>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 h-96 overflow-y-auto">
        <textarea
          id="generatedScript"
          onChange={handleChange}
          className="w-full h-full bg-transparent focus:outline-none resize-none"
          placeholder="Your generated script will appear here..."
          value={script}
        ></textarea>
      </div>

      {/* <div id="loadingIndicator" className="hidden mt-4 text-center">
        <div className="inline-flex items-center">
          <div className="spinner border-2 border-blue-500 border-t-transparent rounded-full w-5 h-5 mr-2"></div>
          <span className="text-gray-600">Generating your script...</span>
        </div>
      </div> */}
    </div>
  );
}

export default GeneratedScript;
