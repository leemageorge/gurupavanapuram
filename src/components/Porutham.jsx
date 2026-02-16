"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import porootham from "../assets/images/porutham.png";
const Porutham = () => {
  return (
    <div className="container mx-auto px-6 md:px-10 max-w-5xl overflow-hidden mt-12 md:20">
      <motion.h2
        className="text-4xl font-bold  text-red-700 text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        പൊരുത്തം
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
            src={porootham}
            alt="introImg"
            className="h-72 object-cover border-2 border-red-700 rounded-tl-4xl rounded-br-4xl"
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div
          className=" flex items-center justify-center order-2 md:order-1"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 text-left">
            പൊരുത്തം എന്നത് രണ്ട് വ്യക്തികളുടെ സ്വഭാവവും ചിന്തകളും ജീവിതപാതകളും
            തമ്മിലുള്ള മനോഹരമായ ഐക്യമാണ്. രണ്ട് മനസ്സുകളുടെ നക്ഷത്രസമന്വയമാണ്
            പൊരുത്തം. നക്ഷത്രങ്ങളും ഗുണങ്ങളും ഒത്തുചേരുമ്പോൾ പരസ്പര ബഹുമാനവും
            മനസ്സിലാക്കലും നിറഞ്ഞ ബന്ധം രൂപപ്പെടുന്നു. ശക്തമായ പൊരുത്തം
            ദാമ്പത്യജീവിതത്തിന് സമാധാനവും വിശ്വാസവും ഒരുമിച്ച് വളരാനുള്ള
            ശക്തിയും സമ്മാനിക്കുന്നു.
          </p>
          {/* <a href="tel:9633443047"> <button className='cursor-pointer bg-amber-400 text-red-700 px-6 md:px-8 py-1 md:py-2 mt-2 rounded-tr-full rounded-bl-full font-bold text-sm md:text-lg'>പൊരുത്തം നോക്കാനായി വിളിക്കുക </button></a> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Porutham;
