'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import SmallBanner from "../assets/images/smallbanner.png"
import nakshatra from "../data/nakshatra.json"

const StarChara = () => {
    const defaultDescription ="അശ്വതി നക്ഷത്രക്കാർ ചുരുങ്ങിയ സമയത്തിനുള്ളിൽ കാര്യങ്ങൾ കൈകാര്യം ചെയ്യുന്നതിൽ കഴിവുള്ളവരാണ്. ഇവർ തീക്ഷണവും സജീവവുമാണ്. ശക്തിയുള്ള തുടക്കംവയ്ക്കലിൽ അവർ മുന്നിലിരിക്കും.";
 
  const [selectedStar, setSelectedStar] = useState(null);

  const handleSelect = (e) => {
    const selectedName = e.target.value;
    const starObject = nakshatra.find(star => star.name === selectedName);
    setSelectedStar(starObject || null);
  };

  return (
    <div className='min-h-[50vh] relative  w-full'>
      <Image src={SmallBanner} alt="SmallBanner" fill className='w-full h-full object-cover' />
      <div className='absolute top-0 right-0 w-full h-full bg-black/40 flex flex-col items-center justify-center space-y-4'>
        <h2 className='text-amber-100  text-xl md:text-3xl  px-3 font-bold text-center'>"നക്ഷത്രം പറയുന്നു, നിങ്ങൾ ആരാണെന്ന്!"</h2>

        <select
          className='border-2 border-amber-200 text-amber-100 p-2 rounded-md text-lg'
          onChange={handleSelect}
        >
          <option value="" className='text-red-700 hover:bg-amber-300'>അശ്വതി</option>
          {nakshatra.map((star) => (
            <option key={star.name} value={star.name} className='text-red-700 '>{star.name}</option>
          ))}
             
        </select>

          <div className='bg-transparent shadow-md p-4 rounded max-w-screen px-8 lg:px-16 w-full text-[#fdf5de]'>
          <p className='text-center text-lg md:text-xl'>
            {selectedStar
              ? selectedStar.description
              : defaultDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StarChara;
