import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../customHooks/useTrailerVideo";

const VideoBcg = ({ id }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useTrailerVideo(id);

  // if (!trailerVideo) {
  //   return null;
  // }

  return (
    <iframe
      className="aspect-video"
      src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}&controls=0&showinfo=0&modestbranding=1&rel=0`}
      title="YouTube video player"
      allow="autoplay; encrypted-media"
    ></iframe>
  );
};

export default VideoBcg;
