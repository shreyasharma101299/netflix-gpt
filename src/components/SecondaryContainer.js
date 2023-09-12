import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { useTranslation } from "react-i18next";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  const { t } = useTranslation();
  return (
    <div className=" bg-black">
      <div className="-mt-44 relative pl-12 z-20">
        {movies.nowPlayingMovies && (
          <MovieList title={t("nowPlaying")} movies={movies.nowPlayingMovies} />
        )}
        {movies.popularMovies && (
          <MovieList title={t("popular")} movies={movies.popularMovies} />
        )}
        {movies.topRatedMovies && (
          <MovieList title={t("topRated")} movies={movies.topRatedMovies} />
        )}
        {movies.upcomingMovies && (
          <MovieList title={t("upcoming")} movies={movies.upcomingMovies} />
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
