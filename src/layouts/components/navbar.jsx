import styled from "styled-components";
import { useAppContext } from "../../contexts/context";

export default function Navbar(){
    const { isSidebarOpen, setIsSidebarOpen } = useAppContext();

    return(
        <Container className="flex flex-row justify-between lg:justify-end py-3 px-7 ">
            <button className="flex lg:hidden" onClick={
                ()=>{setIsSidebarOpen(true)}
            }>menu</button>
            <div className="py-3 px-5 bg-neutral-800 backdrop-opacity-10 rounded-3xl flex flex-row items-center gap-2 ">
                <div className="rounded-[50%] w-[35px] h-[35px] bg-white"></div> <div className="flex flex-col text-xs">
                <p className="m-0">user user</p>
                <p className="m-0">email...</p>

                </div>
            </div>
        </Container>
    )
}
const Container = styled.div`
    width: 100%;
    
`