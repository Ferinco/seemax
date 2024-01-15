import { useAppContext } from "../../contexts/context";
import LandingHero from "../../components/landingHero";
import styled from "styled-components";
export default function HomePage() {
  const { isSidebarOpen } = useAppContext();
  return (
    <Container className="w-full h-screen">
      <LandingHero />
    </Container>
  );
}
const Container = styled.div`
    border: 1px solid white;

`