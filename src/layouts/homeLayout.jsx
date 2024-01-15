import { useAppContext } from "../contexts/context";
import Sidebar from "../custom/sidebar"
import HomePage from "../pages/home/home"
import Navbar from "./components/navbar";
export default function HomeLayout(){
    const { isSidebarOpen, setIsSidebarOpen } = useAppContext();
    return(
<div className={`flex flex-row w-screen relative  bg-neutral-900 backdrop-blur-sm`}>
    <Sidebar/>
    <div className={`w-screen lg:w-9/12 h-screen ${isSidebarOpen ? "absolute" : "relative"}`} >
    <Navbar/>
    <HomePage/>
    </div>
</div>
    )
}
    
