import React, { useEffect, useState } from "react";
import { useAppContext } from "../contexts/context";
import {
  fetchMovieImg,
  fetchTrendingMovies,
  searchMovies,
} from "../utils/api/axios";
import { fetchPopularMovies } from "../utils/api/axios";
import styled from "styled-components";
import { getUpcomingMovies } from "../utils/api/axios";
import { fetchSimilarMovies } from "../utils/api/axios";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
export default function SearchDiv() {
  const { query, setQuery, isSearchOpen, setSearchOpen } = useAppContext();
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [results, setResults] = useState([]);
  const [first, setFirst] = useState();
  const [similar, setSimilar] = useState();
  const [loading, setLoading] = useState(false);

  async function GetResults() {
    try {
      // setLoading(true);
      const response = await searchMovies(query);
      setResults(response.data.results);
      setFirst(response.data.results[1].id);
      console.log(first);
      console.log(results);
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  async function GetSimilar() {
    try {
      // setLoading(true)
      const response = await fetchSimilarMovies(first);
      setSimilar(response.data.results);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  console.log(first);
  async function GetPopular() {
    try {
      const response = await fetchPopularMovies();
      setPopular(response.data.results);
      console.log(response);
      console.log(popular);
    } catch (error) {
      console.log(error);
    }
  }
  async function GetTrending() {
    try {
      const response = await fetchTrendingMovies();
      setTrending(response.data.results);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  async function GetUpcoming() {
    try {
      const response = await getUpcomingMovies();
      setUpcoming(response.data.results);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(query);

  useEffect(() => {
    GetPopular();
    GetTrending();
    GetUpcoming();
    GetSimilar();
    GetResults();
  }, [query, first]);

  return (
    <Wrapper className="flex flex-col gap-1 justify-left align-center min-h-screen w-full">
      <div className="p-7 flex flex-row justify-start items-center text-2xl font-light gap-2">
        <Icon
          icon="solar:arrow-left-linear"
          className="cursor-pointer"
          onClick={() => {
            setSearchOpen(false);
          }}
        />
        <h4>What are you looking for?</h4>
      </div>
      {query === "" ? (
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <h4 className="pl-7 text-md font-medium flex flex-row items-center gap-2">
              <Icon icon="noto:fire" color="#f1f1f1" /> Popular Now{" "}
            </h4>
            <div className="body w-full overflow-visible block md:pl-7 pr-4 pl-4 overflow-x-auto">
              <div className="sub flex flex-row gap-2 w-fit overflow-x-auto">
                {popular.map((movie) => (
                  <div className="image h-72 w-60 relative flex flex-col justify-end">
                    <img
                      src={fetchMovieImg(movie.backdrop_path)}
                      className="h-full w-full object-center object-cover rounded-3xl absolute "
                    />
                    <div className="absolute w-full h-full rounded-3xl flex flex-row justify-between p-3 items-end text-start bg-gradient-to-t from-neutral-800 30% via--100 90% to-transparent 100% ">
                      <div className="h-full flex flex-col justify-between">
                        <div className=" justify-end flex flex-row mr-[-32px]">
                          <div className="icon-div p-0 backdrop-opacity-50 backdrop-blur-md bg-black/50 rounded-[50%] ">
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
                        </div>
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
                      </div>
                      <div className="icon-div p-2 bg-white rounded-[50%]">
                        <Icon icon="bi:play-fill" color="black" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <h4 className="pl-7 text-md font-medium flex flex-row gap-2 items-center">
              <Icon icon="flat-color-icons:line-chart" /> Trending Now
            </h4>
            <div className="body w-full block md:pl-7 pr-4 pl-4 overflow-x-auto">
              <div className="sub flex flex-row gap-2  overflow-x-auto w-fit">
                {trending.map((movie) => (
                  <div className="image h-72 w-60 relative flex flex-col justify-end">
                    <img
                      src={fetchMovieImg(movie.backdrop_path)}
                      className="h-full w-full object-center object-cover rounded-3xl absolute "
                    />
                    <div className="absolute w-full h-full rounded-3xl flex flex-row justify-between p-3 items-end text-start bg-gradient-to-t from-neutral-800 30% via--100 90% to-transparent 100% ">
                      <div className="h-full flex flex-col justify-between">
                        <div className=" justify-end flex flex-row mr-[-32px]">
                          <div className="icon-div p-0 backdrop-opacity-50 backdrop-blur-md bg-black/50 rounded-[50%] ">
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
                        </div>
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
                      </div>
                      <div className="icon-div p-2 bg-white rounded-[50%]">
                        <Icon icon="bi:play-fill" color="black" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <h4 className="pl-7 text-md font-medium flex flex-row items-center gap-2">
              <Icon icon="flat-color-icons:binoculars" /> Watchlist Worthy
            </h4>
            <div className="body w-full block md:pl-7 pr-4 pl-4 overflow-x-auto">
              <div className="sub flex flex-row gap-2  overflow-auto w-fit">
                {upcoming.map((movie) => (
                  <div className="image h-72 w-60 relative flex flex-col justify-end">
                    <img
                      src={fetchMovieImg(movie.backdrop_path)}
                      className="h-full w-full object-center object-cover rounded-3xl absolute "
                    />
                    <div className="absolute w-full h-full rounded-3xl flex flex-row justify-between p-3 items-end text-start bg-gradient-to-t from-neutral-800 30% via--100 90% to-transparent 100% ">
                      <div className="h-full flex flex-col justify-between">
                        <div className=" justify-end flex flex-row mr-[-32px]">
                          <div className="icon-div p-0 backdrop-opacity-50 backdrop-blur-md bg-black/50 rounded-[50%] ">
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
                        </div>
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
                      </div>
                      <div className="icon-div p-2 bg-white rounded-[50%]">
                        <Icon icon="bi:play-fill" color="black" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {loading ? (
            "...loading"
          ) : (
            <>
              <div>
                <h4 className="pl-7 text-md font-medium flex flex-row gap-2 items-center">
                  <Icon icon="noto:fire" color="#f1f1f1" />
                  Top Results From "{query}"
                </h4>
                <div className="body w-full block md:pl-7 pr-4 pl-4 overflow-x-auto mt-2">
                  <div className="flex flex-row gap-2 overflow-x-auto w-fit">
                    {results?.map((movie) => (
                      <div className="image h-72 w-60 relative flex flex-col justify-end">
                        <img
                          src={fetchMovieImg(movie.backdrop_path)}
                          className="h-full w-full object-center object-cover rounded-3xl absolute "
                        />
                        <div className="absolute w-full h-full rounded-3xl flex flex-row justify-between p-3 items-end text-start bg-gradient-to-t from-neutral-800 30% via--100 90% to-transparent 100% ">
                          <div className="h-full flex flex-col justify-between">
                            <div className=" justify-end flex flex-row mr-[-32px]">
                              <div className="icon-div p-0 backdrop-opacity-50 backdrop-blur-md bg-black/50 rounded-[50%] ">
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
                            </div>
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
                          </div>
                          <div className="icon-div p-2 bg-white rounded-[50%]">
                            <Icon icon="bi:play-fill" color="black" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
             {
              similar?.length > 0 ? (
                <div className="mt-5">
                <h4 className="pl-7 text-md font-medium flex flex-row gap-2 items-center">
                  <Icon icon="fxemoji:pushpin" />
                  Similar Movies
                </h4>
                <div className="body w-full block md:pl-7 pr-4 pl-4 overflow-x-auto mt-2">
                  <div className="flex flex-row gap-2 overflow-x-auto w-fit">
                    {similar?.map((movie) => (
                      <div className="image h-72 w-60 relative flex flex-col justify-end">
                        <img
                          src={fetchMovieImg(movie.backdrop_path)}
                          className="h-full w-full object-center object-cover rounded-3xl absolute "
                        />
                        <div className="absolute w-full h-full rounded-3xl flex flex-row justify-between p-3 items-end text-start bg-gradient-to-t from-neutral-800 30% via--100 90% to-transparent 100% ">
                          <div className="h-full flex flex-col justify-between">
                            <div className=" justify-end flex flex-row mr-[-32px]">
                              <div className="icon-div p-0 backdrop-opacity-50 backdrop-blur-md bg-black/50 rounded-[50%] ">
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
                            </div>
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
                          </div>
                          <div className="icon-div p-2 bg-white rounded-[50%]">
                            <Icon icon="bi:play-fill" color="black" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              ) : (<></>)
             }
            </>
          )}
        </>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div``;
