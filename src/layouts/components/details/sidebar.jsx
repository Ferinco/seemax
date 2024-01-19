import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../../contexts/context';
import { fetchMovieImg, fetchTrendingMovies } from '../../../utils/api/axios';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

export default function Sidebar() {
    const { isSidebarOpen, setIsSidebarOpen } = useAppContext();
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      getMovies();
    }, []);
  
    async function getMovies() {
      try {
        const response = await fetchTrendingMovies();
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <Container
      className={`h-screen w-[350px] hidden lg:flex left-0 top-0 right-0 bottom-0 fixed backdrop-blur-md backdrop-opacity-75 bg-white/30  ${
        isSidebarOpen ? "opened " : "closed"
      }`}
    >
      <div className="container flex flex-col py-3 px-4 gap-2 w-[350px] h-screen fixed">
        <div className="flex flex-row justify-end lg:hidden">
          <button
            onClick={() => {
              setIsSidebarOpen(false);
            }}
            className="w-fit p-0 bg-transparent "
          >
            &larr;
          </button>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 350px !important;
`;

