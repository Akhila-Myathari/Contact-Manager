import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const Navigate = useNavigate();
  return (
     <div id='about' className='flex flex-col items-center mt-6 lg:mt-20'>
            <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
                We make managing
                <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
                    {"  "}
                    easy for you
                </span>
            </h1>
          <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
            use our app and make your day easy, use robust features that we provide and standout from the people around you.
            Get started today!!</p>
        <div className='flex justify-center my-10'>
            <a href='#' onClick={()=>Navigate('/login')}className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded'>Start for free</a>
            <a href='#' className='py-3 px-4 mx-3 rounded-md border'>
            Documentation</a>
        </div>
        <div className='flex mt-10 justify-center'>
            <video autoPlay loop muted className='rounded-lg w-2/5 border border-orange-700 shadow-orange-400 mx-2 my-4'>
            <source src={video1} type="video/mp4" />
            your browser does not support the video tag.
            </video>
            <video autoPlay loop muted className='rounded-lg w-2/5 border border-orange-700 shadow-orange-400 mx-2 my-4'>
            <source src={video2} type="video/mp4" />
            your browser does not support the video tag.
            </video>
        </div>
        </div>
  )
}

export default Hero
