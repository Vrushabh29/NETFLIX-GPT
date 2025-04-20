import React from 'react'

import { useSelector } from 'react-redux'

import useTraillerVideo from '../CustomHook/useTraillerVideo'
//import useTraillerVideo from '../CustomHook/useTraillerVideo'

const VideoBackground = ({movieID}) => {
    const traillerVideo= useSelector((store)=> store.movies.traillerVideo)
   // console.log(traillerVideo)

   useTraillerVideo(movieID)
  return (
    <div className='w-screen '>
      <iframe  className='w-screen aspect-video'  src={"https://www.youtube.com/embed/"+traillerVideo?.key+"?autoplay=1&mute=1"} title="A Minecraft Movie (2025) ┊ Trailer [ 4K ]"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground
