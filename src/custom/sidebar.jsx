import styled from "styled-components";
import { useAppContext } from "../contexts/context";
import { fetchMovieImg, fetchTrendingMovies } from "../utils/api/axios";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
export default function Sidebar() {
  const { isSidebarOpen, setIsSidebarOpen } = useAppContext();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    try {
      const response = await fetchTrendingMovies();
      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container
      className={`h-screen w-[350px] hidden lg:flex left-0 top-0 right-0 bottom-0 fixed ${
        isSidebarOpen ? "opened " : "closed"
      }`}
    >
    <div className="container flex flex-col py-3 px-4 gap-2 w-[350px] h-screen fixed">
      <div className="flex flex-row justify-end ">
        <button
          onClick={() => {
            setIsSidebarOpen(false);
          }}
          className="w-fit p-0 bg-transparent "
        >
          &larr;
        </button>
      </div>
      <div className="field rounded-3xl">
        <input
          placeholder="search movies"
          className="px-4 py-3 w-full rounded-3xl"
        />
      </div>
      <div className="h-[500px] rounded-[30px] trending-div overflow-auto flex flex-col gap-3 px-7 py-6 backdrop-blur-md bg-neutral-800 ">
        <p className="fixed">Trending Now</p>
        <div className="flex flex-col gap-3 mt-9">
        {
          movies.map((movie)=>(
            <div className="image h-48 rounded-[20px] relative flex flex-col justify-end">
              <img src={fetchMovieImg(movie.backdrop_path)} className="w-full h-full rounded-[20px] object-cover object-center absolute"/>
              <div className="absolute w-full h-[30%] test-div backdrop-blur-sm bg-black/30 flex rounded-b-[20px] p-3 flex-row justify-between items-center"> 
              <p className="text-start m-0">{movie.title}</p>
<div className="icon-div p-2 bg-white/50 rounded-[50%]">
<Icon icon="bi:play-fill" color="white" />
</div>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </div>
    </Container>

  );
}
const Container = styled.div`
  width: 350px !important;


`;
