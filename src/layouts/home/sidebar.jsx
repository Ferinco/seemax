import styled from "styled-components";
import { useAppContext } from "../../contexts/context";
import { fetchMovieImg, fetchTrendingMovies } from "../../utils/api/axios";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
export default function Sidebar() {
  const { isSidebarOpen, setIsSidebarOpen, isSearchOpen, setSearchOpen, query, setQuery } = useAppContext();
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
  const handleInput = (event) => {
    setQuery(event.target.value);
  };
  console.log(query)
console.log(isSearchOpen)
  return (
    <Container
      className={`h-screen w-[350px]  xs:w-screen hidden lg:flex left-0 top-0 right-0 bottom-0 fixed backdrop-blur-lg backdrop-opacity-90 bg-white/30  ${
        isSidebarOpen ? "opened " : "closed"
      }`}
    >
      <div className="container flex flex-col py-3 px-4 gap-2 w-[350px] xs:w-screen h-screen fixed">
        <div className="flex flex-row justify-end lg:hidden">
          <button
            onClick={() => {
              setIsSidebarOpen(false);
            }}
            className="w-fit p-0 bg-transparent"
          >
            &larr;
          </button>
        </div>
        <div className="field rounded-3xl">
          <input
            placeholder="search movies"
            className="px-7 py-3 w-full rounded-3xl"
            onClick={() => {
              setSearchOpen(true)
            }}
            onChange={handleInput}
          />
        </div>
        <div className="h-[600px] sm:h-[500px] rounded-[30px] trending-div overflow-auto flex flex-col gap-3 px-7 py-6 backdrop-blur-md bg-neutral-700 ">
          <p className="fixed font-semibold flex flex-row items-baseline gap-1 ">
            {" "}
            <Icon icon="noto:fire" color="#f1f1f1" /> Trending Now
          </p>

          <div className="flex flex-col gap-3 mt-9">
            {movies.map((movie) => (
              <div className="image h-48 rounded-[20px] relative flex flex-col justify-end">
                <img
                  src={fetchMovieImg(movie.backdrop_path)}
                  className="w-full h-full rounded-[20px] object-cover object-center absolute"
                />
                <div className="absolute w-full h-[30%] test-div backdrop-blur-sm bg-black/30 flex rounded-b-[20px] p-3 flex-row justify-between items-center">
                  <p className="text-start m-0">{movie.title}</p>
                  <div className="icon-div p-2 bg-white/50 rounded-[50%]">
                    <Icon icon="bi:play-fill" color="white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  /* width: 350px !important; */
`;