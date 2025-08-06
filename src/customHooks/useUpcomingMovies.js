import { useEffect } from "react";
import { TMDB_API_OPTIONS, TMDB_UPCOMING_MOVIES_URL } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useUpcomingMovies = (id) => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(TMDB_UPCOMING_MOVIES_URL, TMDB_API_OPTIONS);
    const json = await data.json();
    console.log(json.results);

    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
