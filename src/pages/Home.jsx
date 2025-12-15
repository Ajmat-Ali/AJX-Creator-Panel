import { Fragment } from "react";
// ----------------------------------------------------------- Local Import ---------------------------------
import Signin from "./Signin";
import HomePageBox from "../components/HomePageComponents/HomePageBox";
// import { box } from "../components/HomePageBox";
import Header from "../components/HomePageComponents/Header";
import Main from "../components/HomePageComponents/Main";
import WhyChoose from "../components/HomePageComponents/WhyChoose";
import HowWork from "../components/HomePageComponents/HowWork";
import ReadyToCreate from "../components/HomePageComponents/ReadyTocreate";
import Footer from "../components/HomePageComponents/Footer";

function Home() {
  return (
    <div className="py-4">
      <Header />
      <Main />
      <WhyChoose />
      <HowWork />
      <ReadyToCreate />
      <Footer />
    </div>
  );
}

export default Home;
