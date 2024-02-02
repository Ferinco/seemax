import React, { useEffect, useState } from "react";
import { useAppContext } from "../contexts/context";
import { fetchTrendingMovies, searchMovies } from "../utils/api/axios";
import { fetchPopularMovies } from "../utils/api/axios";
import styled from "styled-components";
import { getUpcomingMovies } from "../utils/api/axios";
import { fetchSimilarMovies } from "../utils/api/axios";
export default function SearchDiv() {
  const { query, setQuery, isSearchOpen, setSearchOpen } = useAppContext();
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [results, setResults] = useState([]);
  const [first, setFirst] = useState();
  const [similar, setSimilar] = useState();



  useEffect(() => {
    GetPopular();
    GetTrending();
    GetUpcoming();
    GetResults()
    GetSimilar()
  }, []);
  async function GetResults() {
    try {
      const response = await searchMovies(query);
      setResults(response.data.results);
      setFirst(response.data.results[1].id);
      console.log(first);
      console.log(popular);
    } catch (error) {
      console.log(error);
    }
  }
  async function GetSimilar() {
    try {
      const response = await fetchSimilarMovies(first);
      setSimilar(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }
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
  return (
    <Wrapper className="flex flex-col gap-3 justify-left align-center bg-neutral-800 h-[100vh] ">
      <div className="p-7 flex flex-row justify-start text-2xl font-light">
        <h4>What are you looking for?</h4>
      </div>
      {
        query === "" ?
        (
          <>
      <div>
        <div className="flex flex-row justify-start px-7">
          <p>Popular Now</p>
        </div>
        <div className="flex flex-row gap-1">
          {popular.map((movie) => (
            <div className="border">{movie?.title}</div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-start px-7">
          <p>Trending Now</p>
        </div>
        <div className="flex flex-row gap-1">
          {trending.map((movie) => (
            <div className="border">{movie?.title}</div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-start px-7">
          <p>Watch List Worthy</p>
        </div>
        <div className="flex flex-row gap-1">
          {upcoming.map((movie) => (
            <div className="border">{movie?.title}</div>
          ))}
        </div>
      </div>
      </>
        ) : (
          <>
          <div>
          <div className="flex flex-row justify-start px-7">
            <p>From "{query}"</p>
          </div>
          <div className="flex flex-row gap-1">
            {results.map((movie) => (
              <div className="border">{movie?.title}</div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-start px-7">
            <p>Similar Movies</p>
          </div>
          <div className="flex flex-row gap-1">
            {similar.map((movie) => (
              <div className="border">{movie?.title}</div>
            ))}
          </div>
        </div>
          </>
        )
      }
    </Wrapper>
  );
}
const Wrapper = styled.div``;
