import styled from "styled-components";
import { fetchPopularMovies, fetchMovieImg } from "../api/axios";
import { useEffect, useState } from "react";
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
    <Container className="w-[100%] rounded-[30px] h-[500px] flex flex-col">
      <div className="image relative rounded-[30px] h-full w-full">
        <img
          src={fetchMovieImg(randomMovies[currentIndex]?.backdrop_path)}
          className="relative rounded-[30px] h-full w-full object-cover object-top flex"
        />
      </div>
        <div className="flex flex-row justify-between absolute p-4 h-[500px] items-end w-full">
          <div className="flex flex-col justify-start items-start text-start max-w-96">
            <h4>{randomMovies[currentIndex]?.original_title}</h4>
            <p>{randomMovies[currentIndex]?.overview}</p>
            <div className="buttons flex flex-row">
              <button>trailer</button>
              <button>details</button>
            </div>
          </div>
          <div className="buttons flex flex-row">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button> 
          </div>
        </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100% !important;
`;
