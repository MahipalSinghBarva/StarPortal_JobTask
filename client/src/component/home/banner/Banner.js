import React from "react";
import image from "../../asset/intract-academy-background-5547a705.png";
import image1 from "../../asset/academy-animated-logo-57b2ae61.gif";

const Banner = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-no-repeat flex"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="relative mx-auto max-w-screen-xl sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="text-center sm:text-left">
            <img className="w-40 sm:w-60 md:w-72 mx-auto sm:mx-0 mix-blend-screen" src={image1} />
            <p className="mt-4 text-white sm:text-xl/relaxed">
              Intract users{" "}
              <span className="text-gray-500">
                have together made more than
              </span>{" "}
              $100 million <span className="text-gray-500">in web3.</span>
              <br />
              <span className="text-gray-500">Join them and</span> learn how to
              earn crypto!
            </p>

            <div className="mt-8 flex justify-center sm:justify-start">
              <a
                href="#"
                className="block w-full rounded bg-violet-800 px-6 py-3 text-sm font-medium text-white shadow focus:outline-none sm:w-auto sm:px-12 sm:py-3 sm:text-base lg:px-20 lg:py-3 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                Get Started ->
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
