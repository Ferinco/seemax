import { useAppContext } from "../contexts/context";
import HeroSection from "../components/hero";
import styled from "styled-components";
import FilterMovies from "../components/filterMovies";
import UpcomingMovies from "../components/upcoming";
import TopCrew from "../components/topCrew";
import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../utils/api/axios";
export default function HomePage() {
  const { isSidebarOpen } = useAppContext();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    GetMovies();
  }, []);

  async function GetMovies() {
    try {
      const response = await fetchPopularMovies();
      setMovies(response.data.results);
      console.log(response.data.results);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)

    }
  }
  return (
    <>
    {
      loading ? (<div className="h-screen w-full bg-black">
        
        </div>) : (
          <Container className="w-full flex flex-col gap-12 bg-black/5" >
            <div className="md:px-7 px-4 ">
            <HeroSection />
      
            </div>
            <FilterMovies/>
            <UpcomingMovies/>
            <TopCrew/>
          </Container>

        )
    }
  </>
  )

}
const Container = styled.div`

`