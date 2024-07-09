import React from "react";
import img from "../asset/bitcoin-what-is-crypto-scaled.jpg";
import img1 from "../asset/book_4386873.png";

const DisctonaryPaage = () => {
  return (
    <div className="bg-black">
      <hr className="bg-gray-600 mb-5" />

      <div className="flex flex-col items-center">
        <h2 className="text-white text-4xl">Crypto Dictionary</h2>
        <p className="py-3 text-gray-500">
          Your one-stop to catch up on all crypto terms
        </p>
      </div>

      <section
        className="relative bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-96 lg:items-center lg:px-8">
          <div className="flex justify-between  w-full pt-72">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 className="text-3xl font-extrabold text-gray-400 sm:text-2xl">
                Web3 + Degen Glossary
                <strong className="block font-extrabold text-green-300">
                  {" "}
                  Your own crypto dictionary{" "}
                </strong>
              </h1>
            </div>
            <div>
              <img src={img1} className="" />
            </div>
          </div>
        </div>
      </section>
      <hr className="bg-gray-700 mt-10" />
    </div>
  );
};

export default DisctonaryPaage;
