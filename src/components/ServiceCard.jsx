import { seriveCard } from '@/data/data'
import Image from 'next/image'
import React from 'react'

const ServiceCard = () => {
  return (
    
      <div className='container mx-auto px-6 md:px-10  max-w-5xl mb-10 '>
            <h2 className='text-3xl lg:text-5xl font-bold text-red-700 text-center mb-10'>
                 ജ്യോതിഷ സേവനങ്ങൾ </h2>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center'>
            {
                seriveCard.map((service)=>(
                    <div className='bg-amber-300 w-full max-w-[300px] h-96 p-4 rounded-lg shadow-md  hover:shadow-lg cursor-pointer hover:rotate-6 transition ease-in-out ' key={service.title}>
                         <div className=' mb-4 rounded-xl overflow-hidden'>
                <Image
                  src={service.img}
                  alt={service.title}
                  f
                  className='object-cover rounded-xl w-full h-72'
                />
              </div>
                        <h3 className='text-xl font-bold text-red-700 mb-2 text-center'>
                            {service.title}
                            </h3>
                    {/* <p className='text-gray-600 text-sm text-center'>{service.description}</p> */}

                        
                    </div>
                ))
            }
        </div>
            
      </div>

  )
}

export default ServiceCard