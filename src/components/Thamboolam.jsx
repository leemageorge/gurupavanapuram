"use client";
import React from "react";
import Image from "next/image";
import thambulam from "../assets/images/thamboolam.png";
import { motion } from "framer-motion";
const Thamboolam = () => {
  return (
    <div className="container mx-auto px-6 md:px-10 max-w-5xl overflow-hidden mt-12 md:mt-20">
      <motion.h2
        className="text-4xl font-bold  text-red-700 text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        താംബൂല പ്രശ്നം
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
            src={thambulam}
            alt="introImg"
            className="h-72 object-cover border-2 border-red-700 rounded-br-4xl rounded-tl-4xl"
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div
          className="order-2 md:order-1 flex items-center justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 text-left">
            താംബൂല പ്രശ്നം എന്നത് ചോദ്യം ഉന്നയിക്കുന്ന നിമിഷത്തിലെ സാഹചര്യങ്ങളും
            മനസ്സിലെ ആശങ്കകളും സൂക്ഷ്മമായി വായിക്കുന്ന ജ്യോതിഷശാസ്ത്രരീതിയാണ്.
            വെറ്റില,അടയ്ക്ക,ചുണ്ണാമ്പ് എന്നിവയുടെ സ്ഥാനക്രമം സൂചനകളായി
            ഉപയോഗിച്ച് മറഞ്ഞിരിക്കുന്ന സത്യം തിരിച്ചറിയാൻ ഇത് സഹായിക്കുന്നു.
            ലളിതമായ രീതിയിലൂടെ വ്യക്തതയും ദിശയും നൽകുന്ന ഈ ശാസ്ത്രം,
            സംശയങ്ങൾക്ക് ശാന്തമായ മറുപടി നൽകുന്നൊരു മാർഗമാണ്.
          </p>
          {/* <a href="tel:9633443047"> <button className='cursor-pointer bg-amber-400 text-red-700 px-6 md:px-8 py-1 md:py-2 mt-2 rounded-tr-full rounded-bl-full font-bold text-sm md:text-lg'>താംബൂല പ്രശ്നം നോക്കാനായി വിളിക്കുക </button></a> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Thamboolam;
