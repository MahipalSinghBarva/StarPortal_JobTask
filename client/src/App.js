import React from "react";
import Header from "./component/header/Header.js";
import Banner from "./component/home/banner/Banner.js";
import Footer from "./component/footer/Footer.js";
import AcademyPage from "./component/home/academyPage/AcademyPage";
import Curocual from "./component/home/VideoCard/Curocual.js";
import DisctonaryPaage from "./component/home/DisctonaryPaage.js";
import LuckyDrow from "./component/home/LuckyDrow.js";
import RewardInfo from "./component/home/RewardInfo.js";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <AcademyPage />
      <div className="flex flex-col md:flex-row h-full bg-black">
        <div className="card bg-black rounded-lg grid flex-grow place-items-center">
          <LuckyDrow />
        </div>

        <div className="card bg-black rounded-lg grid flex-grow mt-4 md:mt-4 md:ml-4 place-items-center max-sm:sm:m-5">
          <RewardInfo />
        </div>
      </div>

      <Curocual />
      <DisctonaryPaage />

      <Footer />
    </div>
  );
};

export default App;
