import { useRef } from "react";
import { BsTrash } from "react-icons/bs";
import { IoCopyOutline } from "react-icons/io5";
function GeneratedScript({ idea, setIdea, err, message, setMessage }) {
  const copyRef = useRef(null);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setIdea((pre) => {
      return { ...pre, [name]: value };
    });
  };
  const handleClearScript = () => {
    if (confirm("Are you sure want to clear this script")) {
      setIdea({
        title: "",
        tone: "",
        length: "medium",
        script: "",
      });
    }
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(idea.script)
      .then(() => {
        setMessage("Copied to Clipboard!");
      })
      .catch(() => {
        setMessage("Copy failed");
      })
      .finally(() => {
        if (copyRef.current) {
          clearTimeout(copyRef.current);
        }
        copyRef.current = setTimeout(() => {
          setMessage("");
        }, 1500);
      });
  };

  return (
    <div className="lg:col-span-2">
      <div
        className={`${
          message ? "block" : "hidden"
        } fixed font-semibold top-30 right-10 bg-gray-900 text-white p-1 px-2 rounded-xl`}
      >
        {message}
      </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Generated Script
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={handleCopy}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-lg bg-gray-100 cursor-pointer"
            title="Copy to clipboard"
          >
            <span data-feather="copy" className="w-4 h-4">
              <IoCopyOutline />
            </span>
          </button>
          <button
            onClick={handleClearScript}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-lg bg-gray-100 cursor-pointer"
            title="Clear script"
          >
            <span data-feather="trash-2" className="w-4 h-4">
              <BsTrash />
            </span>
          </button>
        </div>
      </div>

      <span className="text-red-500 text-sm">{err.script && err.script}</span>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 h-96 overflow-y-auto">
        <textarea
          id="generatedScript"
          name="script"
          onChange={handleChange}
          className="w-full h-full bg-transparent focus:outline-none resize-none"
          placeholder="Your generated script will appear here..."
          value={idea.script}
        ></textarea>
      </div>
    </div>
  );
}

export default GeneratedScript;
