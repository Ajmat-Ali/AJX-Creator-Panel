import { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { ScheduleContext } from "../../context/createContext";
function SchedulePostHeader() {
  const { modal, setModal } = useContext(ScheduleContext);

  const handleModal = () => {
    setModal(true);
  };
  return (
    <div className="flex justify-between items-center flex-wrap mb-8 | max-sm30:flex-col max-sm30:gap-y-10">
      <h1 className="text-3xl font-bold text-gray-800 | max-sm30:text-2xl-">
        Scheduled Posts
      </h1>
      <button
        onClick={handleModal}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center cursor-pointer"
      >
        <span className="mr-2 w-4 h-4">
          <AiOutlinePlus />
        </span>
        Schedule Post
      </button>
    </div>
  );
}
export default SchedulePostHeader;
