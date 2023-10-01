"use client";
import { picagna } from "@/utils/images";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const Item_Prefer = () => {
  return (
    <motion.div className="w-[140px] lg:w-[200px] shadow-l rounded-md py-2 flex flex-col items-center relative">
      <div className="w-[120px] h-[120px] lg:w-[160px] lg:h-[160px] overflow-hidden rounded-full border-2 border-secondary">
        <Image
          src={picagna}
          alt="picagna"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Description */}
      <div className="w-full flex flex-col px-2">
        <div className="flex justify-between items-center">
          <h3 className="w-full text-orange-400 italic font-bold text-sm">Picagna</h3>
          <span className="text-orange-400 text-sm">★★★★★</span>
        </div>
        <p className="text-xs italic text-slate-600 py-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="w-full flex justify-between items-center">
          <span className="text-orange-400 font-bold text-sm">19.99 $</span>
          <button className="bg-gradient-to-tr from-orange-400 to-orange-300 px-2 hover:to-orange-400 rounded-md shadow-md shadow-black/20 mr-2 text-xs text-white">
            di piu
          </button>
        </div>
      </div>
    </motion.div>
  );
};
