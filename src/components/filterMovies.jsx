import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchMovieImg, fetchPopularMovies } from "../api/axios";
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
    <Container className="flex flex-col overflow-hidden">
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
      <div className="body flex flex-row gap-2">
        {movies.map((movie) => (
          <div className="image h-64 w-60">
            <img src={fetchMovieImg(movie.backdrop_path)} className="h-64 w-60"/>
          </div>
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  .body {
    width: max-content !important;
  
  }
`;
