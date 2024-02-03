import styled from "styled-components";
import { useAppContext } from "../../contexts/context";
import Sidebar from "./sidebar";
import HomePage from "../../pages/home";
import Navbar from "../components/navbar";
import SearchDiv from "../../components/searchDiv";
export default function HomeLayout() {
  const { isSidebarOpen, setIsSidebarOpen, isSearchOpen, setSearchOpen } =
    useAppContext();
  return (
    <div className="overflow-hidden w-screen">
      <Sidebar />
      {isSearchOpen ? (
        <div className="lg:ml-[350px] h-auto bg-black/5">
            <SearchDiv/>
        </div>
      ) : (
        <div
          className={`h-auto lg:ml-[350px] flex flex-col pt-1 relative screen ${
            isSidebarOpen ? "absolute " : "relative"
          }`}
        >
          <Navbar />
          <HomePage />
        </div>
      )}
    </div>
  );
}
