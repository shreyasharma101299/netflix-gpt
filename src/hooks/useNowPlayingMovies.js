import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await movies.json();
    dispatch(addNowPlayingMovie(json.results));
  };
  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
