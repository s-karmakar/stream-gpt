import { useEffect } from "react";
import {
  TMDB_API_OPTIONS,
  TMDB_NOW_PLAYING_MOVIES_URL,
} from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = (id) => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(TMDB_NOW_PLAYING_MOVIES_URL, TMDB_API_OPTIONS);
    const json = await data.json();
    console.log(json.results);

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
