import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("movielist movies:", movies);

  if (!movies || movies.length === 0) return null;
  //   return (
  //     <div className="secondary-container ">
  //       <h1 className="text-xl sm:text-2xl md:text-3xl mx-2 sm:mx-3 my-2 sm:my-3 text-white  drop-shadow-lg">
  //         {title}
  //       </h1>

  //       <div className="movie-card w-40 h-56  bg-slate-600 bg-opacity-50 flex gap-2 over ">
  //         {movies?.map((movie) => (
  //           <MovieCard key={movie?.id} posterPath={movie.poster_path} />
  //         ))}
  //       </div>
  //     </div>
  //   );

  return (
    <div className="main-secondary-container bg-black text-white ">
      <div className="secondary-container  mx-2 p-2  gap-4 overflow-auto  relative -top-28 bg-transparent">
        <h1 className="bg-transparent text-2xl my-2 p-2">{title}</h1>
        <div className="movie-card w-52 h-56 bg-slate-600 bg-opacity-50 flex gap-4">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
