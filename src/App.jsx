import { useEffect, useState } from 'react';
import { mainApi } from './api/axios'
import './App.css'
function App() {
const [imageUrl, setImage] = useState("")
const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovieInfo();
  }, []);
  
  const searchLink = mainApi + '&s=marvel';
  
  async function getMovieInfo() {
    try {
      const response = await fetch(searchLink);
  console.log(response.json)
      if (response.ok) {
        const movieData = await response.json();

        if (movieData.Response === 'True') {
          setMovies(movieData.Search)
          console.log(movies)
        } else {
          console.error('Movie not found!');
        }
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching movie information:', error.message);
    }
  }
  




  return (
    <div className='p-0 h-screen w-screen wrapp'>
<div className='container ffg flex flex-row p-28 items-end h-fit gap-44' >
  <div className='ffg  text-start'>
  <h2 className='ffg text-9xl font-extrabold text-balance text-start'>
    Explore<br/>Great<br/>Magic.
  </h2>
<p className='mt-5'>CATCH THEM ALL! MISS NONE</p>
<div className='flex flex-row gap-3 mt-3'>
<button>log in</button>
<button>join now</button>
</div>
  </div>
  <div className='ffg flex flex-row gap-10'>
  {
  movies.slice(0, 2).map((movie, index) => (
    <img key={index} src={movie.Poster} alt={movie.Title} />
  ))
}

  </div>


</div>
    </div>
  )
}

export default App
