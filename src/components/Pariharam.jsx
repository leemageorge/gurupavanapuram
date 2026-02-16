"use client";
import React from "react";
import pariharam from "../assets/images/pariharapoojakal.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
const Pariharam = () => {
  return (
    <div className="container mx-auto px-6 md:px-10 max-w-5xl overflow-hidden mt-12 md:mt-20 mb-20">
      <motion.h2
        className="text-4xl font-bold text-red-700 text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        പരിഹാര പൂജകൾ
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className=""
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image
            src={pariharam}
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
            പരിഹാര പൂജകൾ എന്നത് ജീവിതത്തിലെ തടസ്സങ്ങളും ദോഷങ്ങളും ശമിപ്പിച്ച്
            അനുകൂലതയെ ആകർഷിക്കുന്ന ആത്മീയ മാർഗമാണ്. മന്ത്രങ്ങൾ, പൂജകൾ, വഴിപാടുകൾ
            എന്നിവയിലൂടെ മനസ്സിന് ശാന്തിയും ജീവിതത്തിന് സമത്വവും ലഭിക്കുന്നു.
            വിശ്വാസത്തോടെയും ഭക്തിയോടെയും ചെയ്യുന്ന പരിഹാര പൂജകൾ, ദുഃഖങ്ങളെ
            ലഘൂകരിച്ച് പ്രതീക്ഷയുടെ പുതിയ വഴികൾ തുറക്കുന്നു
          </p>
          {/* <a href="tel:9633443047"> <button className='cursor-pointer bg-amber-400 text-red-700 px-6 md:px-8 py-1 md:py-2 mt-2 rounded-tr-full rounded-bl-full font-bold text-sm md:text-lg'>പരിഹാര പൂജകൾക്കായി വിളിക്കുക </button></a> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Pariharam;
