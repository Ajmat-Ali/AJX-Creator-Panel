import { Fragment } from "react";
// ----------------------------------------------------------- Local Import ---------------------------------
import Signin from "./Signin";
import HomePageBox from "../components/HomePageComponents/HomePageBox";
// import { box } from "../components/HomePageBox";
import Header from "../components/HomePageComponents/Header";
import Main from "../components/HomePageComponents/Main";
import WhyChoose from "../components/HomePageComponents/WhyChoose";
import HowWork from "../components/HomePageComponents/HowWork";

function Home() {
  return (
    <div>
      <Header />
      <Main />
      <WhyChoose />
      <HowWork />
      {/* <div className="border-3 border-blue-500  w-11/12 m-auto py-8 mb-10 flex flex-col">
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
      </div> */}
    </div>
  );
}

export default Home;
