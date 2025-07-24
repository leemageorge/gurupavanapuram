import { seriveCard } from '@/data/data'
import Image from 'next/image'
import React from 'react'

const ServiceCard = () => {
  return (
    <div className='bg-[#f8edaf] '>
      <div className='container mx-auto px-6 md:px-8 py-8 md:py-12'>
            <h2 className='text-3xl lg:text-5xl font-bold text-red-700 text-center mb-10'>
                 ജ്യോതിഷ സേവനങ്ങൾ </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6 '>
            {
                seriveCard.map((service)=>(
                    <div className='bg-amber-300 p-4 rounded-lg shadow-md  hover:shadow-lg cursor-pointer hover:rotate-6 transition ease-in-out ' key={service.title}>
                         <div className='relative w-full h-[200px] mb-4 rounded-xl overflow-hidden'>
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className='object-cover rounded-xl'
                />
              </div>
                        <h3 className='text-xl font-bold text-red-700 mb-2 text-center'>
                            {service.title}
                            </h3>
                    <p className='text-gray-600 text-sm text-center'>{service.description}</p>

                        
                    </div>
                ))
            }
        </div>
            
      </div>
    </div>
  )
}

export default ServiceCard