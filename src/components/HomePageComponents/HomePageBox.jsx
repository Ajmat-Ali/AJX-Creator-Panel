export default function HomePageBox({ item }) {
  const { Icon, title, description, accent, size } = item;

  return (
    <div className="border border-red-600 w-3/12 py-5 px-7 flex flex-col gap-y-10  | max-lg:px-5 max-lg:w-4/12 | max-md:w-6/12 | max-sm:w-7/12 | max-sm30:w-9/12 max-sm30:gap-y-5 max-sm22:w-12/12">
      <div className="">
        <Icon
          size={size}
          className="text-center m-auto font-bold bg-gray-600 rounded-md"
          color="white"
        />
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-900">
        {description} <span className="block mt-4">{accent}</span>
      </p>
    </div>
  );
}

import { GoPencil } from "react-icons/go";
import { IoIosCheckboxOutline } from "react-icons/io";
import { BsGraphUpArrow } from "react-icons/bs";

export const box = [
  {
    title: "Content Idea Organizer",
    Icon: GoPencil,
    size: 40,
    description: "Tag-based ideas management for all your platforms.",
    accent: "Tag-baist oi-dee-uhz man-ij-mənt fuh awl yaw plat-fawms.",
  },
  {
    title: "Auto Scheduling",
    Icon: IoIosCheckboxOutline,
    size: 40,
    description: " Plan and Auto publish posts with reminders",
    accent: "Plan and aw-to pub-lish powsts wiv ri-mai-nduhz.",
  },
  {
    title: "Growth Tracker",
    Icon: BsGraphUpArrow,
    size: 40,
    description: "Visual analytics across platforms in one dashboard.",
    accent: "Vizh-oo-uhl an-a-lit-iks uh-kross plat-fawms in wun dash-bawd.",
  },
];
