import { useEffect, useState } from 'react';
import { mainApi } from '../api/axios'
import { Button } from '../custom/button';
import styled from 'styled-components';


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
    <Container className="p-0 h-screen w-screen wrapp overflow-hidden">
      <div className="container ffg flex flex-row p-28 items-end h-fit gap-44 ">
        <div className="ffg  text-start">
          <h2 className="ffg text-9xl font-extrabold text-balance text-start">
            Explore
            <br />
            Great
            <br />
            Magic.
          </h2>
          <p className="mt-5 text-xl">CATCH THEM ALL! MISS NONE</p>
          <div className="flex flex-row gap-3 mt-6">
            <Button red className='w-36 py-3.5'>LOG IN</Button>
            <Button transparent className='w-44 py-3.5'>HOW IT WORKS</Button>
          </div>
        </div>
        <div className="ffg flex flex-row gap-10">
          {movies.slice(0, 2).map((movie, index) => (
            <div className='image flex flex-column relative'>
                <img key={index} src={movie.Poster} alt={movie.Title} />
                <div className='text absolute'></div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
.image{
    width: 320px;
    border: 1px solid white;
    img{
        width: 100%;
    }
    .text{
        height: 100%;
        background-color: black;
    }
}
`
