import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies)
  // console.log(movies)
  // console.log(movies.nowPlayMovies)
   
  return movies.nowPlayMovies && (
    <div className=' bg-black'>
      <div className=' mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20 '>
      <MovieList title={"Now Playing"} movies={movies.nowPlayMovies} />     
      <MovieList title={"Top Rated"} movies={movies.topRatedMovie} />
      <MovieList title={"Popular"} movies={movies.PopularMovies} />
      <MovieList title={"Upcoming"} movies={movies.upcomingMovie} />
      </div>
    </div>
  )
}

export default SecondaryContainer
