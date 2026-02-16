"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import bgblack from "../../assets/images/bgabout.png";
import temple from "../../assets/images/temple.jpg";
import guruboard from "../../assets/images/guruflex.webp";
import { motion } from "framer-motion";
const About = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <section className="w-full bg-amber-100 ">
      {/* Banner */}
      <div className="relative w-full h-[20vh] md:h-[70vh] mt-12 md:mt-20">
        <Image
          src={bgblack}
          alt="Gurupavanapuram Banner"
          fill
          priority
          className="object-cover "
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-10 py-14  max-w-4xl overflow-hidden ">
        <div>
          <div className="flex flex-col justify-center items-center gap-10 md:flex-row">
            <div className="w-full md:w-1/2 relative ">
              <div
              className="absolute
             w-72 h-72 
             rounded-[60%_40%_30%_70%/60%_30%_70%_40%]
             bg-gradient-to-tl from-amber-400/60 via-orange-400/60 to-red-700/60
             blur-[100px]"
              />

              <Image
                src={temple}
                alt="temple"
                width={500}
                height={500}
                className={`
             object-cover relative z-10 rounded-bl-4xl rounded-tr-4xl 
             transition-transform duration-500
             ${show ? "brush-reveal" : "brush-hide"}
             `}
              />
            </div>
            <motion.div className="w-full md:w-1/2 "
            initial={{opacity:0,x:60}}
              whileInView={{opacity:1,x:0}}
              viewport={{once:false}}
              transition={{duration:0.8,delay:0.4}}>
              <p className="text-gray-700 text-lg leading-relaxed text-left px-4 animate-reveal from-right delay-1">
                Gurupavanapuram is a traditional jyothishalayam rooted in faith,
                discipline, and long-followed spiritual practices.Praveen Santhi
                is an astrologer and ritual practitioner who follows traditional
                methods with sincerity and care. He has long experience in
                performing poojas, homams, and santhi rituals at the Choozhal
                Sree Krishnaswamy Temple. From daily poojas to special rituals,
                he carries out each service with attention and devotion, helping
                devotees feel calm and reassured.
              </p>
            </motion.div>
          </div>

          {/* ........................................... */}
          <div className="flex flex-col-reverse items-center gap-10 md:flex-row mt-12 ">
            <motion.div className="w-full md:w-1/2 "
            initial={{opacity:0,x:-60}}
              whileInView={{opacity:1,x:0}}
              viewport={{once:false}}
              transition={{duration:0.8,delay:0.4}}>
              <p className="text-gray-700 text-lg leading-relaxed text-left mt-6 from-left animate-reveal delay-2 ">
                He approaches astrology in a simple and practical way, focusing
                on clear horoscope analysis and meaningful guidance. His work
                includes dosha parihara rituals, Graha Shanti, Navagraha homams,
                and family peace ceremonies, all done according to customary
                practices. During temple festivals and special days, he takes
                active responsibility in leading rituals, always with humility
                and respect for tradition.
              </p>
            </motion.div>
            <div className="w-full md:w-1/2 relative ">
              <div
                className="absolute
             w-72 h-72 
             rounded-[60%_40%_30%_70%/60%_30%_70%_40%]
             bg-gradient-to-bl from-amber-400/60 via-orange-400/60 to-red-700/60
             blur-[100px]"
              />

              <Image
                src={guruboard}
                alt="temple"
                width={500}
                height={500}
                className={`
             object-cover relative z-10 rounded-br-4xl rounded-tl-4xl
             transition-transform duration-500
             ${show ? "brush-reveal" : "brush-hide"}
             `}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-10  max-w-4xl min-h-[70vh] md:py-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1381997.3362349786!2d76.04651019662221!3d9.113897813757633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d9.9865405!2d76.30212019999999!4m5!1s0x3b05abb4d4ccffdf%3A0xcaf065a6df94f9ff!2sChoozhal%20Sree%20Krishna%20Swamy%20Temple%2C%20848H%2BQC8%2C%20Parassala%20-%20Kollemcode%20-%20Poovar%20-%20Kovalam%20Rd%2C%20Tamil%20Nadu%20629153!3m2!1d8.3169224!2d77.12858899999999!5e0!3m2!1sen!2sin!4v1770310525412!5m2!1sen!2sin"
          width="100%"
          height={450}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 rounded-bl-4xl rounded-tr-4xl shadow-lg"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default About;
