import { useEffect } from "react";
import {
  TMDB_API_OPTIONS,
  TMDB_TOP_RATED_MOVIES_URL,
} from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useTopRatedMovies = (id) => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(TMDB_TOP_RATED_MOVIES_URL, TMDB_API_OPTIONS);
    const json = await data.json();
    console.log(json.results);

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
