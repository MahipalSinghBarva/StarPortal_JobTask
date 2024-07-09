import React, { useEffect, useState } from "react";
import img from "../asset/kol-reward-12e6ae06.gif";



const LuckyDrow = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-010-10") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div className=" h-screen flex flex-col justify-center items-center  ">
      <div className="text-center border py-5 px-4  flex flex-col rounded-md bg-gray-800 ">
        <h2 className="text-xl text-gray-400">Reward unlocks in</h2>
        <div className="flex justify-center m-2 space-x-4 border w-96 py-3 rounded-xl bg-black/50">
          <div>
            <span className="block text-3xl text-white">
              {timeLeft.days || 0}
            </span>
            <span className="text-red-600">Days</span>
          </div>
          <div>
            <span className="block text-3xl text-white">
              {timeLeft.hours || 0}
            </span>
            <span className="text-red-600">Hrs</span>
          </div>
          <div>
            <span className="block text-3xl text-white">
              {timeLeft.minutes || 0}
            </span>
            <span className="text-red-600">Mins</span>
          </div>
          <div>
            <span className="block text-3xl text-white">
              {timeLeft.seconds || 0}
            </span>
            <span className="text-red-600">Sec</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 my-5 rounded border py-5 px-5">
        <div className="">
          <img className="w-96" src={img} />
        </div>
        <div className="flex  text-gray-500 justify-between">
          <p>Exclusive Community</p>
          <p className="text-white">Earndrop</p>
        </div>
        <hr className="mt-1"/>

        <div className="text-gray-600">
          <p>Complete all Essential quests</p>
          <p>Complete at least 1 Alpha Hub quest today</p>
          <button className="border px-20 py-3 my-2 mx-16 bg-gray-500 text-white rounded-md">Claim Now -></button>
        </div>
      </div>
    </div>
  );
};

export default LuckyDrow;
