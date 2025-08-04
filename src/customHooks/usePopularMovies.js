import { useEffect } from "react";
import { TMDB_API_OPTIONS, TMDB_POPULAR_MOVIES_URL } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const usePopularMovies = (id) => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(TMDB_POPULAR_MOVIES_URL, TMDB_API_OPTIONS);
    const json = await data.json();
    console.log(json.results);

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
