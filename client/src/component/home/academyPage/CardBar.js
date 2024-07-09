import React from "react";
import img from "../../asset/cat_intract.png";
import unlockImg from "../../asset/locked.png";
import img2 from "../../asset/checklist.png";
import "./cardBar.css"

const CardBar = () => {
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <img
          className="img-con w-10 ml-16 mb-2 py-2 px-2 border rounded-full bg-gray-800"
          src={img2}
        />
        <figure className="flex items-end">
          <img
            className="h-44 py-3 px-3 border bg-gray-800 rounded-lg relative"
            src={img}
            alt="cat"
          />
          <div className=" px-3  py-3 border w-12 rounded-full bg-gray-800 absolute ml-16">
            <img src={unlockImg} />
          </div>
        </figure>

        <div className="card-body">
          <h2 className="card-title text-white text-xl">
            Intract Certified: Learner NFT!
          </h2>
          <p className="text-gray-500 text-xm">
            Your crypto black-belt <br />
            certificate
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary text-gray-500 border py-2 px-2 w-44 rounded-md">
              Claim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBar;