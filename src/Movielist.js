import React, { useContext} from 'react'
import Movie from './Movie';
import { MovieContext, MovieProvider } from './MovieContext';
function Movielist() {

const [movies , setMovies] = useContext(MovieContext);

  return (

    <div>
        {movies.map(movie=>(
            <Movie name={movie.name} price={movie.price} key={ movie.id} />
            ))}
    </div>
  )
}

export default Movielist