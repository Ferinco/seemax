import Sidebar from "../../custom/sidebar";
import { useAppContext } from "../../contexts/context";
import Screen from "./screen";
export default function HomePage(){
    const { isSidebarOpen } = useAppContext();
  console.log(isSidebarOpen)

    return(
        <div className="flex flex-col">
            <Screen/>
        </div>
    )
}