"use client";
import { picagna } from "@/utils/images";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const Item = () => {
  return (
    <motion.div className="w-[160px] lg:w-[200px] shadow-lg rounded-md py-2 flex flex-col items-center relative">
      <div className="w-[140px] h-[140px] lg:w-[180px] lg:h-[180px] overflow-hidden rounded-full border-2 border-secondary">
        <Image
          src={picagna}
          alt="picagna"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Description */}
      <div className="w-full flex flex-col px-2">
        <div className="flex justify-between items-center">
          <h3 className="w-full text-orange-400 italic font-bold">Picagna</h3>
          <span className="text-orange-400 text-xl">★★★★★</span>
        </div>
        <p className="text-sm italic text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="w-full flex justify-between">
          <span className="text-orange-400 font-bold">19.99 $</span>
          <button className="bg-gradient-to-tr from-orange-400 to-orange-300 px-2 hover:to-orange-400 rounded-md shadow-md shadow-black/20 mr-2 text-sm text-white">
            di piu
          </button>
        </div>
      </div>
    </motion.div>
  );
};
