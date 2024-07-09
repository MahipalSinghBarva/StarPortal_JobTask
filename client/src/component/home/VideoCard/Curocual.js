import VideoCard from "./VideoCard";
import "./VideoCard.css"

const Curocual = () => {
  return (
    <div className="bg-black main-div ">
      <hr className="bg-gray-600 mb-5" />
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-white text-3xl">
          Top Crypto Creators and Projects to Follow
        </h2>
        <p className="text-gray-500 ">
          Answers to your crypto doubts, straight from the experts
        </p>
      </div>
      <div className="flex containor-div justify-center py-5">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />

        <hr className="" />
      </div>
      );
    </div>
  );
};

export default Curocual;
