"use client";
import React from "react";
import { motion } from "framer-motion";
import { bannerTittle, bannerBigTittle } from "@/animations/framers";

export const Text_Banner = ({
  tittle,
  bigTittle,
}: {
  tittle: string;
  bigTittle: string;
}) => {
  return (
    <div className="absolute flex justify-center items-center w-full h-full bg-gradient-to-t from-black/40 to-black/50">
      <div className="flex flex-col text-white w-11/12 lg:w-1/3 h-5/6 justify-center items-center">
        <motion.p
          variants={bannerTittle}
          initial="initial"
          animate="animate"
          className="text-slate-300 text-xs md:text-xl italic"
        >
          {tittle}
        </motion.p>
        <motion.p
          variants={bannerBigTittle}
          initial="initial"
          animate="animate"
          className="text-3xl md:text-5xl italic text-center"
        >
          {bigTittle}
        </motion.p>
        <div className=" py-4">
          <motion.button
            variants={bannerTittle}
            initial="initial"
            animate="animate"
            className="border border-secondary bg-primary/70 hover:bg-secondary/50 hover:shadow-black/60 transition-colors italic shadow-md shadow-black/40 text-lg p-2 rounded"
          >
            Ver Menu
          </motion.button>
        </div>
      </div>
    </div>
  );
};
