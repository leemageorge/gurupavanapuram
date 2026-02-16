"use client";

import React from "react";
import { motion } from "framer-motion";
import jathakam1 from "../assets/images/jathakam1.png";
import Image from "next/image";
const Jathakam = () => {
  return (
    <div className="container mx-auto px-6 md:px-10 max-w-5xl overflow-hidden md:mt-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-4xl font-bold  text-red-700 text-center mb-6 md:mb-10"
      >
        ജാതകം
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image
            src={jathakam1}
            alt="introImg"
            className="h-72 object-cover border-2 border-red-700 rounded-tl-4xl rounded-br-4xl"
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div
          className=" order-2 md:order-1 flex items-center justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 text-left">
            ജാതകം എഴുതുന്നത് ഭാവി അറിയാനായി മാത്രം അല്ല. ജീവിതത്തെ കുറിച്ച്
            വ്യക്തമായൊരു ധാരണ നേടാനാണ് അത് സഹായിക്കുന്നത്. പഠനം, ജോലി, വിവാഹം,
            ബിസിനസ് തുടങ്ങിയ കാര്യങ്ങളിൽ വലിയ തീരുമാനങ്ങൾ എടുക്കുമ്പോൾ ജാതകം ഒരു
            വഴികാട്ടിയായി പ്രവർത്തിക്കുന്നു. ശരിയായ സമയങ്ങൾ തിരഞ്ഞെടുക്കാനും
            മുന്നോട്ട് പോകുന്ന വഴി വ്യക്തമാക്കാനും ഇത് സഹായകരമാകുന്നു. അങ്ങനെ,
            ജീവിതത്തെ ശരിയായ ദിശയിൽ നയിക്കാൻ സഹായിക്കുന്ന ഒരു ഉപകരണമാണു ജാതകം.
          </p>
          {/* <a href="tel:9633443047"> <button className='cursor-pointer bg-amber-400 text-red-700 px-6 md:px-8 py-1 md:py-2 mt-2 rounded-tr-full rounded-bl-full font-bold text-sm md:text-lg'>ജാതകത്തിനായി വിളിക്കുക </button></a> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Jathakam;
