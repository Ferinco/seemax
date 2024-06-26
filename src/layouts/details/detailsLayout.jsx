import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import Navbar from "../components/navbar";
import DetailsPage from "../../pages/detailsPage";
import { useAppContext } from "../../../src/contexts/context";
import { fetchMovieImg, fetchSingleMovie } from "../../../src/utils/api/axios";
import { useParams } from "react-router-dom";
import Trailer from "../../components/trailerDiv";
import SearchDiv from "../../components/searchDiv";

export default function DetailsLayout() {
  const {
    isSidebarOpen,
    setIsSidebarOpen,
    openTrailer,
    setTrailerOpen,
    isSearchOpen,
    setSearchOpen,
  } = useAppContext();
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
    <>
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
        {isSearchOpen ? (
          <div className="lg:ml-[350px] h-auto bg-neutral-800">
            <SearchDiv />
          </div>
        ) : (
          <div
            className={` h-screen lg:ml-[350px] flex flex-col relative screen  backdrop-opacity-100 bg-black/40 ${
              isSidebarOpen ? "absolute " : "relative"
            }`}
          >
            <Navbar />
            <DetailsPage />
          </div>
        )}
      </div>
      {openTrailer ? <Trailer /> : ""}
    </>
  );
}
