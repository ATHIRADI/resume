"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import React from "react";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, delay: 2, ease: "easeIn" },
        }}
        className="relative"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 2.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[444px] xl:h-[444px] mix-blend-lighten "
        >
          <Image
            src="/Images/me.png"
            alt="Photo"
            priority
            quality={100}
            className="object-contain"
            fill
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, delay: 2.4, ease: "easeInOut" },
        }}
        className="absolute " // Adjust the position as needed
      >
        <motion.svg
          className="w-[315px] h-[315px] xl:w-[515px] xl:h-[515px]"
          fill="transparent"
          viewBox="0 0 505 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
