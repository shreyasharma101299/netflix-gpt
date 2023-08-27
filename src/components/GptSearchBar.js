import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  return (
    <div className="pt-40 flex justify-center">
      <form className=" w-1/2 p-2 r  bg-black grid grid-cols-12">
        <input
          className="p-2 m-2 min-w-fit col-span-10 "
          type="text"
          placeholder={lang[language].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 bg-red-500 text-white col-span-2">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
