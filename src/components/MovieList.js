import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="mb-6">
      <h1 className="text-xl sm:text-2xl md:text-3xl mx-2 sm:mx-3 my-2 sm:my-3 text-white font-bold drop-shadow-lg">
        {title}
      </h1>
      <div className="flex overflow-x-scroll gap-3 sm:gap-4 md:gap-6 px-1 sm:px-3 pb-4 -mx-2 sm:-mx-3 scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
