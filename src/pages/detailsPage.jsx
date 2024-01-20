import React, { useEffect, useState } from "react";
import { fetchMovieImg, fetchSingleMovie } from "../utils/api/axios";
import { Link, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import styled from "styled-components";

export default function DetailsPage() {
  const { id } = useParams();
  const [details, setDetails] = useState();
  useEffect(() => {
    GetDetails();
  }, []);
  async function GetDetails() {
    try {
      const response = await fetchSingleMovie(id);
      setDetails(response.data);
      console.log(details);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Wrapper className="w-full px-7 flex flex-col gap-7 bg-black/5 h-full flex-flex-col relative">
      <div className="flex flex-col items-start max-w-[500px] text-start h-full justify-center gap-2">
        <h2 className="text-4xl font-bold">{details?.title}</h2>
        <p>{details?.overview.split(" ").slice(0 , 30).join(" ") + "..."}</p>
        <div className="buttons flex flex-row gap-3 mt-4">
          <button className="bg-white text-black rounded-3xl px-5 flex flex-row items-center gap-2">
            <Icon icon="bi:play-fill" color="black" fontSize={20} />
            Trailer
          </button>
          <button className="bg-transparent border border-white px-5 rounded-3xl">
            Add to Watchlist
          </button>
        </div>
      </div>
      <div className="w-full h-[300px] flex flex-col">
        <div className="flex flex-row gap-3">
            <p className="border-b-2">overview</p>
            <p>overview</p>
            <p>overview</p>
            <p>overview</p>
            <p>overview</p>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`

`