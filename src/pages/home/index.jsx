import { useAppContext } from "../../contexts/context";
import Sidebar from "../../custom/sidebar";
import HomePage from "./home";

export default function HomeLayout() {
  const { isSidebarOpen, setIsSidebarOpen } = useAppContext();

  return (
    <div className="flex flex-row">
      <div
        className={`flex flex-col ${
          isSidebarOpen ? "w-[calc(100vw-300px)]" : "w-screen"
        }`}
      >
        <div>
        <button onClick={setIsSidebarOpen(true)}>close</button>
        </div>
        <HomePage />
      </div>
      <Sidebar />
    </div>
  );
}
