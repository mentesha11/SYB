import React from 'react'
import { ReactTyped } from "react-typed";




const Hero = () => {


  

    return (

      
          

        <div className='text-white'>

    <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>

        <p className='text-[#00df9a] font-bold p-2'>The comfort Company</p>
        <h1 className='md:text-5xl sm:text-6xl text-4xl font-bold md:py-6'>Start your bussines</h1>
        <div className='justify-center items-center '>
            <p className='md:text-4xl sm:text-4xl text-xl font-bold p-3'>Lets do it together</p>
            <ReactTyped
    startWhenVisible
    className='md:text-2xl sm:text-4xl text-xl font-bold pl-2'
    strings={[
      "make your life better!.",
    ]}
    typeSpeed={50}
  />
    </div>
   <a href="#Analytics"> <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button> </a>
    </div>

        </div>
    );
  };
        
        
    

export default Hero