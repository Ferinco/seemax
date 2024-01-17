import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchMovieImg, fetchPopularMovies } from "../api/axios";
import { Icon } from "@iconify/react";
export default function FilterMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    GetMovies();
  }, []);

  async function GetMovies() {
    try {
      const response = await fetchPopularMovies();
      setMovies(response.data.results);
      console.log(movies);
    } catch (error) {
      ComponentStyle.log(error);
    }
  }

  return (
    <Container className="flex flex-col gap-8 py-4 overflow-visible">
      <div className="header flex flex-row justify-between items-center">
        <h4 className="text-3xl">Choose your Swag</h4>
        <div className="flex flex-row gap-3 border py-2 px-5 rounded-[30px]">
          <button className=" p-1 h-fit px-4 border border-white rounded-[30px]">
            hjf
          </button>
          <button className=" p-1 h-fit px-4 border border-white rounded-[30px]">
            hjf
          </button>

          <button className=" p-1 h-fit px-4 border border-white rounded-[30px]">
            hjf
          </button>

          <button className=" p-1 h-fit px-4 border border-white rounded-[30px]">
            hjf
          </button>

          <button className=" p-1 h-fit px-4 border border-white rounded-[30px]">
            hjf
          </button>

          <button className=" p-1 h-fit px-4 border border-white rounded-[30px]">
            hjf
          </button>
          <button className=" p-1 h-fit px-4 border border-white rounded-[30px]">
            hjf
          </button>
        </div>
      </div>
      <div className="body w-fit block">
        <div className="sub flex flex-row gap-2  overflow-auto w-auto">
          {movies.map((movie) => (
            <div className="image h-64 w-60 relative flex flex-col justify-end ">
              <img
                src={fetchMovieImg(movie.backdrop_path)}
                className="h-full w-full object-center object-cover rounded-3xl absolute "
              />
              <div className="absolute border w-full h-full rounded-3xl flex flex-row justify-between p-3 items-end text-start bg-gradient-to-t from-neutral-800 30% via--100 90% to-transparent 100% ">
                <h6 className="text-xs">{movie.title}</h6>
                <div className="icon-div p-2 bg-white rounded-[50%]">
                  <Icon icon="bi:play-fill" color="black" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .body {
    overflow: auto !important;
  }
  .sub {
    overflow: auto !important;
  }
`;
