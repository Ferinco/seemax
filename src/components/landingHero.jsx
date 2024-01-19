import styled from "styled-components";
import { fetchPopularMovies, fetchMovieImg } from "../utils/api/axios";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import OverlayProgress from "../custom/LoadingOverlay";
import { Link } from "react-router-dom";
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
  const overview = randomMovies[currentIndex]?.overview;
  console.log(randomMovies[currentIndex]?.genre_ids);

  return (
    <>
      {randomMovies ? (
        <Container className="w-[100%] rounded-[30px] h-[600px] flex flex-col relative sm:h-[500px]">
          <div className="image relative rounded-[30px] h-full w-full ">
            <img
              src={fetchMovieImg(randomMovies[currentIndex]?.backdrop_path)}
              className="relative rounded-[30px] h-full w-full object-cover object-top flex"
            />
          </div>
          <div className="flex flex-col justify-between p-5 absolute  h-full items-start  backdrop-opacity-10 bg-black/50 rounded-[30px] w-full">
            <div className="backdrop-blur-md backdrop-opacity-50 bg-white/30 rounded-3xl py-1 px-3 flex flex-row items-center gap-1 text-sm">
              <Icon icon="noto:fire" color="#f1f1f1" /> Popular Now
            </div>
            <div className="flex flex-row justify-between w-full items-end flex-wrap">
              <div className="flex flex-col justify-start items-start text-start max-w-[450px] gap-3">
                <div className="flex flex-row gap-1">
                  {randomMovies[currentIndex]?.genre_ids?.slice(0, 3).map((genre) => (
                    <div className="backdrop-blur-md backdrop-opacity-75 bg-white/30 rounded-3xl py-[2px] px-3 h-fit  w-fit text-sm">
                      {(() => {
                        switch (genre) {
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
                  ))}
                </div>
               <div className="flex flex-col gap-1">
               <h4 className="text-2xl font-medium">
                  {randomMovies[currentIndex]?.original_title}
                </h4>
                <p className="text-gray-300 text-sm">
                  {overview === undefined
                    ? "..."
                    : overview?.split(" ").slice(0, 24).join(" ") + "..."}
                </p>
               </div>
                <div className="buttons flex flex-row gap-3">
                  <button className="bg-white text-black rounded-3xl px-5 flex flex-row items-center gap-2">
                    <Icon icon="bi:play-fill" color="black" fontSize={20} />
                    Trailer
                  </button>
                  <button className="bg-transparent border border-white px-5 rounded-3xl">
                   <Link className="react-router-link" to="/details"> Details</Link>
                  </button>
                </div>
              </div>
              <div className="control-buttons flex flex-row h-fit gap-3 w-full sm:w-fit justify-end mt-5 sm:mt-0">
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
      ) : (
        ""
      )}
    </>
  );
}
const Container = styled.div`

`;
