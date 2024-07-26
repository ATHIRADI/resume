"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import { usePathname } from "next/navigation";

export const PageTransition = ({ children }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <AnimatePresence>
      <div className="" key={pathname}>
        <motion.div
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { duration: 0.4, delay: 1, ease: "easeInOut" },
          }}
          // exit={{ opacity: 1 }}
        />
        {children}
      </div>
    </AnimatePresence>
  );
};
