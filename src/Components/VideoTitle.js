import React from 'react'

const VideoTitle = ({title,overview}) => {
     
  return (
    <div className=' w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black' >
      < h1 className='md:text-6xl text-2xl font-bold'>{title}</h1>
      <p className=' hidden md:inline-block p-6 text-lg w-1/2'>{overview}</p>
      <div className='my-4 md:m-0'>
        <button className='bg-white  rounded-lg   text-xl text-black py-1 px-3 md:py-4 hover:bg-opacity-80'> ▶️ Play </button>
        <button  className=' hidden md:inline-block mx-2  bg-gray-500 bg-opacity-20 rounded-lg px-12 text-xl text-white p-4'> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
