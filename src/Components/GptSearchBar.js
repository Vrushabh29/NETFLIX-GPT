import React, { useRef } from 'react'
import lang from '../Utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
//import openai from '../Utils/openai'
import geminiai from '../Utils/geminiai'
import { API_CONSTANT } from '../Utils/constant'
import { addGPTMovieResult } from '../Utils/gptSlice'

const GptSearchBar = () => {

  const searchText=useRef(null)
  const dispatch=useDispatch()
 const handleGPTSearchClick= async()=>{
  console.log(searchText.current.value)
  //make API call and GET movie result
const searchMovieTMDB=async(movie)=>{
  const data= await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_CONSTANT);
   const json= await data.json();
   return json.results;

}


  const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

  // const gptResult = await openai.chat.completions.create({
  //   model: 'gpt-3.5-turbo',
  //   messages: [
  //     { role: 'user', content: gptQuery },
  //   ],
  // });
  const response = await geminiai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: gptQuery,
  });

  if(!response.text) return { 
    //errot handling
    }

  console.log(response.text);
  const gptMovie= response.text.split(",");
  console.log(gptMovie)



  //for  each movie seach TMDB API
  const promiseArray=gptMovie.map( movie=>searchMovieTMDB(movie)) 
  const tmdbResult= await Promise.all(promiseArray)
  console.log(tmdbResult)

 dispatch(addGPTMovieResult({moviename : gptMovie,movieresult:tmdbResult}));
  //console.log(gptResult.choices);
 }
   const langKey= useSelector((store)=>store.config.lang)
  
  return (
    <div className='pt-[35%] md:pt-[15%] flex justify-center'>
      <form action="" className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
        <input ref={searchText} type='text' className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}></input>
        <button className='py-2 px-4 m-4 col-span-3 bg-red-800 text-white rounded-lg ' onClick={handleGPTSearchClick}>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
