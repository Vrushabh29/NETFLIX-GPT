import { useDispatch, useSelector } from "react-redux";
import {  addNowPopularMovie } from "../Utils/movieSlice";
import { useEffect } from "react";
import { API_CONSTANT } from "../Utils/constant";

 const usePopularMovie =()=>{
    const dispatch =useDispatch()
    const PopularMovies=useSelector(store=>store.movies.PopularMovies)
    const getPopularMovie =async ()=>{
  
      const data= await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_CONSTANT)
  const json= await data.json();
  console.log(json.results)
  dispatch(addNowPopularMovie(json.results))
    }
  
    useEffect(()=>{
      !PopularMovies &&  getPopularMovie();
    },[])
 }

 export default usePopularMovie;