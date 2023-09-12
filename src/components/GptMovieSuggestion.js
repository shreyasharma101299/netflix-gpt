import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptMovieSuggestion = () => {
  const { tmdbSeachedMovies, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="bg-black text-white opacity-90 p-10 m-5">
      {movieNames?.map((movie, index) => (
        <MovieList title={movie} movies={tmdbSeachedMovies[index].results} />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
