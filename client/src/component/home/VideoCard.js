import React, { useState } from "react";
import img from "../asset/bitcoin-what-is-crypto-scaled.jpg";

const VideoCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPlaying(false);
  };

  const handlePlayButtonClick = () => {
    setIsPlaying(true);
  };

  return (
    <div>
      <div
        className="relative  mx-5 rounded-mg w-72"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="bg-gray-900 rounded-lg overflow-hidden relative ">
          {isPlaying ? (
            <iframe
              className="w-full h-96"
              src={`https://youtu.be/7fjOw8ApZ1I?si=QrUICN_f0DCBJY_R`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className=" h-96 bg-gray-600 flex items-center justify-center  hover:bg-gray-800 border border-gray-900">
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-75"
                src={img}
                alt="Video Thumbnail"
              />
              <div className="relative text-white top-40 px-3 text-xl">How to plan your retirement with crypto?</div>

              {isHovered && (
                <button
                  className="z-10 bg-gray-600 text-white px-4 py-2 rounded"
                  onClick={handlePlayButtonClick}
                >
                  Play
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
