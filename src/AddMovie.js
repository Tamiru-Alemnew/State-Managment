import React, { useContext, useState } from 'react'
import { MovieContext } from './MovieContext'

function AddMovie() {

const [name, setName] = useState('abebe')
const [price , setPrice] = useState('$')

const [movies , setMovies] = useContext(MovieContext)

function updateName(e){
    setName(e.target.value )
}

function updatePrice(e){
    setPrice(e.target.value)
}

function addMovie(e){
    e.preventDefault();
    setMovies(prevMovies=>[...prevMovies,{name : name, price: price }])
}

  return (
    <div>
        <form onSubmit={addMovie}>
            <input type="text" name="name" value={name} onChange={updateName}></input>
            <input type="text" name="price" value={price} onChange={updatePrice}></input>
            <button>submit</button>
        </form>
    </div>
  )
}

export default AddMovie