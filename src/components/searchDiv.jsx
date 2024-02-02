import React, { useEffect, useState } from "react";
import { useAppContext } from "../contexts/context";
import { searchMovies } from "../utils/api/axios";
import styled from "styled-components";

export default function SearchDiv() {
  const { query, setQuery, isSearchOpen, setSearchOpen } = useAppContext();
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    GetPopular();
    GetTrending();
  }, []);
  async function GetPopular() {
    try {
      const response = await searchMovies(query, 1);
      setPopular(response.data.results);
      console.log(response);
      console.log(popular);
    } catch (error) {
      console.log(error);
    }
  }
  async function GetTrending() {
    try {
      const response = await searchMovies(query, 3);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(query);
  return (
    <Wrapper className="flex flex-col gap-3 justify-center align-center">
        jdgejldg,ju
      <div>
        <div className="flex flex-row justify-start">
          <p>Popular Now</p>
        </div>
        <div className="flex flex-row gap-1">
          {popular.map((movie) => (
            <div className="border">{movie?.title}</div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
