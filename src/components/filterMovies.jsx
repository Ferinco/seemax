import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchMovieImg, fetchPopularMovies } from "../utils/api/axios";
import { Icon } from "@iconify/react";
import { GetMovieGenre } from "../utils/functions/genres";
export default function FilterMovies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    GetMovies();
  }, []);

  async function GetMovies() {
    try {
      const response = await fetchPopularMovies();
      setMovies(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container className="flex flex-col gap-8 py-4 overflow-visible">
      <div className="header flex flex-row lg:justify-between items-center justify-start flex-wrap gap-3 sm:gap-0">
        <h4 className="text-2xl">Top Choices</h4>
        <div className="sm:flex flex-row gap-3 py-2 px-3 rounded-[30px] backdrop-blur-sm bg-white/30 hidden">
          <button className=" p-1 h-fit px-4 border  rounded-[30px] backdrop-blur-sm bg-transparent">
            All
          </button>
          <button className=" p-1 h-fit px-2 bg-transparent text-sm">
            Action
          </button>

          <button className=" p-1 h-fit px-2 bg-transparent text-sm">
            Thriller
          </button>

          <button className=" p-1 h-fit px-2 bg-transparent text-sm">
            Animation
          </button>

          <button className=" p-1 h-fit px-2 bg-transparent text-sm">
            Romance
          </button>

          <button className=" p-1 h-fit px-2 bg-transparent text-sm">
            War
          </button>
          <button className=" p-1 h-fit px-2 bg-transparent text-sm">
            Fantasy
          </button>
        </div>
      </div>
      <div className="body w-fit block">
        <div className="sub flex flex-row gap-2  overflow-auto w-auto">
          {movies.map((movie) => (
            <div className="image h-72 w-60 relative flex flex-col justify-end ">
              <img
                src={fetchMovieImg(movie.backdrop_path)}
                className="h-full w-full object-center object-cover rounded-3xl absolute "
              />
              <div className="absolute w-full h-full rounded-3xl flex flex-row justify-between p-3 items-end text-start bg-gradient-to-t from-neutral-800 30% via--100 90% to-transparent 100% ">
                <div className="flex flex-col">
                  <div className="backdrop-blur-md backdrop-opacity-50 bg-white/30 rounded-3xl py-[2px] px-3 w-fit text-xs h-fit mb-2">
                    {(() => {
                      switch (movie?.genre_ids[0]) {
                        case 28:
                          return "Action";
                        case 53:
                          return "Thriller";
                        case 9648:
                          return "Mystery";
                        case 10752:
                          return "War";
                        case 10751:
                          return "Family";
                        case 10749:
                          return "Romance";
                        case 37:
                          return "Western";
                        case 16:
                          return "Animation";
                        case 12:
                          return "Adventure";
                        case 35:
                          return "Comedy";
                        case 80:
                          return "Crime";
                        case 99:
                          return "Documentary";
                        case 18:
                          return "Drama";
                        case "10751":
                          return "Family";
                        case 14:
                          return "Fantansy";
                        case 36:
                          return "History";
                        case 27:
                          return "Horror";
                        case 10402:
                          return "Music";
                        case 878:
                          return "Sci-fi";
                        default:
                          return "";
                      }
                    })()}
                  </div>
                  <h6 className="text-xs text-white">
                    {movie.title?.slice(0, 18) + "..."}
                  </h6>
                  <p className="m-0 text-xs text-gray-300">
                    {" "}
                    {movie.overview?.slice(0, 32) + "..."}
                  </p>
                </div>
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
