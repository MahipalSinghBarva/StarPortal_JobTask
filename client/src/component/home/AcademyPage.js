import React from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import Curocual from "./Curocual";
import DisctonaryPaage from "./DisctonaryPaage";
import CardBar from "./CardBar";
import LuckyDrow from "./LuckyDrow";
import RewardInfo from "./RewardInfo";

const AcademyPage = () => {
  return (
    <>
      <div className="bg-black h-auto">
        <div className="flex h-full w-auto bg-black">
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
        <div className="flex h-screen  w-auto bg-black">
          <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
            <LuckyDrow />
          </div>

          {/* <div className="card bg-base-300 rounded-box grid  flex-grow place-items-center ">
            <RewardInfo />
          </div> */}
        </div>
      </div>
      <div className="h-screen">
        <Curocual />

        <DisctonaryPaage />
      </div>
    </>
  );
};

export default AcademyPage;
