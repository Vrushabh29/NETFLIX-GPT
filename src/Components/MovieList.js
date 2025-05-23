import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {

  console.log(movies)
  return (
    
    <div className='px-6'>
        <h1 className='md:text-3xl text-lg py-4 text-white'>{title}</h1>
    <div className='flex overflow-x-scroll'>
        <div className='flex'>
       { movies?.map(movie => <MovieCard  posterPath={movie.poster_path} />) }  
        </div>
      
    </div>
    </div>
  )
}

export default MovieList
