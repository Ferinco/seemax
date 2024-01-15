import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../api/axios";
import { Button } from "../custom/button";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import OverlayProgress from "../custom/LoadingOverlay";
export default function LandingPage() {
  const [imageUrl, setImage] = useState("");
  const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(true)
  useEffect(() => {
    getMovieInfo();
  }, []);

  async function getMovieInfo() {
    try {
      const response = await fetchPopularMovies();
      setLoading(false)
      console.log(response);
    } catch (error) {
      console.error("Error fetching movie information:", error.message);
    }
  }

  return (
    <>
    {
      loading ? <OverlayProgress/> :
    <Container className="p-0 h-screen w-[100vw] wrapp overflow-hidden py-5">
      <div className="container mx-auto flex flex-col justify-between h-full px-3 lg:px-0"> 
        <div className="flex flex-row justify-between items-center">
        <Icon className="text-5xl toggle" icon="ion:toggle" />
            <p>logo</p>
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
              <Link to="/login" className="react-router-link">
            <Button red normal className="w-36 py-3.5">
            LOG IN
            </Button>
              </Link>
            <Button normal transparent className="w-44 py-3.5">
              HOW IT WORKS
            </Button>
          </div>
        </div>
        <div className=" lg:flex flex-row gap-10 hidden">
          {/* {movies.slice(0, 2).map((movie, index) => (
            <div className="image flex flex-column relative">
              <img key={index} src={movie.Poster} alt={movie.Title} />
              <div
                key={index}
                className={`text absolute ${
                  index === 1
                    ? "second-image"
                    : "first-image"
                }`}
              ></div>
            </div>
          ))} */}
        </div>
        </div>
        <div className="flex flex-row justify-between icon">
            <p>CONTACT US</p>
            <div className="flex flex-row float-end gap-6">
            <p>ABOUT</p>
            <p>SPONSOR US</p>

            </div>
        </div>
      </div>
    </Container>
    }
    </>
  );
}
const Container = styled.div`
  .image {
    width: 320px;
    img {
      width: 100%;
    }
    .text {
      height: 100%;
      width: 100%;
      opacity: 0.9;
      background: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0) 30%,
        rgba(0, 0, 0, 0.2) 40%,
        rgba(0, 0, 0, 0.4) 50%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0) 70%
      );
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      z-index: 1;
    }
    .second-image{
        background: linear-gradient(to right, rgba(0, 0, 0, 0), #000); /* Dark gradient on the right */
    }
  }
  h2{
    color: white;
  }
  .icon{
    color: grey !important;
  }
`;
