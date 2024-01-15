import { useAppContext } from "../../contexts/context";
import LandingHero from "../../components/landingHero";
import styled from "styled-components";
export default function HomePage() {
  const { isSidebarOpen } = useAppContext();
  return (
    <Container className="w-screen lg:w-9/12 h-screen">
      <LandingHero />
    </Container>
  );
}
const Container = styled.div`
    border: 1px solid white;

`