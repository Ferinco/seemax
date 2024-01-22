import styled from "styled-components";
import { useAppContext } from "../contexts/context";
import Sidebar from "../custom/sidebar"
import HomePage from "../pages/home/home"
import Navbar from "./components/navbar";
export default function HomeLayout(){
    const { isSidebarOpen, setIsSidebarOpen } = useAppContext();
    return(
<div className="overflow-hidden w-screen bg-neutral-800">
    <Sidebar/>
    <div className={`h-auto lg:ml-[350px] flex flex-col relative screen ${isSidebarOpen ? "absolute " : "relative"}`} >
    <Navbar/>
    <HomePage/>
    </div>
</div>
    )
}

    
