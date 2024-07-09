import React from "react";

const Header = () => {
  return (
    <div className="">
      <header class="bg-white dark:bg-black">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div class="flex-1 md:flex md:items-center md:gap-12">
              <a class="block text-gray-300 text-4xl " href="#">
                Intract.
              </a>
            </div>

            <div class="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" class="hidden md:block">
                <ul class="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      class="text-gray-300/75 transition hover:text-gray-500/75 dark:hover:text-white/75 text-xl"
                      href="#"
                    >
                      Explore
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-300/75 transition hover:text-gray-500/75 dark:hover:text-white/75 text-xl"
                      href="#"
                    >
                      Academy
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-300/75 transition hover:text-gray-500/75 dark:hover:text-white/75 text-xl"
                      href="#"
                    >
                      NFTs
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-300/75 transition hover:text-gray-500/75 dark:hover:text-white/75 text-xl"
                      href="#"
                    >
                      For Project
                    </a>
                  </li>
                </ul>
              </nav>

              <div class="flex items-center gap-4">
                <div class="sm:flex sm:gap-4">
                  <div class="hidden sm:flex">
                    <input
                      className="flex h-10 w-[450px] rounded-2xl bg-gray-500 px-4 py-6 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-lg"
                      type="text"
                      placeholder="Serach for ecosystems, trending quest etc."
                    ></input>

                    <div className="w-14 ml-2 h-14 rounded-full border-4 border-orange-700">
                      <span>
                        <svg
                        className="m-3"
                          width="26"
                          height="32"
                          viewBox="0 0 20 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            id="broadcast"
                            clip-path="url(#clip0_11_24061)"
                          ></g>
                          <path
                            id="Vector"
                            d="M12.3636 16H3.63636C2.67229 15.9989 1.74804 15.6154 1.06634 14.9337C0.384641 14.252 0.00115481 13.3278 0 12.3637L0 5.09095C0.00115481 4.12688 0.384641 3.20263 1.06634 2.52093C1.74804 1.83923 2.67229 1.45574 3.63636 1.45459H12.3636C13.3277 1.45574 14.252 1.83923 14.9337 2.52093C15.6154 3.20263 15.9988 4.12688 16 5.09095V12.3637C15.9988 13.3278 15.6154 14.252 14.9337 14.9337C14.252 15.6154 13.3277 15.9989 12.3636 16ZM3.63636 2.90914C3.05789 2.90971 2.50327 3.13977 2.09422 3.54881C1.68518 3.95786 1.45512 4.51248 1.45455 5.09095V12.3637C1.45512 12.9422 1.68518 13.4968 2.09422 13.9058C2.50327 14.3149 3.05789 14.5449 3.63636 14.5455H12.3636C12.9421 14.5449 13.4967 14.3149 13.9058 13.9058C14.3148 13.4968 14.5449 12.9422 14.5455 12.3637V5.09095C14.5449 4.51248 14.3148 3.95786 13.9058 3.54881C13.4967 3.13977 12.9421 2.90971 12.3636 2.90914H3.63636Z"
                            fill="#FA8922"
                            fill-opacity="0.6"
                          />
                          <path
                            id="Vector_2"
                            d="M8.0004 2.90894C7.90488 2.90904 7.81029 2.89027 7.72205 2.8537C7.63381 2.81713 7.55366 2.76349 7.48622 2.69585L6.03167 1.24131C5.89919 1.10414 5.82589 0.920431 5.82754 0.729742C5.8292 0.539054 5.90569 0.356645 6.04053 0.221802C6.17537 0.0869601 6.35778 0.0104736 6.54847 0.00881656C6.73916 0.00715952 6.92287 0.0804645 7.06003 0.212943L8.0004 1.15331L8.94076 0.212943C9.07793 0.0804645 9.26164 0.00715952 9.45233 0.00881656C9.64301 0.0104736 9.82542 0.0869601 9.96027 0.221802C10.0951 0.356645 10.1716 0.539054 10.1733 0.729742C10.1749 0.920431 10.1016 1.10414 9.96913 1.24131L8.51458 2.69585C8.44713 2.76349 8.36699 2.81713 8.27875 2.8537C8.19051 2.89027 8.09591 2.90904 8.0004 2.90894ZM3.63676 10.1817C3.46435 10.1813 3.29768 10.1196 3.16649 10.0078C3.0353 9.89589 2.94813 9.74104 2.92052 9.57085C2.89291 9.40066 2.92666 9.2262 3.01576 9.07859C3.10485 8.93097 3.24349 8.81982 3.40694 8.76494L7.77058 7.3104C7.87981 7.27336 7.99633 7.26308 8.11035 7.28042C8.22437 7.29776 8.33257 7.34221 8.42585 7.41003C8.51923 7.47746 8.59528 7.56608 8.64775 7.66862C8.70022 7.77115 8.72761 7.88467 8.72767 7.99985V8.44494L12.1342 7.3104C12.3159 7.25433 12.5122 7.2716 12.6813 7.35852C12.8503 7.44544 12.9786 7.59509 13.0387 7.77544C13.0988 7.95578 13.0859 8.15249 13.0027 8.32343C12.9196 8.49437 12.7728 8.62597 12.5939 8.69003L8.23022 10.1446C8.12088 10.1812 8.00441 10.1912 7.89043 10.1739C7.77644 10.1565 7.66822 10.1123 7.57471 10.0449C7.48119 9.97745 7.40507 9.88873 7.35263 9.78605C7.30019 9.68337 7.27294 9.56969 7.27313 9.4544V9.00931L3.86658 10.1439C3.79251 10.1688 3.7149 10.1815 3.63676 10.1817Z"
                            fill="#FA8922"
                            fill-opacity="0.6"
                          />
                        </svg>
                      </span>
                    </div>

                    <a
                      class="rounded-md bg-white px-8 ml-2 py-4 text-md font-medium h-12  hover:bg-gray-500"
                      href="#"
                    >
                      Sign In
                    </a>
                  </div>
                </div>

                <div class="block md:hidden">
                  <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
