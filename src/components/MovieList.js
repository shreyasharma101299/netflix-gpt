import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="">
      <h1 className="text-3xl mb-4 text-white">{title}</h1>
      <div className="flex overflow-auto no-scrollbar ">
        <div className="flex mb-7 ">
          {movies?.map((movie) => (
            <MovieCard imgPath={movie.poster_path} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
