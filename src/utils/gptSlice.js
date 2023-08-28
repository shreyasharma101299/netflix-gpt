import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    tmdbSeachedMovies: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, tmdbSeachedMovies } = action.payload;
      state.movieNames = movieNames;
      state.tmdbSeachedMovies = tmdbSeachedMovies;
    },
  },
});
export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
