import { useAppContext } from "../../contexts/context";
import LandingHero from "../../components/landingHero";
import styled from "styled-components";
import FilterMovies from "../../components/filterMovies";
export default function HomePage() {
  const { isSidebarOpen } = useAppContext();
  return (
    <Container className="w-full h-screen px-7 flex flex-col gap-8" >
      <LandingHero />
      <FilterMovies/>
    </Container>
  );
}
const Container = styled.div`

`