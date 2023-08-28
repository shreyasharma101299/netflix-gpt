import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movie.popularMovies);

  const getPopularMovies = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await movies.json();
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};
export default usePopularMovies;
