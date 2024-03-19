import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchMovieImg, fetchPopularMovies } from "../utils/api/axios";
import { Icon } from "@iconify/react";
import { GetMovieGenre } from "../utils/functions/genres";
import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/context";
export default function FilterMovies() {
  const [movies, setMovies] = useState([]);
  const {openTrailer, setTrailerOpen, movieId, setMovieId} =useAppContext()

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
    <Wrapper className="flex flex-col gap-8 py-4 overflow-visible w-full">
      <div className="header flex flex-row lg:justify-between items-center justify-start flex-wrap gap-3 sm:gap-0 md:px-7 px-4">
        <h4 className="text-2xl">Top Choices</h4>
        <div className="xl:flex flex-row gap-3 py-2 px-3 rounded-[30px] backdrop-blur-sm bg-white/30 hidden">
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
      <div className="body w-auto block md:pl-7 pr-4 pl-4">
        <div className="sub flex flex-row gap-2  overflow-auto w-fit h-80">
          {movies.map((movie) => (
            <div className="image h-72 w-60 relative flex flex-col justify-end overflow-hidden rounded-3xl cursor-pointer">
              <img
                src={fetchMovieImg(movie.backdrop_path)}
                className="h-full w-full object-center object-cover rounded-3xl absolute "
              />
              <div className="absolute w-full h-full rounded-3xl flex flex-row justify-between p-3 items-end text-start bg-gradient-to-t from-neutral-800 30% via--100 90% to-transparent 100% ">
                <div className="h-full flex flex-col justify-between">
                  <div className=" justify-end flex flex-col mr-[-32px] items-end">
                    <div className="icon-div p-0 backdrop-opacity-50 backdrop-blur-md bg-black/50 rounded-[50%] w-fit">
                      <Link
                        className="react-router-link"
                        to={`/details/${movie?.id}`}
                      >
                        <Icon
                          icon="majesticons:more-menu-line"
                          width="30"
                          color="white"
                        />
                      </Link>
                    </div>
                    <div className=" flex-col mt-5 gap-2 special-btns items-center flex opacity-0">
                      
                      <div className="icon-div">
                        <Icon
                          icon="material-symbols-light:favorite-outline"
                          width="25"
                          color="#bbbbbb"
                        />
                      </div>
                      <div className="icon-div">
                        <Icon
                          icon="basil:plus-solid"
                          width="30"
                          color="#bbbbbb"
                        />
                      </div>
                      <div className="icon-div ">
                        <Icon
                          icon="ic:round-share"
                          width="20"
                          color="#bbbbbb"
                        />
                      </div>{" "}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="backdrop-blur-md backdrop-opacity-50 bg-white/30 rounded-3xl py-[2px] px-3 w-fit text-xs h-fit mb-2 text-white">
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
                </div>
                <div className="icon-div p-2 bg-white rounded-[50%]">
                  <Icon icon="bi:play-fill" color="black" className="cursor-pointer" 
                   onClick={()=>{
                    setMovieId(movie?.id)
                    setTrailerOpen(true)
                  }}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .body {
    overflow: auto !important;
  }
  .sub {
    overflow: auto !important;
  }

  .image {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    &:hover {
      .special-btns {
        display: flex;
        transition: 0.5s;
        opacity: 100;
      }
      img {
        scale: 1.03;
        transition: 0.5s !important;
      }
    }
  }
`;
