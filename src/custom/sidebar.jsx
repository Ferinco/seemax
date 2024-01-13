import styled from "styled-components";
import { useAppContext } from "../contexts/context";

export default function Sidebar() {
  const { isSidebarOpen, setIsSidebarOpen } = useAppContext();
  console.log(isSidebarOpen);
  return (
    <Container
      className={`h-screen w-[300px] ${isSidebarOpen ? "opened" : "closed"}`}
    >
      <button onClick={setIsSidebarOpen(false)}>close</button>
    </Container>
  );
}
const Container = styled.div`
  border: 1px solid white;
`;
