import React from 'react'

const MovieCard = ({movie, addMovie, list, removeMovie}) => {
  const inWatchList = list.filter((m) => {
    return m.id === movie.id
  })

  const button = inWatchList.length === 0 ? (
    <button onClick={() => addMovie(movie)}>Add to List</button>
  ) : (
    <button onClick={() => removeMovie(movie)}>Remove</button>
  );

  return (
    <div className='movie-card'>
        <div>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
            <h3>{movie.original.title}</h3>
        </div>
        {button}
        
    </div>
  )
}

export default MovieCard