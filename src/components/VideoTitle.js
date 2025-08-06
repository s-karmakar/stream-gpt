import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="bgVideoTitle text-white absolute m-5 p-5 rounded-lg top-[35%] left-[5%] bg-gray-800 bg-opacity-20 ">
      <p className="bg-transparent text-6xl font-bold">{title}</p>
      <p className="bg-transparent my-5 py- 9 text-lg w-1/2">{overview}</p>
      <buttongroup className="bg-transparent">
        <button className=" text-black py-5 px-12 rounded-lg bg-white  text-xl font-mono">
          ▷ {"  "}Play
        </button>
        <button className="mx-2 text-white py-5 px-12 rounded-lg bg-gray-600 bg-opacity-50 text-xl font-mono">
          ⓘ {"  "}More Info
        </button>
      </buttongroup>
    </div>
  );
};

export default VideoTitle;
