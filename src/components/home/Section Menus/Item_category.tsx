"use client";
import { itemImagePrefer } from "@/animations/framers";
import { img_History } from "@/utils/images";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const Item_category = () => {
  return (
    <motion.div
      variants={itemImagePrefer}
      className="w-1/2 md:w-1/3 flex flex-col gap-1 items-center p-2"
    >
      <Image
        src={img_History}
        alt=""
        className="w-full h-2/3 object-cover shadow-md rounded-md hover:scale-105 hover:cursor-pointer transition-transform"
      />
      <div className="flex flex-col gap-1">
        <h3 className="italic text-secondary font-bold text-sm lg:text-lg text-center">
          Bebanda
        </h3>
        <p className="text-xs lg:text-base italic text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button className="py-1 px-2 italic shadow rounded-md w-full text-xs lg:text-base bg-gradient-to-tr from-secondary to-secondary/70 text-white hover:bg-secondary">
          Di Piu
        </button>
      </div>
    </motion.div>
  );
};
