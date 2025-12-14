import { Fragment } from "react";
import HomePageBox, { box } from "./HomePageBox";
export default function WhyChoose() {
  return (
    <div className="border-3 border-blue-500  w-11/12 m-auto py-8 mb-10 flex flex-col">
      <div>
        <h1 className="text-2xl font-bold text-center">
          Why Choose AjX Creator Panel?
        </h1>
      </div>
      <div className="flex text-center gap-10 justify-evenly mt-8 max-lg:justify-center flex-wrap | max-md:flex-col max-md:items-center | max-sm30:gap-x-2  max-sm22:gap-x-0">
        {box.map((item) => {
          return (
            <Fragment key={item.title}>
              <HomePageBox item={item} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
