"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Mobile App",
    title: "Fixed Deposit Calculator",

    stack: [
      { name: "flutter" },
      { name: "google fonts" },
      { name: "mobile app" },
    ],
    image: "/Images/calc.png",
    live: "https://github.com/ATHIRADI/fd-calculator-flutter",
  },
  {
    num: "02",
    category: "Mobile App",
    title: "Image Picker",

    stack: [
      { name: "flutter" },
      { name: "Image Picker" },
      { name: "mobile app" },
    ],
    image: "/Images/Image_picker.png",
    live: "https://github.com/ATHIRADI/Image-picker-flutter",
  },
  {
    num: "03",
    category: "Mobile App",
    title: "Time Picker",

    stack: [
      { name: "flutter" },
      { name: "Time Picker" },
      { name: "mobile app" },
    ],
    image: "/Images/time_picker.png",
    live: "https://github.com/ATHIRADI/time-picker-flutter",
  },
  {
    num: "04",
    category: "Mobile App",
    title: "Image Carousel",

    stack: [
      { name: "flutter" },
      { name: "fan carousel image slider" },
      { name: "mobile app" },
    ],
    image: "/Images/Image_carousel.png",
    live: "https://github.com/ATHIRADI/carousel-flutter",
  },
  {
    num: "05",
    category: "Mobile App",
    title: "Text Translator",

    stack: [
      { name: "flutter" },
      { name: "translator" },
      { name: "mobile app" },
    ],
    image: "/Images/text_translator.png",
    live: "https://github.com/ATHIRADI/text-translator-flutter",
  },

  {
    num: "06",
    category: "Mobile App",
    title: "Cryptocurrency Tracker",

    stack: [
      { name: "flutter" },
      { name: "http" },
      { name: "coinGecko API" },
      { name: "mobile app" },
    ],
    image: "/Images/crypto_app.png",
    live: "https://github.com/ATHIRADI/crypto-app-flutter",
  },

  // {
  //   num: "03",
  //   category: "frontend",
  //   title: "Portfolio Website",

  //   stack: [
  //     { name: "react" },
  //     { name: "CSS" },
  //     { name: "photoswipe" },
  //     { name: "slick carousel" },
  //   ],
  //   image: "/Images/portfolio-2.png",
  //   live: "https://portfolio-website-3-gray.vercel.app/",
  // },
  // {
  //   num: "04",
  //   category: "frontend",
  //   title: "Portfolio Website",

  //   stack: [
  //     { name: "react" },
  //     { name: "css" },
  //     { name: "sass" },
  //     { name: "axios" },
  //     { name: "firebase" },
  //   ],
  //   image: "/Images/portfolio-3.png",
  //   live: "https://portfolio-website-1-smoky.vercel.app/",
  // },
  // {
  //   num: "05",
  //   category: "frontend",
  //   title: "Portfolio Website",

  //   stack: [{ name: "react" }, { name: "Tailwind CSS" }, { name: "Next Js" }],
  //   image: "/Images/portfolio-4.png",
  //   live: "https://victorwrites.vercel.app/",
  // },
];

const Works = () => {
  const [proj, setProj] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProj(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 2.4,
        duration: 0.4,
        ease: "easeIn",
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {proj.num}
              </div>

              <h2 className="text-[42px] text-wrap font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {proj.category} project
              </h2>
              <p className="text-white/60">{proj.title}</p>
              <ul className="flex gap-4">
                {proj.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== proj.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4 group">
                <Link target="_blank" href={proj.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center ">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent transition-all duration-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Link</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="relative h-[460px] group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px]  flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Works;
