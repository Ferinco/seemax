import axios from "axios";
import { config } from "../config/config";
const mainApi = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
});

export const fetchPopularMovies = () =>
  mainApi.get(`/movie/popular?api_key=${config.apikey}&language=en-US`);
export const fetchMovieImg = (pathName) =>
  `https://image.tmdb.org/t/p/original/${pathName}`;
  export const fetchTrendingMovies = () =>
  api.get(`/trending/movie/day?api_key=${config.apikey}&language=en-US`);
