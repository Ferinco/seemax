import { useEffect, useState } from "react";
import { fetchMovieImg, getUpcomingMovies } from "../utils/api/axios";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function UpcomingMovies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);
  async function getMovies() {
    try {
      const response = await getUpcomingMovies();
      setMovies(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col gap-6 md:px-7 px-4 py-4">
      <div className="header text-start flex flex-row justify-between">
        <h4 className="text-2xl">New Releases</h4>
        <Link className="text-sm underline">view more</Link>
      </div>
      <div className=" grid sm:grid-cols-2 gap-4 grid-cols-1">
        {movies?.slice(0, 4).map((movie) => (
          <div className="image  h-64 rounded-[30px] flex flex-col relative">
            <img
              src={fetchMovieImg(movie.backdrop_path)}
              className="h-full w-full object-cover object-top rounded-[30px]"
            />
            <div className="w-full h-full  absolute rounded-[30px] bg-gradient-to-tr from-neutral-900 flex flex-row justify-between p-4 items-end lg:gap-8">
              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-col items-start text-start">
                  <h6 className="text-xl font-medium m-0">{movie.title}</h6>
                  <p className="m-0 text-xs text-gray-300 w-[250px]">
                    {" "}
                    {movie.overview?.slice(0, 80) + "..."}
                  </p>
                </div>
                <div className="buttons flex flex-row gap-3">
                  <button className="bg-white text-black rounded-3xl px-5 flex flex-row items-center gap-2 h-fit py-2">
                    <Icon icon="bi:play-fill" color="black" fontSize={20} />
                    trailer
                  </button>
                  <button className="bg-transparent border border-white px-5 rounded-3xl py-2 text-white">
                    <Link
                      className="react-router-link"
                      to={`/details/${movie?.id}`}
                    >
                      details
                    </Link>
                  </button>
                </div>
              </div>
              <div>
                <Icon icon="ic:baseline-add" color="white" fontSize={30} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
