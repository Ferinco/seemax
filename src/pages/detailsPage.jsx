import React, { useEffect, useState } from "react";
import { fetchMovieImg, fetchSingleMovie } from "../utils/api/axios";
import { Link, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import { useAppContext } from "../contexts/context";

export default function DetailsPage() {
  const { id } = useParams();
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState(details?.overview);
  const [active, setActive] = useState("Overview");
  const { openTrailer, setTrailerOpen, movieId, setMovieId } = useAppContext();

  useEffect(() => {
    GetDetails();
    setActive("Overview");
  }, [id]);
  async function GetDetails() {
    try {
      const response = await fetchSingleMovie(id);
      setDetails(response.data);
      console.log(response.data);
      setTab(response?.data.overview);
      setLoading(false);
    } catch (error) {
      console.log(error);
      // setLoading(false);
    }
  }
  console.log(details);

  return (
    <>
      {loading ? (
        <div className="w-full h-screen absolute bg-neutral-900 backdrop-blur-md flex flex-col justify-center">
          <div className="glowing-spinner" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Wrapper className="w-full flex flex-col gap-7 bg-black/5 h-full flex-flex-col relative justify-between ">
          <div className="flex flex-row justify-between items-center my-auto md:px-7 px-4">
            <div className="flex flex-col items-start max-w-[500px] text-start  justify-center gap-2">
              <div className="flex flex-row gap-1 mb-2">
                {details?.genres?.map((genre, index) => (
                  <div
                    className="backdrop-blur-md backdrop-opacity-75 bg-white/35 rounded-3xl py-[2px] px-3 h-fit  w-fit text-sm text-white"
                    key={index}
                  >
                    {(() => {
                      switch (genre.id) {
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
                ))}
              </div>
              <h2 className="text-4xl font-bold">{details?.title}</h2>
              <p className=" font-extralight">
                {details?.overview.split(" ").slice(0, 30).join(" ") + "..."}
              </p>
              <div className="buttons flex flex-row gap-3 mt-4">
                <button
                  className="bg-white text-black rounded-3xl px-5 flex flex-row items-center gap-2"
                  onClick={() => {
                    setMovieId(details?.id);
                    setTrailerOpen(true);
                  }}
                >
                  <Icon icon="bi:play-fill" color="black" fontSize={20} />
                  Trailer
                </button>
                <button className="bg-transparent border border-white px-5 rounded-3xl text-white">
                  Add to Watchlist
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5 py-3">
            <div className="tabs flex flex-row gap-3 md:px-7 px-4">
              <p
                className={
                  active === "Overview"
                    ? "border-b-2 text-sm font-medium"
                    : "text-sm font-light"
                }
                onClick={() => {
                  setTab(details?.overview);
                  setActive("Overview");
                }}
              >
                Overview
              </p>
              <p
                className={
                  active === "Top Cast"
                    ? "border-b-2 text-sm font-medium transition-transform"
                    : "text-sm font-light"
                }
                onClick={() => {
                  setTab(details?.credits.cast);
                  setActive("Top Cast");
                }}
              >
                Top Cast
              </p>
              <p
                className={
                  active === "Ratings"
                    ? "border-b-2 text-sm font-medium transition-transform"
                    : "text-sm font-light"
                }
                onClick={() => {
                  setTab(details?.credits.cast);
                  setActive("Top Cast");
                }}
              >
                Ratings
              </p>
            </div>
            <div className="text-start h-[100px] overflow-auto ">
              <div className="flex flex-row gap-2 overflow-auto">
                {(() => {
                  switch (tab) {
                    case details?.credits.cast:
                      return tab?.slice(0, 5).map((actor, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center gap-1 md:pl-7 pl-4"
                        >
                          <div className="actor-image w-20 h-20 rounded-[50%] bg-red-950">
                            <img
                              src={fetchMovieImg(actor.profile_path)}
                              className="w-full h-full object-center object-cover rounded-[50%]"
                            />
                          </div>
                          <p className="text-sm">{actor.name}</p>
                        </div>
                      ));
                    case details?.overview:
                      return (
                        <div className="flex overflow-auto flex-col md:px-7 px-4">
                          <p className="font-extralight text-sm">{tab}</p>
                          <div className="">
                            {details.credits.crew.map((director) => (
                              <div
                                className={`flex flex-row items-center gap-1 mt-1 h-fit p-0 m-0 justify-start ${
                                  director.job === "Director"
                                    ? "flex"
                                    : "hidden"
                                }`}
                              >
                                <p className="text-sm font-extralight mt-4">
                                  {director.job === "Director"
                                    ? "Director:"
                                    : ""}
                                </p>
                                <p className="text-sm font-extralight mt-4">
                                  {director.job === "Director"
                                    ? director.name
                                    : ""}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
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
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
}
const Wrapper = styled.div`
  .tabs {
    p {
      cursor: pointer;
    }
  }
  .actor-image {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px !important;
  }
`;
