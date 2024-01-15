import axios from "axios";
import { config } from "../config/config";
const mainApi = axios.create({
    baseURL: `https://api.themoviedb.org/3`
})

export const fetchPopularMovies = () =>
  mainApi.get(`/movie/popular?api_key=${config.apikey}&language=en-US`);