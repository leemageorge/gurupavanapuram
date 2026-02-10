import React from 'react'
import pariharam from "../assets/images/pariharapoojakal.jpg"
import Image from 'next/image'
const Pariharam = () => {
  return (
   <div className='container mx-auto px-6 md:px-10 py-10 max-w-5xl overflow-hidden'>
                  <h2 className='text-2xl md:text-4xl font-bold  text-red-700 text-center mb-6'>പരിഹാര പൂജകൾ</h2>
             <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                   <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                     <Image src={pariharam} alt="introImg" className='w-full h-full object-cover border-2 border-red-700 rounded-lg' width={500} height={500} />
                 </div>
             <div className=' flex flex-col space-y-2 p-8'>
                
                 <p className='text-lg text-gray-600 text-justify'>പരിഹാര പൂജകൾ എന്നത് ജീവിതത്തിലെ തടസ്സങ്ങളും ദോഷങ്ങളും ശമിപ്പിച്ച് അനുകൂലതയെ ആകർഷിക്കുന്ന ആത്മീയ മാർഗമാണ്. മന്ത്രങ്ങൾ, പൂജകൾ, വഴിപാടുകൾ എന്നിവയിലൂടെ മനസ്സിന് ശാന്തിയും ജീവിതത്തിന് സമത്വവും ലഭിക്കുന്നു. വിശ്വാസത്തോടെയും ഭക്തിയോടെയും ചെയ്യുന്ന പരിഹാര പൂജകൾ, ദുഃഖങ്ങളെ ലഘൂകരിച്ച് പ്രതീക്ഷയുടെ പുതിയ വഴികൾ തുറക്കുന്നു</p>
          {/* <a href="tel:9633443047"> <button className='cursor-pointer bg-amber-400 text-red-700 px-6 md:px-8 py-1 md:py-2 mt-2 rounded-tr-full rounded-bl-full font-bold text-sm md:text-lg'>പരിഹാര പൂജകൾക്കായി വിളിക്കുക </button></a> */}
             </div>
            
               
             </div>
         
            
             </div>
  )
}

export default Pariharam