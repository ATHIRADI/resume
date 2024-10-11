"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const services = [
  {
    num: 1,
    title: "Web Development",
    description:
      "Professional web development services using the latest technologies and frameworks, including React, Next.js, and MERN stack. From building custom websites to developing web applications tailored to your needs, we ensure high-quality and efficient solutions.",
    href: "https://www.fiverr.com/athiradi",
  },
  {
    num: 2,
    title: "Mobile App Development",
    description:
      "Expert mobile app development using Flutter for both iOS and Android platforms. We create user-friendly and highly functional mobile applications that provide a seamless user experience and meet your business objectives.",
    href: "https://www.fiverr.com/athiradi",
  }
  // {
  //   num: 3,
  //   title: "Fix Bugs on Your Code",
  //   description:
  //     "Quick and reliable bug fixing services for your HTML, CSS, JavaScript, React and Next.js applications. Whether it's a critical issue or a minor bug, we troubleshoot and resolve problems efficiently to ensure your application runs smoothly.",
  //   href: "https://www.fiverr.com/athiradi",
  // },
  // {
  //   num: 4,
  //   title: "Custom Portfolio Website Development",
  //   description:
  //     "Expert development of personalized portfolio websites to showcase your work and skills. We create visually appealing and fully functional websites tailored to your unique style and professional needs.",
  //   href: "https://www.fiverr.com/athiradi",
  // },
];

const Service = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            ease: "easeIn",
            delay: 2.4,
            ease: "easeIn",
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    target="_blank"
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowRight className="text-3xl text-primary rotate-45" />
                  </Link>
                </div>

                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p>{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
