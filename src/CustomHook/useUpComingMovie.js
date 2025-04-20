import { useDispatch, useSelector } from "react-redux";
import {   addUPComingMovie } from "../Utils/movieSlice";
import { useEffect } from "react";
import { API_CONSTANT } from "../Utils/constant";

 const useUpComingMovie =()=>{
    const dispatch =useDispatch()

    const upcomingMovie=useSelector(store=>store.movies.upcomingMovie)
    const getPopularMovie =async ()=>{
  
      const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_CONSTANT)
  const json= await data.json();
  console.log(json.results)
  dispatch(addUPComingMovie(json.results))
    }
  
    useEffect(()=>{
       !upcomingMovie && getPopularMovie();
    },[])
 }

 export default useUpComingMovie;