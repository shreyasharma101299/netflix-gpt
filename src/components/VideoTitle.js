import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-80 px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 w-1/4  text-lg">{overview}</p>
      <div className="flex flex-row ">
        <button className="bg-white text-black px-10 py-4 text-xl font-bold rounded-lg mr-5 hover:bg-opacity-50 w-36">
          Play
        </button>

        <button className="bg-gray-500 text-white px-10 py-4 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
