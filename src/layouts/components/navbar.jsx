import styled from "styled-components";
import { useAppContext } from "../../contexts/context";
import { Icon } from "@iconify/react";

export default function Navbar(){
    const { isSidebarOpen, setIsSidebarOpen } = useAppContext();

    return(
        <Container className="flex flex-row justify-between lg:justify-end py-3 md:px-7 px-4 bg-black/5">
            <button className="flex lg:hidden" onClick={
                ()=>{setIsSidebarOpen(true)}
            }><Icon icon="ci:menu-alt-01" rotate={2} /></button>
            <div className="py-2 pl-3 pr-6 backdrop-blur-sm bg-white/30  rounded-3xl flex flex-row items-center gap-2 ">
                <div className="rounded-[50%] w-[25px] h-[25px] bg-neutral-950"></div> <div className="flex flex-col text-xs texts text-start">
                <p className="m-0">Ferinco User</p>
                <p className="m-0">emmaoluwa...</p>

                </div>
            </div>
        </Container>
    )
}
const Container = styled.div`
    width: 100%;
    .texts{
        line-height: 0.9;
    }
    
`