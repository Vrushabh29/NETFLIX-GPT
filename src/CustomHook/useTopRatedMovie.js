import { useDispatch, useSelector } from "react-redux";
import {   addTopRatedMovie } from "../Utils/movieSlice";
import { useEffect } from "react";
import { API_CONSTANT } from "../Utils/constant";

 const useTopRatedMovie =()=>{
    const dispatch =useDispatch()
    const topRatedMovie=useSelector(store=>store.movies.topRatedMovie)
    const getPopularMovie =async ()=>{
  
      const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_CONSTANT)
  const json= await data.json();
  console.log(json.results)
  dispatch(addTopRatedMovie(json.results))
    }
  
    useEffect(()=>{
       !topRatedMovie && getPopularMovie();
    },[])
 }

 export default useTopRatedMovie;