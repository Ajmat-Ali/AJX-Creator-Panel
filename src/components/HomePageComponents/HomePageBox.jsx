export default function HomePageBox({ item }) {
  const { Icon, title, description, accent, size } = item;

  return (
    <div className="w-3/12 min-w-[260px] bg-white rounded-2xl p-8 flex flex-col gap-6 text-center shadow-md hover:shadow-xl transition max-lg:w-4/12 max-md:w-6/12 max-sm:w-10/12">
      <div className="flex justify-center">
        <Icon size={36} className="p-3 bg-black text-white rounded-xl" />
      </div>

      <h2 className="text-lg font-bold text-gray-900">{title}</h2>

      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
        <span className="block mt-3 font-medium text-gray-800">{accent}</span>
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
