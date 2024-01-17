import styled from "styled-components";
import { fetchPopularMovies, fetchMovieImg } from "../api/axios";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
export default function LandingHero() {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    GetMovies();
  }, []);

  async function GetMovies() {
    try {
      const response = await fetchPopularMovies();
      setMovies(response.data.results);
      console.log(movies);
    } catch (error) {
      ComponentStyle.log(error);
    }
  }

  const getRandomMovies = () => {
    const shuffledMovies = [...movies];
    for (let i = shuffledMovies.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledMovies[i], shuffledMovies[j]] = [
        shuffledMovies[j],
        shuffledMovies[i],
      ];
    }
    return shuffledMovies.slice(0, 4);
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % randomMovies.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + randomMovies.length) % randomMovies.length
    );
  };
  const randomMovies = getRandomMovies();
  console.log(currentIndex);

  return (
    <Container className="w-[100%] rounded-[30px] h-[500px] flex flex-col relative">
      <div className="image relative rounded-[30px] h-full w-full ">
        <img
          src={fetchMovieImg(randomMovies[currentIndex]?.backdrop_path)}
          className="relative rounded-[30px] h-full w-full object-cover object-top flex"
        />
      </div>
      <div className="flex flex-col justify-between p-5 absolute  h-[500px] items-start  backdrop-opacity-10 bg-black/50 rounded-[30px] w-full">
        <div className="backdrop-blur-md backdrop-opacity-50 bg-white/30 rounded-3xl py-1 px-5">
          Popular Now
        </div>
        <div className="flex flex-row justify-between w-full items-end">
          <div className="flex flex-col justify-start items-start text-start max-w-96 gap-3">
            <h4 className="text-3xl font-semibold">
              {randomMovies[currentIndex]?.original_title}
            </h4>
            <p className="text-gray-300">
              {randomMovies[currentIndex]?.overview}
            </p>
            <div className="buttons flex flex-row gap-3">
              <button className="bg-white text-black rounded-3xl px-5 flex flex-row items-center gap-2">
                <Icon icon="bi:play-fill" color="black" fontSize={20}/>
                trailer
              </button>
              <button className="bg-transparent border border-white px-5 rounded-3xl">
                details
              </button>
            </div>
          </div>
          <div className="buttons flex flex-row h-fit gap-3">
            <button
              onClick={handlePrev}
              className="backdrop-blur-md backdrop-opacity-50 bg-white/30 rounded-[50%] text-2xl h-[50px] w-[50px] p-0"
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              className="backdrop-blur-md backdrop-opacity-50 bg-white/30 rounded-[50%] text-2xl h-[50px] w-[50px] p-0"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div``;
