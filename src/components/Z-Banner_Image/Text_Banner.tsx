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
      <div className="flex flex-col text-white w-11/12 md:w-1/3 h-5/6 justify-center">
        <motion.p
          variants={bannerTittle}
          initial="initial"
          animate="animate"
          className="text-slate-300 text-xs md:text-xl"
        >
          {tittle}
        </motion.p>
        <motion.p
          variants={bannerBigTittle}
          initial="initial"
          animate="animate"
          className="text-3xl md:text-6xl"
        >
          {bigTittle}
        </motion.p>
        <div className=" py-4">
          <motion.button
            variants={bannerTittle}
            initial="initial"
            animate="animate"
            className="bg-gradient-to-tr from-secondary font-bold font-body to-primary shadow-md shadow-black/20 text-lg p-2 rounded"
          >
            Ver Menu
          </motion.button>
        </div>
      </div>
    </div>
  );
};
