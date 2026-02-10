import React from 'react'
import jathakam1 from "../assets/images/jathakam1.png"
import Image from 'next/image'
const Jathakam = () => {
  return (
 
    <div className='container mx-auto px-6 md:px-10  max-w-5xl overflow-hidden'>
         <h2 className='text-2xl md:text-4xl font-bold  text-red-700 text-center '>ജാതകം</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
    <div className=' flex flex-col space-y-2 p-8'>
       
        <p className='text-lg text-gray-600 text-justify'>ജാതകം എഴുതുന്നത് ഭാവി അറിയാനായി മാത്രം അല്ല.
ജീവിതത്തെ കുറിച്ച് വ്യക്തമായൊരു ധാരണ നേടാനാണ് അത് സഹായിക്കുന്നത്.
പഠനം, ജോലി, വിവാഹം, ബിസിനസ് തുടങ്ങിയ കാര്യങ്ങളിൽ വലിയ തീരുമാനങ്ങൾ എടുക്കുമ്പോൾ ജാതകം ഒരു വഴികാട്ടിയായി പ്രവർത്തിക്കുന്നു.
ശരിയായ സമയങ്ങൾ തിരഞ്ഞെടുക്കാനും മുന്നോട്ട് പോകുന്ന വഴി വ്യക്തമാക്കാനും ഇത് സഹായകരമാകുന്നു.
അങ്ങനെ, ജീവിതത്തെ ശരിയായ ദിശയിൽ നയിക്കാൻ സഹായിക്കുന്ന ഒരു ഉപകരണമാണു ജാതകം.</p>
 {/* <a href="tel:9633443047"> <button className='cursor-pointer bg-amber-400 text-red-700 px-6 md:px-8 py-1 md:py-2 mt-2 rounded-tr-full rounded-bl-full font-bold text-sm md:text-lg'>ജാതകത്തിനായി വിളിക്കുക </button></a> */}
    </div>
   
        <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
            <Image src={jathakam1} alt="introImg" className='w-full h-full object-cover border-2 border-red-700 rounded-lg' width={500} height={500} />
        </div>
    </div>

   
    </div>

    
  )
}

export default Jathakam