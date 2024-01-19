import { useEffect, useState } from "react";
import { fetchMovieImg, getUpcomingMovies } from "../utils/api/axios";
import { Link } from "react-router-dom";

export default function UpcomingMovies() {
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        getMovies()
    }, [])
  async function getMovies() {
    try {
      const response = await getUpcomingMovies();
      setMovies(response.data.results);
      console.log(response.data.results)
    } catch (error) {
      console.log(error);
    }
  }

  return (
  <div className="flex flex-col gap-6">
    <div className="header text-start flex flex-row justify-between">
        <h4>New Releases</h4>
        <Link>view more</Link>
    </div>
    <div className=" grid grid-cols-2 gap-4">
        {
            movies?.slice(0,4).map((movie)=>(
                <div className="image  h-64 rounded-[30px]">
                    <img src={fetchMovieImg(movie.backdrop_path)} className="h-full w-full object-cover object-top rounded-[30px]"/>
                </div>
            ))
        }
    </div>

  </div>
  )
}
