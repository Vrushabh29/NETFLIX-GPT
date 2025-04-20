import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BACKGROUND_URL } from '../Utils/constant'
import GPTMoveSuggestion from './GPTMoveSuggestion'

const GPTSearch = () => {
  return (
    <>    <div className='fixed  -z-10'>
    <img className='h-screen w-screen object-cover' src={BACKGROUND_URL} alt="" />
  </div><div className=''>
     
     <GptSearchBar/>
     <GPTMoveSuggestion/>
   </div></>
    
  )
}

export default GPTSearch
