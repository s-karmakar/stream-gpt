import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    trailerVideo: null,
    popularMovies: null,
    nowPlayingMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const {
  addPopularMovies,
  addNowPlayingMovies,
  addTrailerVideo,
  addTopRatedMovies,
  addUpcomingMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
