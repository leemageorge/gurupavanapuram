import React from 'react'
import Image from 'next/image'
import prasnam from "../assets/images/prasnam.webp"



const Prashnam = () => {
  return (
 
              <div className="container mx-auto px-6 md:px-10 py-10 max-w-5xl overflow-hidden ">
                <h1 className="text-2xl md:text-4xl font-bold  text-red-700 text-center mb-6">പ്രശ്ന ജ്യോതിഷ ശാസ്ത്രം</h1>
          <div className=' grid grid-cols-1 md:grid-cols-2 gap-8'>
            
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
              <Image src={prasnam} alt="introImg" className='w-full h-full object-cover border-2 border-red-700 rounded-lg' width={500} height={500} />
            </div>
    
            <div className="flex flex-col space-y-2 p-8">
              
              <p className="text-lg text-gray-600 text-justify ">
               വിവാഹം നീളുകയാണോ, ജീവിതത്തിൽ തുടർച്ചയായ തടസ്സങ്ങളാണോ, ശ്രമിച്ചിട്ടും ജോലി ലഭിക്കാത്തതാണോ? ഇത്തരം സംശയങ്ങൾക്കും ആശങ്കകൾക്കും വേഗത്തിൽ വ്യക്തമായ മാർഗ്ഗനിർദ്ദേശം നൽകുന്ന പരമ്പരാഗത ജ്യോതിഷ രീതിയാണ് പ്രശ്ന ജ്യോതിഷം. ജനനസമയം അറിയാത്ത സാഹചര്യങ്ങളിലും, ചോദ്യം ചോദിക്കുന്ന നിമിഷത്തിലെ ഗ്രഹസ്ഥാനങ്ങളെ അടിസ്ഥാനമാക്കി പരിഹാരങ്ങളും മാർഗങ്ങളും നിർദ്ദേശിക്കപ്പെടുന്നു—ജീവിതത്തിന് വ്യക്തതയും ആത്മവിശ്വാസവും നൽകാൻ.
              </p>
            {/* <a href="tel:9633443047"> <button className='cursor-pointer bg-amber-400 text-red-700 px-6 md:px-8 py-1 md:py-2 mt-2 rounded-tr-full rounded-bl-full font-bold text-sm md:text-lg'>പരിഹാരത്തിനായി വിളിക്കുക </button></a> */}
            </div>
    
          </div>

        
</div>

    
  )
}

export default Prashnam