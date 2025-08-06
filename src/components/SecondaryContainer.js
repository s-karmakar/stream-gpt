import React, { use } from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => {
    return store.movies?.popularMovies;
  });

  return (
    <div className="">
      <MovieList title="Popular Movies" movies={movies} />
      <MovieList title="Trending Now" movies={movies} />
      <MovieList title="Bollywood" movies={movies} />
      <MovieList title="Horror Movies" movies={movies} />
      <MovieList title="Upcoming Movies" movies={movies} />
    </div>
  );
};

export default SecondaryContainer;
