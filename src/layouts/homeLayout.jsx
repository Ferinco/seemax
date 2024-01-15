import Sidebar from "../custom/sidebar"
import HomePage from "../pages/home/home"
export default function HomeLayout(){
    return(
<div className="flex flex-row w-screen">
    <Sidebar/>
    <HomePage/>
</div>
    )
}
    
