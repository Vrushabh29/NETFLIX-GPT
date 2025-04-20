import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovie } from "../Utils/movieSlice";
import { useEffect } from "react";
import { API_CONSTANT } from "../Utils/constant";

 const useNowPlayingMovie =()=>{
    const dispatch =useDispatch()
    const nowPlayMovies=useSelector(store=>store.movies.nowPlayMovies)
    const getCallMovie =async ()=>{
  
      const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_CONSTANT)
  const json= await data.json();
  console.log(json.results)
  dispatch(addNowPlayingMovie(json.results))
    }
  
    useEffect(()=>{
      !nowPlayMovies && getCallMovie();
    },[])
 }

 export default useNowPlayingMovie;