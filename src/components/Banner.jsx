"use client";
import Image from "next/image";
import React from "react";
import bgImage from "../../public/bannerhero1.jpg";
import RashiChakra from "../assets/images/rashichakra.png";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div className="relative min-h-[80vh] md:min-h-screen w-full">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="bgImage"
        fill
        priority
        className="absolute top-0 left-0 w-full h-full  object-cover"
      />
      <div className="absolute inset-0 bg-black/40 z-0 flex items-center">
        <div className="container max-w-5xl  mx-auto flex flex-col justify-between  items-center gap-4 md:flex-row md:gap-10 w-full  p-4 md:p-8">
          <motion.div
            className="text-amber-300 space-y-3 mt-20 md:mt-0 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once:false,}}
          >
            <h1 className="text-4xl md:text-6xl">
              {" "}
              ഗുരുപവനപുരം <br />
              ജ്യോതിഷനിലയം
            </h1>
            <div className="space-y-0 ">
              <h2 className="text-2xl   ">പ്രവീൺ ശാന്തി </h2>
              <h3 className="text-xl">ചൂഴാൽ ശ്രീകൃഷ്ണസ്വാമി ക്ഷേത്രം</h3>
            </div>
            <a href="tel:+919539374415" className="">
              <button className="cursor-pointer bg-red-700 text-amber-300 px-10 md:px-14 py-1 md:py-2 mt-2 rounded-tr-full rounded-bl-full font-bold text-2xl">
                Call me
              </button>
            </a>
          </motion.div>
          <div>
            <Image
              src={RashiChakra}
              width={300}
              height={300}
              className="object-cover animate-spin-slow"
              alt="rashi chakra"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
