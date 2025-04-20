import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovie from '../CustomHook/useNowPlayingMovie'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovie from '../CustomHook/usePopularMovie';
import useTopRatedMovie from '../CustomHook/useTopRatedMovie';
import useUpComingMovie from '../CustomHook/useUpComingMovie';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
   const showGPtView=useSelector((store)=> store.gpt.showGptSearch)

  useNowPlayingMovie();
  usePopularMovie();
  useTopRatedMovie();
  useUpComingMovie();

  return (
    <div>
      <Header/>
     { showGPtView ? <GPTSearch/>: <>
      <MainContainer/>
      <SecondaryContainer/> </>}
    </div>
  )
}

export default Browse
