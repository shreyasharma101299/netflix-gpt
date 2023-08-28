import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";
const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movie.topRatedMovies);

  const getTopRatedMovies = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await movies.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
