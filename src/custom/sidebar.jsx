import styled from "styled-components";
import { useAppContext } from "../contexts/context";

export default function Sidebar() {
  const { isSidebarOpen, setIsSidebarOpen } = useAppContext();
  console.log(isSidebarOpen);
  return (
    <Container
      className={`h-screen w-3/12 hidden lg:block ${isSidebarOpen ? "opened" : "closed"}`}
    >
     
    </Container>
  );
}
const Container = styled.div`
  border: 1px solid white;
`;
