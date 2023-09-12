import React from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { openai } from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { useTranslation } from "react-i18next";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const { t } = useTranslation();
  const language = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json;
  };

  const handleSearchClick = async () => {
    const gptQuery =
      "Act as Movie recommendation system and suggest some movies for " +
      searchText.current.value +
      " give top 5 movies, comma separated, like the Example Result given ahead. Example result: Gadar2, Bro, Baby, Rudrangi, Heart ofStone ";
    const data = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    const recommendedMovies = data.choices?.[0]?.message?.content.split(",");
    const gptMovie = recommendedMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbMovies = await Promise.all(gptMovie);
    dispatch(
      addGptMovieResult({
        movieNames: recommendedMovies,
        tmdbSeachedMovies: tmdbMovies,
      })
    );
  };
  return (
    <div className="pt-40 flex justify-center">
      <form
        className=" w-1/2 p-2 r  bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-2 m-2 min-w-fit col-span-10 "
          type="text"
          placeholder={t("searchInfo")}
        />
        <button
          className=" px-4 bg-red-500 text-white col-span-2 rounded-lg "
          onClick={handleSearchClick}
        >
          {t("search")}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
