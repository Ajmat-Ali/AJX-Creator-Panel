import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import ValidateIdea from "./ValidateIdea";
function AddIdeaModel({ modal, setModal, addIdea }) {
  const [idea, setIdea] = useState({ title: "", description: "" });
  const [err, setErr] = useState({});
  const { title, description } = idea;

  const handleModal = () => {
    setModal(false);
    setIdea({ title: "", description: "" });
  };

  const handleChangeIdea = (e) => {
    const { name, value } = e.target;
    setIdea((pre) => {
      return { ...pre, [name]: value };
    });
  };

  const result = ValidateIdea(idea, setErr);

  const handleSave = (e) => {
    e.preventDefault();
    if (!result()) {
      addIdea(idea);
      setIdea({ title: "", description: "" });
      alert("Idea Submitted");
      setModal(false);
      return;
    }
  };
  return (
    <div
      id="addIdeaModal"
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        modal ? "flex" : "hidden"
      }`}
    >
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={handleModal}
      ></div>
      <div className="relative z-10 bg-white rounded-xl p-6 w-full max-w-md | max-sm:w-11/12 |">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800 |  max-sm22:text-lg">
            Add New Content Idea
          </h2>
          <button
            onClick={handleModal}
            className="text-gray-500 hover:text-gray-700 cursor-pointer text-3xl | max-sm22:text-3xl"
          >
            <span>
              <RxCross2 />
            </span>
          </button>
        </div>
        <form id="addIdeaForm" className="space-y-4">
          <div>
            <label
              htmlFor="ideaTitle"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="ideaTitle"
              name="title"
              value={title}
              onChange={handleChangeIdea}
              className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <span className="text-red-500 text-sm">
              {err.title && err.title}
            </span>
          </div>
          <div>
            <label
              htmlFor="ideaDescription"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="ideaDescription"
              rows="4"
              name="description"
              value={description}
              onChange={handleChangeIdea}
              className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <span className="text-red-500 text-sm">
              {err.description && err.description}
            </span>
          </div>
          <div className="flex justify-end space-x-3 flex-wrap gap-y-5 ">
            <button
              type="button"
              onClick={handleModal}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSave}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer"
            >
              Save Idea
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddIdeaModel;
