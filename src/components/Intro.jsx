import React from 'react'
import introImg from "../assets/images/introImage.png"
import Image from 'next/image'

const Intro = () => {
  return (
    <div className='min-h-[80vh]   w-full bg-[#f8edaf] flex items-center justify-between'>
      <div className='container mt-12 lg:mt-0 mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-center gap-y-16 lg:gap-y-8  gap-x-6 px-6 md:px-8 py-1 md:py-12'>
        
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
          <Image src={introImg} alt="introImg" className='w-full h-full object-cover border-2 border-red-700 rounded-lg' width={500} height={500} />
        </div>

        <div className="text-center lg:text-left">
          <h1 className="text-2xl md:text-4xl font-bold mb-4  text-red-700">Gurupavanapuram Jyothishalayam</h1>
          <p className="text-lg text-gray-600">In the light of traditional astrological wisdom, we guide your life’s journey with clarity and confidence. With trust and hope — a reliable destination for answers to your life’s deepest questions.</p>
          <button className='bg-amber-400 text-red-700 px-6 md:px-8 py-1 md:py-2 mt-2 rounded-tr-full rounded-bl-full font-bold text-sm md:text-lg'>Know more</button>
        </div>

      </div>
    </div>
  )
}

export default Intro
