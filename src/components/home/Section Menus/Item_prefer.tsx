"use client";
import { picagna } from "@/utils/images";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const Item_Prefer = () => {
  return (
    <motion.div className="w-[140px] lg:w-[200px] shadow-l rounded-md py-2 flex flex-col items-center relative">
      <div className="w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] overflow-hidden rounded-full border-2 border-secondary">
        <Image
          src={picagna}
          alt="picagna"
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
      </div>
      {/* Description */}
      <div className="w-full flex flex-col px-2">
        <div className="flex justify-between items-center">
          <h3 className="w-full text-secondary italic font-bold text-sm lg:text-lg">
            Picagna
          </h3>
          <span className="text-secondary text-sm lg:text-base">★★★★★</span>
        </div>
        <p className="text-xs italic py-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="w-full flex justify-between items-center">
          <span className="text-secondary font-bold text-sm lg:text-lg">19.99 $</span>
          <button className="bg-gradient-to-tr from-secondary to-secondary/70 px-2 hover:to-secondary rounded-md shadow-md shadow-black/20 mr-2 text-xs lg:text-sm text-white">
            di piu
          </button>
        </div>
      </div>
    </motion.div>
  );
};
