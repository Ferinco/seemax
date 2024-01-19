import React from "react";
import Sidebar from "./components/details/sidebar";
import Navbar from "./components/navbar";
import DetailsPage from "../pages/detailsPage";
import { useAppContext } from "../contexts/context";

export default function DetailsLayout() {
    const { isSidebarOpen, setIsSidebarOpen } = useAppContext();

  return (
    <div className="overflow-hidden w-screen bg-neutral-800">
      <Sidebar />
      <div
        className={` h-auto lg:ml-[350px] flex flex-col relative screen ${
          isSidebarOpen ? "absolute " : "relative"
        }`}
      >
        <Navbar />
<DetailsPage/>
      </div>
    </div>
  );
}
