import React from 'react'

function Movie({name ,price , key}) {
  return (
    <div>
        <h3> {name}</h3>
        <p> {price}</p>
    </div>
  )
}

export default Movie