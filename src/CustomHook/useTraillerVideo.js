import { useEffect } from "react"
import { addTrailler } from "../Utils/movieSlice"
import { useDispatch, useSelector } from "react-redux"
import { API_CONSTANT } from "../Utils/constant"

const useTraillerVideo =(movieID)=>{
    const dispatch =useDispatch();

    const traillerVideo=useSelector(store=>store.movies.traillerVideo)


    const getMovieVideo =async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieID+"/videos?language=en-US", API_CONSTANT)
        const json =await data.json()
        //console.log(json)
        const filterData =json.results.filter(video=>video.type== "Trailer" )
        const trailler= filterData.length? filterData[0]: json.results[0]
console.log(trailler)
dispatch(addTrailler(trailler))
    }

    useEffect(()=>{ 
        !traillerVideo && getMovieVideo()},[])
}

export default useTraillerVideo;