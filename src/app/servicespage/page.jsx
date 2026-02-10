import Jathakam from '@/components/Jathakam'
import Prashnam from '@/components/prashnam'

import React from 'react'
import newsletter from "../../assets/images/newsletter.jpg"
import Image from 'next/image'
import Muhoortham from '@/components/Muhoortham'
import Porutham from '@/components/Porutham'
import Grahanila from '@/components/Grahanila'
import Thamboolam from '@/components/Thamboolam'
import Pariharam from '@/components/Pariharam'

const servicespage = () => {
  return (
       <div className='min-h-screen w-full bg-amber-100 mt-16 md:mt-20 '> 
      <Prashnam />
      <Jathakam />
      <Muhoortham />
      <Porutham />
      <Grahanila />
      <Thamboolam />
      <Pariharam />
      <div className='w-full h-64 relative' >
 <div>
   <Image src={newsletter} alt='news letter' className='w-full h-64 object-cover' />
  <div className='absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-2'>
     <h2 className=' text-2xl font-bold leading-snug tra'> ‘ഓം ഭൂർ ഭുവഃ സ്വഃ<br/>  തത് സവിതുർ വരേണ്യം <br/> ഭർഗോ ദേവസ്യ ധീമഹി <br /> ധിയോ യോ നഃ പ്രചോദയാത് ’

</h2>

  </div>
 
   </div>
</div>
    </div>
  )
}

export default servicespage