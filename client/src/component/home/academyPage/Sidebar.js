import React, { useState } from "react";
import image from "../../asset/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png";
import Img1 from "../../asset/Img1.png";
import Img2 from "../../asset/Img2.jpg";
import Img3 from "../../asset/Img3.jpg";
import checklist from "../../asset/checklist.png";
import doller from "../../asset/dollar.png";

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="w-full h-screen py-10 bg-black ">
      <article className="py-5  border ml-40 hover:bg-gray-800 rounded-lg border-gray-700 bg-gray-900 w-2/3 h-52  backdrop-opacity-5 bg-blend-screen flex flex-col ">
        <div className="flex items-center  px-10">
          <div className="flex flex-row justify-between gap-10">
            <img
              alt=""
              src={image}
              className="w-40 h-44 object-cover rounded-lg py-2 px-2 bg-gray-600"
            />

            <div className="flex flex-col mt-3">
              <h3 className="text-2xl font-medium text-white">
                Basics of Crypto
              </h3>
              <p className="text-gray-400">
                The safest and easiest place to start <br />
                your crypto journey!
              </p>
              <hr className="w-80 mt-5" />
              <div className="flex border w-24 h-10  bg-gray-800  rounded-full mt-2 justify-center items-center">
                <img className="w-5 h-5" src={doller} />
                <p className=" text-orange-200">1490XPs</p>
              </div>
            </div>
            <div className="">
              <button
                className="mt-4 w-11 text-left text-lg text-white bg-gray-800 py-2 px-4 rounded-lg hover:bg-gray-700 focus:outline-none border"
                onClick={handleDropdownToggle}
              >
                {isDropdownOpen ? "^" : "^"}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2 mix-blend-screen">
          {isDropdownOpen && (
            <div className="mt-4 w-full">
              <div className="flex h-full rounded-lg border border-gray-700 p-4 hover:bg-gray-700 bg-gray-800">
                <a href="#" className=" ">
                  <img className="h-26 w-40 mx-5 mt-2 rounded-xl" src={Img1} />
                </a>
                <div className="w-auto">
                  <p className="mt-1 text-2xl font-medium text-gray-300">
                    #2: Setting up your own web...
                  </p>
                  <hr className="my-5 w-full" />
                  <div className="flex">
                    <p className="mt-1 text-xm font-medium text-gray-300">
                      8 Tasks
                    </p>
                    <span
                      role="progressbar"
                      aria-labelledby="ProgressLabel"
                      aria-valuenow="50"
                      className="block rounded-full bg-gradient-to-t from-gray-800 to-gray-500 px-7 m-2"
                    >
                      <span className="block rounded-full bg-gray-600 w-28"></span>
                    </span>
                    <img className="w-8" src={checklist} />
                  </div>
                </div>
              </div>

              <div className="flex h-full rounded-lg border border-gray-700 p-4 mt-2 hover:bg-gray-700 bg-gray-800">
                <a href="#" className=" ">
                  <img className="h-26 w-40 mx-5 mt-2 rounded-xl" src={Img2} />
                </a>
                <div className="w-auto">
                  <p className="mt-1 text-2xl font-medium text-gray-300">
                    #2: Setting up your own web...
                  </p>
                  <hr className="my-5 w-full" />
                  <div className="flex">
                    <p className="mt-1 text-xm font-medium text-gray-300">
                      8 Tasks
                    </p>
                    <span
                      role="progressbar"
                      aria-labelledby="ProgressLabel"
                      aria-valuenow="50"
                      className="block rounded-full bg-gradient-to-t from-gray-800 to-gray-500 px-7 m-2"
                    >
                      <span className="block rounded-full bg-gray-600 w-28"></span>
                    </span>
                    <img className="w-8" src={checklist} />
                  </div>
                </div>
              </div>

              <div className="flex h-full rounded-lg border border-gray-700 p-4 mt-2 hover:bg-gray-700 bg-gray-800">
                <a href="#" className=" ">
                  <img className="h-26 w-40 mx-5 mt-2 rounded-xl" src={Img3} />
                </a>
                <div className="w-auto">
                  <p className="mt-1 text-2xl font-medium text-gray-300">
                    #2: Setting up your own web...
                  </p>
                  <hr className="my-5 w-full" />
                  <div className="flex">
                    <p className="mt-1 text-xm font-medium text-gray-300">
                      8 Tasks
                    </p>
                    <span
                      role="progressbar"
                      aria-labelledby="ProgressLabel"
                      aria-valuenow="50"
                      className="block rounded-full bg-gradient-to-t from-gray-800 to-gray-500 px-7 m-2"
                    >
                      <span className="block rounded-full bg-gray-600 w-28"></span>
                    </span>
                    <img className="w-8" src={checklist} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default Sidebar;