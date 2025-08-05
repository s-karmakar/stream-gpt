import React from "react";
import { TMDB_IMG_POSTER_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] max-w-[60vw] sm:max-w-[180px] rounded-xl overflow-hidden shadow-xl bg-gray-900 hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-red-600 transition-all duration-200 cursor-pointer relative group">
      <img
        src={TMDB_IMG_POSTER_URL + posterPath}
        alt="Movie Poster"
        className="w-full h-40 sm:h-48 md:h-60 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-200"></div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-12 sm:h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
    </div>
  );
};

export default MovieCard;
