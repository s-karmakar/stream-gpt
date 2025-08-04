import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import the user reducer
import moviesReducer from "./moviesSlice"; // Import the movies reducer

const appStore = configureStore({
  reducer: {
    user: userReducer, // Add the user slice reducer to the store
    movies: moviesReducer, // Assuming you have a movies slice reducer
  },
});
export default appStore;
