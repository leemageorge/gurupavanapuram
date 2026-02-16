"use client";
import React from "react";
import introImg from "../assets/images/introImage.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const Intro = () => {
  return (
    <div className="container max-w-5xl py-14 px-10 mx-auto overflow-hidden md:mb-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once:false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image
            src={introImg}
            alt="introImg"
            className="object-cover border-2 border-red-700 rounded-bl-4xl rounded-tr-4xl  animate-reveal from-left delay-1 "
            width={500}
            height={400}
          />
        </motion.div>

        <motion.div
          className="text-center flex items-center justify-center flex-col gap-2"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once:false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-3xl font-bold text-red-700  animate-reveal from-right delay-1 ">
            Gurupavanapuram Jyothishalayam
          </h1>
          <p className="text-lg text-gray-600  animate-reveal from-left delay-1 ">
            In the light of traditional astrological wisdom, we guide your
            life’s journey with clarity and confidence. With trust and hope — a
            reliable destination for answers to your life’s deepest questions.
          </p>
          <Link href="/about" className=" animate-reveal from-top delay-1 ">
            {" "}
            <button className="cursor-pointer bg-amber-400 text-red-700 px-10 md:px-14 py-1 md:py-2 mt-2 rounded-tr-full rounded-bl-full font-bold text-2xl">
              Know more
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
