import Image from 'next/image'
import React from 'react'
import bgImage from "../../public/bannerhero1.jpg"
import RashiChakra from "../assets/images/rashichakra.png"

const Banner = () => {
  return (
    <div className='relative min-h-screen w-full'>
       {/* Background Image */}
      <Image src={bgImage} alt="bgImage"  className='absolute top-0 left-0 w-full h-full object-cover z-[-1]' />
      <div className="absolute inset-0 bg-black/40 z-0 flex items-center ">
      <div className='container mx-auto flex flex-col gap-5 md:flex-row w-full items-center justify-between px-1 md:px-8'>
      <div className='text-amber-300 lg:space-y-5 mt-20 md:mt-0 text-center md:text-left'>
        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-6xl'> ഗുരുപവനപുരം ജ്യോതിഷനിലയം  </h1>
        <h2 className='text-md xs:text-lg sm:text-xl md:text-xl lg:text-4xl'>പ്രവീൺ ശാന്തി </h2>
        <h2 className='text-md xs:text-lg sm:text-xl md:text-xl lg:text-4xl'>ചൂഴാൽ ശ്രീകൃഷ്ണസ്വാമി ക്ഷേത്രം</h2>
        <button className='bg-red-700 text-amber-300 px-4 md:px-8 py-1 mt-3 lg:mt-5 md:py-2  w-fit rounded-tr-full rounded-bl-full font-bold text-sm md:text-lg'>Call me</button>
      </div>
      <div>
        <Image src={RashiChakra} width={400} height={400} className='w-50 h-50 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 animate-spin-slow' alt='rashi chakra'/>
      </div>
      </div>
      </div>

      
    </div>
  )
}

export default Banner