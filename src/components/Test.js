import React from "react";
import MovieCard from "./MovieCard";

const Test = () => {
  return (
    <div className="text-white border-blue-500 border-4">
      <div className="header w-full border border-red-500 border-2  p-9 flex justify-between fixed bg-transparent bg-gradient-to-b from-black z-10">
        <img src="" alt="App Logo" />
        This is Header.
        <div className="user-info flex items-center">
          <img src="" alt="User Logo" />
          <button className="border border-blue-500 border-2 m-2 p-2">
            Sign In / Sign Out
          </button>
        </div>
      </div>

      {/* done till here */}

      <div className="main-container border border-yellow-500 border-2  aspect-video bg-gray-800 relative">
        <iframe
          className="aspect-video"
          src="https://www.youtube.com/embed/njX2bu-_Vw4?autoplay=1&mute=1&loop=1&playlist=njX2bu-_Vw4&controls=0&showinfo=0&modestbranding=1&rel=0"
          title="YouTube video player"
          allow="autoplay; encrypted-media"
        ></iframe>
        <div className="bgVideoTitle bg-gray-600 absolute m-5 p-5 rounded-lg top-[48%] left-[5%]">
          <p className="bg-transparent">Video Title khj;ldfrhp;oiyhreo;ej</p>
          <buttongroup>
            <button className="bg-white text-black px-4 py-2 rounded-lg">
              Play
            </button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg">
              More Info
            </button>
          </buttongroup>
        </div>
      </div>
      <div className="main-secondary-container bg-black text-white ">
        <div className="secondary-container border border-green-500 border-2 m-2 p-2 flex justify-between gap-4 overflow-auto overflow-x-scroll relative -top-48 bg-transparent">
          <div className="movie-card w-40 h-56 border-teal-500 border-2 bg-slate-600 bg-opacity-50">
            {" "}
            MovieCard
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
