import React from "react";
import Sidebar from "../academyPage/Sidebar";
import RewardInfo from "../RewardInfo";

import CardBar from "../academyPage/CardBar";
import LuckyDrow from "../LuckyDrow";
import "./AcademyPage.css";

const AcademyPage = () => {
  return (
    <>
      <div className="bg-black h-auto main-div">
        <div className="flex h-full w-auto bg-black div-con-1">
          <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
            <Sidebar />
          </div>

          <div className="card bg-base-300 rounded-box grid  flex-grow place-items-center mt-96">
            <CardBar />
          </div>
        </div>

        <div className="flex h-full w-auto bg-black">
          <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center mt-96 ml-44">
            <CardBar />
          </div>

          <div className="card bg-base-300 rounded-box grid  flex-grow place-items-center mt-36">
            <Sidebar />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default AcademyPage;
