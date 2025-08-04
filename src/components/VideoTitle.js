import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute z-10 text-white   ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="my-5 py- 9 text-lg w-1/2">{overview}</p>

      <div className="mt-11">
        <button className=" text-black py-5 px-12 rounded-lg bg-white  text-xl font-mono">
          ▷ {"  "}Play
        </button>
        <button className="mx-2 text-white py-5 px-12 rounded-lg bg-gray-600 bg-opacity-50 text-xl font-mono">
          ⓘ {"  "}More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
