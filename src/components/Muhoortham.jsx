"use client";
import React from "react";
import Muhurtham from "../assets/images/muhurtham1.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Muhoortham = () => {
  return (
    <div className="container mx-auto px-6 md:px-10 max-w-5xl overflow-hidden mt-8 md:mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-4xl font-bold  text-red-700 text-center mb-6 md:mb-10"
      >
        മുഹൂർത്തം
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image
            src={Muhurtham}
            alt="introImg"
            className="h-72 object-cover border-2 border-red-700 rounded-bl-4xl rounded-tr-4xl"
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div
          className=" flex items-center justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 text-left">
            മുഹൂർത്തം എന്നത് ശുഭകാര്യങ്ങൾ ആരംഭിക്കാൻ ഏറ്റവും അനുയോജ്യമായ
            സമയമാണ്. ഗ്രഹനിലകളും നക്ഷത്രങ്ങളുടെ ഗതിയും അടിസ്ഥാനമാക്കി
            നിശ്ചയിക്കുന്ന മുഹൂർത്തം, പ്രവർത്തികൾ വിജയകരമായി പൂർത്തിയാകാൻ
            സഹായിക്കുന്നതായി വിശ്വസിക്കപ്പെടുന്നു. അതുകൊണ്ട് തന്നെ ജീവിതത്തിലെ
            പ്രധാന അവസരങ്ങൾ മുഹൂർത്തം നോക്കി നടത്തുന്നത് പാരമ്പര്യത്തിന്റെ
            ഭാഗമാണ്.
          </p>
          {/* <a href="tel:9633443047"> <button className='cursor-pointer bg-amber-400 text-red-700 px-6 md:px-8 py-1 md:py-2 mt-2 rounded-tr-full rounded-bl-full font-bold text-sm md:text-lg'>മുഹൂർത്തത്തിനായി വിളിക്കുക </button></a> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Muhoortham;
