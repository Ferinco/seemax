import styled from "styled-components";
import { useAppContext } from "../contexts/context";
import { fetchMovieImg, fetchTrendingMovies } from "../api/axios";
import { useEffect, useState } from "react";
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
      className={`h-screen w-3/12 hidden lg:flex flex-col p-4 gap-2 ${
        isSidebarOpen ? "opened fixed" : "closed"
      }`}
    >
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
      <div className="h-[500px] border rounded-[30px] trending-div overflow-auto flex flex-col gap-3 px-7 py-6">
        <p className="fixed">Trending</p>
        <div className="flex flex-col gap-3 mt-9">
        {
          movies.map((movie)=>(
            <div className="image h-48 rounded-[20px]">
              <img src={fetchMovieImg(movie.backdrop_path)} className="w-full h-full rounded-[20px] object-cover object-center"/>
            </div>
          ))
        }
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  border-right: 1px solid white;
`;
