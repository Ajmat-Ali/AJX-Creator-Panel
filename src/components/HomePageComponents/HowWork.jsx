import { PiUserCircleDuotone } from "react-icons/pi";
import { GrMultiple } from "react-icons/gr";
import { LuCalendarCheck } from "react-icons/lu";
import { BiRightArrowCircle } from "react-icons/bi";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { BiSolidDownArrowAlt } from "react-icons/bi";
import { BiDownArrowAlt } from "react-icons/bi";

export default function HowWork() {
  return (
    <div className="border w-11/12 m-auto py-8 mb-10">
      <div>
        <h1 className="text-2xl text-center font-bold">How It Works</h1>
      </div>
      <div className="border flex text-center gap-10 justify-evenly mt-8 | max-lg:justify-center max-lg:gap-5 | max-md:flex-col max-md:items-center max-md:gap-7 | max-sm:gap-5 max-sm30:gap-x-2  max-sm22:gap-x-0">
        {cards.map((card, ind, cards) => {
          return <HowWorkCard card={card} key={card.id} />;
        })}
      </div>
    </div>
  );
}

function HowWorkCard({ card }) {
  if (card.type === "arrow") {
    return (
      <div className="flex flex-col justify-center items-center gap-y-2 m-2">
        <ResponsiveArrow />
      </div>
    );
  }
  const { Icon, size, title, subTitle } = card;
  return (
    <div className="flex flex-col justify-center items-center gap-y-2 w-3/12 | max-sm:w-4/12 | max-sm30:w-5/12 | max-sm22:w-8/12">
      <div>{<Icon size={size} />}</div>
      <p className="text-md">{title} </p>
      <p className="text-sm">{subTitle}</p>
    </div>
  );
}

function ResponsiveArrow() {
  return (
    <>
      <MdOutlineArrowRightAlt size={50} className="max-md:hidden" />
      <BiDownArrowAlt size={40} className="md:hidden" />
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
