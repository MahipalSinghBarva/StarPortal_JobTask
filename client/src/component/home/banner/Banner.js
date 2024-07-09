import React from "react";
import image from "../../asset/intract-academy-background-5547a705.png";
import image1 from "../../asset/academy-animated-logo-57b2ae61.gif";

const Banner = () => {
  return (
    <div>
      <section
        className="relative  bg-cover bg-center bg-no-repeat flex"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="relative mx-auto max-w-screen-xl sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className=" text-center ltr:sm:text-left rtl:sm:text-right">
            <img className="w-72 mix-blend-screen" src={image1} />
            <p className="mt-4  text-white sm:text-xl/relaxed">
              Intract users{" "}
              <span className="text-gray-500">
                have together made more than
              </span>{" "}
              $100 million <span className="text-gray-500">in web3.</span>
              <br />
              <span className="text-gray-500">Join them and</span> learn how to
              earn crypto!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-violet-800 px-20 py-3 text-sm font-medium text-white shadow focus:outline-none  sm:w-auto ml-40 hover:-translate-y-1 hover:scale-110  duration-30"
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
