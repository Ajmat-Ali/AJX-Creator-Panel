import { Fragment } from "react";
import HomePageBox, { box } from "./HomePageBox";
export default function WhyChoose() {
  return (
    <div className="w-11/12 mx-auto py-16 mb-16 flex flex-col gap-10">
      <h1 className="text-3xl font-extrabold text-center text-gray-900">
        Why Choose AjX Creator Panel?
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {box.map((item) => (
          <Fragment key={item.title}>
            <HomePageBox item={item} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
