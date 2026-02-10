import React from 'react'
import Muhurtham from "../assets/images/muhurtham1.png"
import Image from 'next/image'

const Muhoortham = () => {
  return (
     <div className='container mx-auto px-6 md:px-10 py-10 max-w-5xl overflow-hidden'>
             <h2 className='text-2xl md:text-4xl font-bold  text-red-700 text-center mb-6 '>മുഹൂർത്തം</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                <Image src={Muhurtham} alt="introImg" className='w-full h-full object-cover border-2 border-red-700 rounded-lg' width={500} height={500} />
            </div>
        <div className=' flex flex-col space-y-2 p-8'>
           
            <p className='text-lg text-gray-600 text-justify'>മുഹൂർത്തം എന്നത് ശുഭകാര്യങ്ങൾ ആരംഭിക്കാൻ ഏറ്റവും അനുയോജ്യമായ സമയമാണ്. ഗ്രഹനിലകളും നക്ഷത്രങ്ങളുടെ ഗതിയും അടിസ്ഥാനമാക്കി നിശ്ചയിക്കുന്ന മുഹൂർത്തം, പ്രവർത്തികൾ വിജയകരമായി പൂർത്തിയാകാൻ സഹായിക്കുന്നതായി വിശ്വസിക്കപ്പെടുന്നു. അതുകൊണ്ട് തന്നെ ജീവിതത്തിലെ പ്രധാന അവസരങ്ങൾ മുഹൂർത്തം നോക്കി നടത്തുന്നത് പാരമ്പര്യത്തിന്റെ ഭാഗമാണ്.</p>
     {/* <a href="tel:9633443047"> <button className='cursor-pointer bg-amber-400 text-red-700 px-6 md:px-8 py-1 md:py-2 mt-2 rounded-tr-full rounded-bl-full font-bold text-sm md:text-lg'>മുഹൂർത്തത്തിനായി വിളിക്കുക </button></a> */}
        </div>
       
          
        </div>
    
       
        </div>
  )
}

export default Muhoortham


     
 