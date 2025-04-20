import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GPTMoveSuggestion = () => {
  const gpt= useSelector((store)=>store.gpt)
  const {moviename,movieresult}=gpt;
  if(!moviename) return null
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
     <div> 
    
      {moviename.map( (movie,index)=> <MovieList key={movie} title={movie} movies={movieresult[index]} />  )  }
     </div>
    </div>
  )
}

export default GPTMoveSuggestion
