import React, { createContext,useState } from 'react'

export const MovieContext = createContext();

export function MovieProvider(Props) {

    const [movies , setMovies] = useState([
        {
            name : 'Harry Potter',
            price : '$10',
            id : 23442 
        },
        {
            name : 'Game of Thrones',
            price : '$10',
            id : 2344542 
        },
        {
            name : 'Breaking Bad',
            price : '$10',
            id : 13482 
        }
    ]);

  return (
    <MovieContext.Provider value={[movies , setMovies]}>
        {Props.children}
    </MovieContext.Provider>
  )
}

