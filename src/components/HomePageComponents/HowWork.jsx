import { PiUserCircleDuotone } from "react-icons/pi";
import { GrMultiple } from "react-icons/gr";
import { LuCalendarCheck } from "react-icons/lu";
import { BiRightArrowCircle } from "react-icons/bi";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { BiSolidDownArrowAlt } from "react-icons/bi";
import { BiDownArrowAlt } from "react-icons/bi";

export default function HowWork() {
  return (
    <div className="w-11/12 mx-auto py-16 mb-20">
      <h1 className="text-3xl font-extrabold text-center text-gray-900">
        How It Works
      </h1>

      <p className="text-center text-gray-600 mt-3 max-w-xl mx-auto">
        Get started in minutes. Follow these simple steps to manage your content
        like a pro.
      </p>

      <div className="flex items-center justify-center gap-10 mt-14 max-lg:gap-6 max-md:flex-col">
        {cards.map((card) => (
          <HowWorkCard card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
}

function HowWorkCard({ card }) {
  if (card.type === "arrow") {
    return (
      <div className="flex items-center justify-center text-gray-400">
        <ResponsiveArrow />
      </div>
    );
  }

  const { Icon, size, title, subTitle } = card;

  return (
    <div className="flex flex-col items-center text-center gap-4 w-3/12 max-md:w-8/12">
      <div className="p-4 rounded-2xl bg-black text-white shadow-lg">
        <Icon size={size} />
      </div>

      <h3 className="text-lg font-bold text-gray-900">{title}</h3>

      <p className="text-sm text-gray-600 leading-relaxed">{subTitle}</p>
    </div>
  );
}

function ResponsiveArrow() {
  return (
    <>
      <MdOutlineArrowRightAlt
        size={48}
        className="text-gray-500 max-md:hidden"
      />
      <BiDownArrowAlt size={36} className="text-gray-500 md:hidden" />
    </>
  );
}

const cards = [
  {
    type: "step",
    Icon: PiUserCircleDuotone,
    title: "Sign Up",
    subTitle: "with one click",
    size: 40,
    id: 1,
  },
  {
    type: "arrow",
    id: 2,
  },
  {
    type: "step",
    Icon: GrMultiple,
    title: "Connects Your Platforms",
    subTitle: "",
    size: 30,
    id: 3,
  },
  {
    type: "arrow",
    id: 4,
  },
  {
    type: "step",
    Icon: LuCalendarCheck,
    title: "Start planning and tracking",
    subTitle: "",
    size: 30,
    id: 5,
  },
];
