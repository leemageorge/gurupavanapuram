"use client";
import Image from "next/image";
import React from "react";
import mobileContact from "../../assets/images/mobilecontactbg.png";
import contactbg from "../../assets/images/contactbg.png";
import { motion } from "framer-motion";
// import call from "../../assets/images/call.svg"
// import location from "../../assets/images/location.svg"
import consultation from "../../assets/images/consultation.svg";

const Contact = () => {
  return (
    <div className="min-h-[60vh] md:min-h-screen w-full relative  mt-12  px-10  overflow-hidden ">
      {/* mobile view */}
      <Image
        src={mobileContact}
        alt="mobile contact image"
        fill
        priority
        className="block md:hidden absolute object-cover"
      />
      {/* desktop view */}
      <Image
        src={contactbg}
        alt="desktop image"
        fill
        priority
        className="hidden md:block absolute object-cover"
      />
      <div className="absolute bg-black/50 inset-0"></div>
      <div className="relative  mt-36 text-center mx-auto max-w-5xl mb-6">
        <div>
          <motion.h2 className="text-2xl md:text-4xl font-bold text-amber-100 capitalize "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once:false}}
            transition={{ duration: 0.5 }}
          >
            Connect with Divine Guidance
          </motion.h2>
          <motion.p className="text-amber-100 text-sm md:text-md italic"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once:false}}
            transition={{ duration: 0.5 }}
          >
            Get personalized astrology consultation
          </motion.p>
        </div>
        <motion.div className="flex  items-center justify-center gap-6  mt-6"
          initial={{ opacity: 0, x:-60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{once:false}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex  items-center gap-2 bg-amber-100 text-amber-900 px-1 py-1 w-fit rounded-bl-xl  rounded-tr-xl ">
            <div className="border-1 border-amber-900 px-2 md:px-4 py-1 rounded-bl-xl  rounded-tr-xl flex items-center justify-center gap-2">
              {/* <Image src={call} /> */}
              <a href="tel:+919539374415">
                <p className="font-bold">Call us</p>
              </a>
            </div>
          </div>
          <div className="flex  items-center gap-2 bg-amber-100 text-amber-900 px-1 py-1 w-fit rounded-bl-xl  rounded-tr-xl ">
            <div className="flex items-center gap-2 justify-center border-1 border-amber-900  px-2 md:px-4 py-1 rounded-bl-xl  rounded-tr-xl">
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24"><path fill="#257807"  d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"/></svg> */}
              <a href={`https://wa.me/919539374415`} target="_blank">
                {" "}
                <p className="font-bold">What's App</p>
              </a>
            </div>
          </div>
          <div className="flex  items-center gap-2 bg-amber-100 text-amber-900 px-1 py-1 w-fit rounded-bl-xl  rounded-tr-xl ">
            <div className="border-1  border-amber-900  px-2 md:px-4 py-1 rounded-bl-xl  rounded-tr-xl flex items-center justify-center gap-2">
              {/* <Image src={location}/> */}
              <a
                href="https://maps.app.goo.gl/6vrBYAxTgT3YPzHK6"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <p className="font-bold">visit us</p>
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div className="bg-amber-100 max-w-3xl mx-auto mt-10 p-2 rounded-bl-4xl rounded-tr-4xl "
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{once:false}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="border-2 border-amber-900 rounded-bl-4xl rounded-tr-4xl ">
            <form className="py-6  ">
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border-1 w-3/4 rounded-md border-amber-900 px-4 py-1 text-red-700 outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border-1 w-3/4 rounded-md border-amber-900 px-4 py-1 text-red-700 outline-none"
                />
                <input
                  type="text"
                  placeholder="Nakshatra"
                  className="border-1 w-3/4 rounded-md border-amber-900 px-4 py-1 text-red-700 outline-none"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="border-1 w-3/4 rounded-md border-amber-900 px-4 py-1 text-red-700 outline-none"
                />
                <input
                  type="text"
                  placeholder="Nakshatra"
                  className="border-1 w-3/4 rounded-md border-amber-900 px-4 py-1 text-red-700 outline-none"
                />
                <textarea
                  type="text"
                  placeholder="Message"
                  className="border-1 w-3/4 rounded-md border-amber-900 px-4 py-1 text-red-700 outline-none resize-none"
                />
              </div>
              <div className="bg-amber-900 p-1 w-fit mx-auto rounded-bl-xl rounded-tr-xl">
                <button className=" text-amber-100 px-4 py-2 rounded-bl-xl rounded-tr-xl font-bold shadow-xl border-1 border-amber-100">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </motion.div>
        <div className="flex mt-12 mx-auto w-1/2">
          {/* <div className='bg-amber-100 p-1 rounded-bl-xl rounded-tr-xl '>
         
          <div className='border-1 border-amber-900 rounded-bl-xl py-1 px-4 rounded-tr-xl space-y-2 items-center flex flex-col gap-2'>
             <div className='border-b-1 border-amber-900 w-3/4 py-2'><Image src={consultation}/></div>
            <p>1000+ Happy <br />Consultations</p></div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
