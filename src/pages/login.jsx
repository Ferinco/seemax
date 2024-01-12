import { useEffect, useState } from "react";
import { mainApi } from "../api/axios";
import { Button } from "../custom/button";
import styled from "styled-components";
import { Icon } from "@iconify/react";

export default function LoginPage() {
  const [imageUrl, setImage] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieInfo();
  }, []);

  const searchLink = mainApi + "&s=marvel";

  async function getMovieInfo() {
    try {
      const response = await fetch(searchLink);
      console.log(response.json);
      if (response.ok) {
        const movieData = await response.json();

        if (movieData.Response === "True") {
          setMovies(movieData.Search);
          console.log(movies);
        } else {
          console.error("Movie not found!");
        }
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching movie information:", error.message);
    }
  }

  return (
    <Container className="p-0 h-screen w-screen wrapp overflow-hidden py-5">
      <div className="container mx-auto flex flex-col justify-between h-full"> 
        <div className="flex flex-row justify-between ">
        <Icon className="text-5xl toggle" icon="ion:toggle" />
            <p>logo</p>
            <Button red className="h-fit">SIGN UP</Button>
        </div>
      <div className="flex flex-row gap-40 items-end py-12">
        <div className="media flex flex-col gap-4">
        <Icon className="text-2xl" icon="gg:facebook" />
        <Icon className="text-2xl" icon="akar-icons:x-fill" />
        <Icon className="text-2xl" icon="mingcute:linkedin-fill" />
        <Icon className="text-2xl" icon="mingcute:whatsapp-fill" />
        <Icon className="text-2xl" icon="basil:gmail-solid" />
        </div>
        <div className="  text-start ">
          <h2 className=" text-9xl font-extrabold text-balance text-start">
            Explore
            <br />
            Great
            <br />
            Magic.
          </h2>
          <p className="mt-5 text-xl font-semibold">DON'T MISS OUT ON THE MAGIC. WATCH IT!</p>
          <div className="flex flex-row gap-3 mt-6">
            <Button red className="w-36 py-3.5">
              LOG IN
            </Button>
            <Button transparent className="w-44 py-3.5">
              HOW IT WORKS
            </Button>
          </div>
        </div>
        <div className=" flex flex-row gap-10">
          {movies.slice(0, 2).map((movie, index) => (
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
          ))}
        </div>
        </div>
        <div className="flex flex-row justify-between ">
            <p>CONTACT US</p>
            <div className="flex flex-row float-end gap-2">
            <p>ABOUT</p>
            <p>SPONSOR US</p>

            </div>
        </div>
      </div>
    </Container>
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
`;
