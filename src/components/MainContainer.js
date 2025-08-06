import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBcg from "./VideoBcg";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => {
    return store.movies?.popularMovies;
  });
  if (!movies) return null;

  const mainMovie = movies[0];
  console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div
      className="main-container   aspect-video bg-gray-800 relative
    "
    >
      <VideoBcg id={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
