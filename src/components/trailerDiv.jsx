import styled from "styled-components";
import { useAppContext } from "../contexts/context";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import {
  fetchMovieImg,
  fetchSimilarMovies,
  fetchSingleMovie,
  watchTrailer,
} from "../utils/api/axios";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Trailer() {
  const { movieId, setMovieId, openTrailer, setTrailerOpen } = useAppContext();
  const [videoId, setVideoId] = useState("");
  const [details, setDetails] = useState();
  const [similar, setSimilar] = useState();
  const [loading, setLoading] = useState(true);

  //get videos of the movie
  useEffect(() => {
    async function GetVideos() {
      try {
        const response = await watchTrailer(movieId);
        console.log(response.data.results);
        setVideoId(response.data.results[0].id);
      } catch (error) {
        console.log(error);
      } finally {
        // setLoading(false);
      }
    }

    //to get details of the movie
    async function GetDetails() {
      try {
        const response = await fetchSingleMovie(movieId);
        console.log(response.data);
        setDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    //to get similar movies
    async function GetSimilar() {
      try {
        // setLoading(true)
        const response = await fetchSimilarMovies(movieId);
        setSimilar(response.data.results);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
      finally{
        setLoading(false)
      }
    }

    GetVideos();
    GetDetails();
    GetSimilar();
  }, [movieId]);

  //opts set up for react-youtube
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Wrapper className="w-screen min-h-screen fixed top-0 left-0 right-0 z-50 backdrop-blur-xl backdrop-opacity-100 bg-black/30 flex flex-col gap-5 overflow-y-auto">
    {
        loading? (<div className="flex justify-center items-center h-screen text-center">
            <h3>...loading</h3>
        </div>) : (
             <>
             <div className="flex flex-row pt-3 px-5">
               <button
                 onClick={() => {
                   setTrailerOpen(false);
                 }}
               >
                 <Icon
                   icon="eva:arrow-back-outline"
                   className="text-2xl"
                   style={{ color: "white" }}
                 />{" "}
               </button>
             </div>
             <div className="flex flex-row justify-between px-5 ">
               <YouTube
                 id={videoId}
                 className={"youtube rounded-3xl w-[600px]"}
                 iframeClassName={"iframe rounded-3xl w-full h-full"}
               />
               <div className="flex flex-col max-w-[400px] gap-10 items-start text-start">
                 <input
                   placeholder="Search Here"
                   className="py-2 px-4 bg-transparent w-fit"
                 />
                 <div className="flex flex-col gap-3">
                   <h5>Disclaimer</h5>
                   <p className="text-sm">
                     Seemax does not claim ownership of any movie listed on the site.
                     This is a personal product by me to test and better improve my
                     programming skills. If your copyrighted material has been
                     uploaded or links to your copyrighted material has been
                     uploaded, kindly click here to file a take down notice.
                   </p>
                 </div>
                 <div className="flex flex-row gap-4">
                   <div className="logo w-16 h-16 p-0">
                     <img
                       src="/loaderimage.svg"
                       className="block w-full h-full object-contain"
                     />
                   </div>
                   <div className="logo w-16 h-16 p-0">
                     <img
                       src="/default-monochrome.svg"
                       className="block w-full h-full object-contain"
                     />
                   </div>
                   <Icon icon="logos:youtube-icon" className="logo w-11 h-16 p-0"/>
                 </div>
               </div>
             </div>
             <div>
               <h4 className="pl-7 text-md font-medium flex flex-row gap-2 items-center">
                 <Icon icon="fxemoji:pushpin" />
                 Watch Similar Trailers
               </h4>
               <div className="body w-full block md:pl-7 pr-4 pl-4 overflow-x-auto mt-2">
                 <div className="flex flex-row gap-2 overflow-x-auto w-fit">
                   {similar?.map((movie) => (
                     <div className="image h-48 w-60 relative flex flex-col justify-end">
                       <img
                         src={fetchMovieImg(movie.backdrop_path)}
                         className="h-full w-full object-center object-cover rounded-3xl absolute "
                       />
                       <div className="absolute w-full h-full rounded-3xl flex flex-row justify-between p-3 items-end text-start bg-gradient-to-t from-neutral-800 30% via--100 90% to-transparent 100% ">
                         <div className="h-full flex flex-col justify-between">
                           <div className=" justify-end flex flex-row mr-[-32px]">
                             <div className="icon-div p-0 backdrop-opacity-50 backdrop-blur-md bg-black/50 rounded-[50%] ">
                               <Link
                                 className="react-router-link"
                                 to={`/details/${movie?.id}`}
                               >
                                 <Icon
                                   icon="majesticons:more-menu-line"
                                   width="30"
                                   color="white"
                                 />
                               </Link>
                             </div>
                           </div>
                           <div className="flex flex-col">
                             <div className="backdrop-blur-md backdrop-opacity-50 bg-white/30 rounded-3xl py-[2px] px-3 w-fit text-xs h-fit mb-2">
                               {(() => {
                                 switch (movie?.genre_ids[0]) {
                                   case 28:
                                     return "Action";
                                   case 53:
                                     return "Thriller";
                                   case 9648:
                                     return "Mystery";
                                   case 10752:
                                     return "War";
                                   case 10751:
                                     return "Family";
                                   case 10749:
                                     return "Romance";
                                   case 37:
                                     return "Western";
                                   case 16:
                                     return "Animation";
                                   case 12:
                                     return "Adventure";
                                   case 35:
                                     return "Comedy";
                                   case 80:
                                     return "Crime";
                                   case 99:
                                     return "Documentary";
                                   case 18:
                                     return "Drama";
                                   case "10751":
                                     return "Family";
                                   case 14:
                                     return "Fantansy";
                                   case 36:
                                     return "History";
                                   case 27:
                                     return "Horror";
                                   case 10402:
                                     return "Music";
                                   case 878:
                                     return "Sci-fi";
                                   default:
                                     return "";
                                 }
                               })()}
                             </div>
                             <h6 className="text-xs text-white">
                               {movie.title?.slice(0, 18) + "..."}
                             </h6>
                             <p className="m-0 text-xs text-gray-300">
                               {" "}
                               {movie.overview?.slice(0, 32) + "..."}
                             </p>
                           </div>
                         </div>
                         <div className="icon-div p-2 bg-white rounded-[50%]">
                           <Icon icon="bi:play-fill" color="black" />
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
             </div>
           </>
        )
    } 
    </Wrapper>
  );
}
const Wrapper = styled.div`
  z-index: 9999 !important;
  input {
    border: 1px solid grey;
    border-radius: 25px;
    &::placeholder {
      font-size: 15px;
    }
  }
  .youtube {
    /* border: 7px solid white; */
  }
`;
