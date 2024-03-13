import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../utils/api/axios";
import { Button } from "../custom/button";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import OverlayProgress from "../custom/LoadingOverlay";
import { fetchMovieImg } from "../utils/api/axios";
export default function LandingPage() {
  const [imageUrl, setImage] = useState("");
  const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(()=>{
      getMovieInfo();
      if(movies.length === 0){
        setLoading(true)
      }
      else setLoading(false)
    }, 6000)
    
    setLoading(true)
  }, []);

  async function getMovieInfo() {
    try {
      setLoading(true)
      const response = await fetchPopularMovies();
      console.log(response)
     const data = response.data.results
     setMovies(data)
      console.log(movies)
    } catch (error) {
      console.error("Error fetching movie information:", error.message);
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <>
    {
     loading  ? <OverlayProgress/> :
    <Container className="p-0 h-screen w-[100vw] wrapp overflow-hidden py-3 bg-black backdrop-blur-sm backdrop-opacity-90">
      <div className="container mx-auto flex flex-col justify-between h-full px-3 lg:px-0"> 
        <div className="flex flex-row justify-between items-center">
        <Icon className="text-5xl toggle" icon="ion:toggle" />
            <img src="/default-monochrome.svg" className="h-[100px] w-[100px]"/>
            <Button red normal className="h-fit">SIGN UP</Button>
        </div>
      <div className="flex lg:flex-row lg:gap-40 lg:items-end gap-20 flex-col-reverse items-start w-fit lg:w-full">
        <div className="media flex lg:flex-col gap-4 flex-row">
        <Icon className="text-2xl icon" icon="gg:facebook" />
        <Icon className="text-2xl icon" icon="akar-icons:x-fill" />
        <Icon className="text-2xl icon" icon="mingcute:linkedin-fill" />
        <Icon className="text-2xl icon" icon="mingcute:whatsapp-fill" />
        <Icon className="text-2xl icon" icon="basil:gmail-solid" />
        </div>
        <div className="text-start ">
          <h2 className=" lg:text-9xl font-extrabold text-balance text-start text-7xl">
            Explore
            <br />
            Great
            <br />
            Magic.
          </h2>
          <p className="mt-5 text-xl font-semibold icon">DON'T MISS OUT ON THE MAGIC. WATCH IT!</p>
          <div className="flex flex-row gap-3 mt-6">
              <Link to="/home" className="react-router-link">
            <Button red normal className="w-36 py-3.5">
            GET STARTED
            </Button>
              </Link>
            <Button normal transparent className="w-44 py-3.5">
              HOW IT WORKS
            </Button>
          </div>
        </div>
        <div className=" lg:flex flex-row-reverse gap-10 hidden">
          {movies.slice(7,9).map((movie, index) => (
            <div className="image flex flex-col relative h-[500px] w-[320px]">
              <img key={index} src={fetchMovieImg(movie?.backdrop_path)} alt={movie.Title} className="w-full h-full object-cover object-center" />
              <div
                key={index}
                className={`text absolute ${
                  index === 0
                    ? "first-image bg-gradient-to-b from-transparent 10% via-neutral-900 30% to-neutral-950 90%"
                    : "second-image bg-gradient-to-b from-neutral-900 30% via-transparent 30% to-neutral-950 90%"
                }`}
              >
                
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className="flex flex-row justify-between icon mt-5">
            <p className="m-0 text-sm font-light">CONTACT US</p>
            <div className="flex flex-row float-end gap-6">
            <p className="m-0 text-sm font-light">ABOUT</p>
            <p className="m-0 text-sm font-light">THANK YOU, <Link to="https://www.themoviedb.org/" className="text-red-700 underline hover:text-red-700">TMDB</Link></p>

            </div>
        </div>
      </div>
    </Container>
    }
    </>
  );
}
const Container = styled.div`

    .text {
      height: 100%;
      width: 100%;
      opacity: 0.9;

    }
    .second-image{
      background: linear-gradient(
  to top left,
  rgba(0, 0, 0, 0) 20%,  
  rgba(0, 0, 0, 0.2) 30%,
  rgba(0, 0, 0, 0.4) 40%,
  rgba(0, 0, 0, 0.6) 50%,
  rgba(0, 0, 0, 0.4) 60%,
  rgba(0, 0, 0, 0.2) 70%,
  rgba(0, 0, 0, 0) 80% !important  
);

    }
  h2{
    color: white;
  }
  .icon{
    color: #f1f1f1 !important;
  }
`;
