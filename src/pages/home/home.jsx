import { useAppContext } from "../../contexts/context";
import LandingHero from "../../components/landingHero";
import styled from "styled-components";
import FilterMovies from "../../components/filterMovies";
import UpcomingMovies from "../../components/upcoming";
export default function HomePage() {
  const { isSidebarOpen } = useAppContext();
  return (
    <Container className="w-full px-7 flex flex-col gap-10" >
      <LandingHero />
      <FilterMovies/>
      <UpcomingMovies/>
    </Container>
  );
}
const Container = styled.div`

`