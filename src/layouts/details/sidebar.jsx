import React, { useEffect, useState } from "react";
import { useAppContext } from "../../contexts/context";
import { fetchMovieImg, fetchSimilarMovies } from "../../utils/api/axios";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { Link, useParams } from "react-router-dom";

export default function Sidebar() {
  const {
    isSidebarOpen,
    setIsSidebarOpen,
    isSearchOpen,
    setSearchOpen,
    query,
    setQuery,
    openTrailer,
    setTrailerOpen,
    movieId,
    setMovieId,
  } = useAppContext();
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    try {
      const response = await fetchSimilarMovies(id);
      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  //handle search input
  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Container
      className={`h-screen w-[350px] flex top-0 bottom-0 fixed  backdrop-opacity-100 bg-black/45 backdrop-blur-sm ${
        isSidebarOpen ? "opened " : "closed"
      }`}
    >
      <div className="container flex flex-col py-3 px-4 gap-2 w-[350px] h-screen fixed">
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
            className="px-7 py-4 w-full rounded-3xl backdrop-blur-sm backdrop-opacity-10 bg-white/40 font-light text-sm"
            onClick={() => {
              setSearchOpen(true);
            }}
            onChange={handleInput}
          />
        </div>
        <div className="h-[87vh] rounded-[30px] trending-div overflow-auto flex flex-col gap-3 px-7 py-6 backdrop-blur-sm backdrop-opacity-10 bg-white/10  ">
          <p className="fixed font-semibold flex flex-row items-baseline gap-1">
            {" "}
            <Icon icon="noto:fire" color="#f1f1f1" className="relative" />{" "}
            Similar Movies
          </p>
          <div className="block gap-3 mt-9 relative h-full overflow-y-auto">
            <div className="h-fit flex flex-col overflow-y-auto gap-3">
              {movies.map((movie) => (
                <div className="image h-48 rounded-[20px] relative flex flex-col justify-end">
                  <Link
                    className="w-full h-full rounded-[20px] absolute"
                    to={`/details/${movie?.id}`}
                  >
                    <img
                      src={fetchMovieImg(movie?.backdrop_path)}
                      className="w-full h-full rounded-[20px] object-cover object-center"
                    />
                  </Link>
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
      </div>
    </Container>
  );
}
const Container = styled.div`
  /* width: 350px !important; */
  @media screen and (max-width: 1024px) {
    margin-left: -1000px;
  }
  input {
    &::placeholder {
      color: white;
      font-weight: 400 !important;
    }
  }
`;
