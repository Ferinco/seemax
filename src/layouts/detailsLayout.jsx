import React, { useEffect, useState } from "react";
import Sidebar from "./components/details/sidebar";
import Navbar from "./components/navbar";
import DetailsPage from "../pages/detailsPage";
import { useAppContext } from "../contexts/context";
import { fetchMovieImg, fetchSingleMovie } from "../utils/api/axios";
import { useParams } from "react-router-dom";

export default function DetailsLayout() {
  const { isSidebarOpen, setIsSidebarOpen } = useAppContext();
  const { id } = useParams();
  const [details, setDetails] = useState();
  useEffect(() => {
    GetDetails();
  }, []);
  async function GetDetails() {
    try {
      const response = await fetchSingleMovie(id);
      setDetails(fetchMovieImg(response.data.backdrop_path));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div
      className="overflow-hidden w-screen bg-neutral-800"
      style={{
        backgroundImage: `url(${details})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        minHeight: "100vh",
      }}
    >
      <Sidebar />
      <div
        className={` h-screen lg:ml-[350px] flex flex-col relative screen  backdrop-opacity-100 bg-black/40 ${
          isSidebarOpen ? "absolute " : "relative"
        }`}
      >
        <Navbar />
        <DetailsPage />
      </div>
    </div>
  );
}
