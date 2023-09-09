import React, { useContext } from 'react'
import './Nav.css'
import { MovieContext } from './MovieContext';

function Nav() {
const [movie, setMovie]= useContext(MovieContext)
  return (
    <div className='nav-bar'>
        <div>
            <li className='nav'>Tamiru </li>
        </div>
        <div>
        <li className='nav'>number of movie:  {movie.length}</li>
        </div>
    </div>
  )
}

export default Nav