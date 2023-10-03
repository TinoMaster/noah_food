"use client";
import React from "react";
import { Item_category } from "./Item_category";
import { motion } from "framer-motion";
import { containerImagesPrefers } from "@/animations/framers";

export const Categories = () => {
  return (
    <motion.div
      variants={containerImagesPrefers}
      initial="hidden"
      whileInView="show"
      className="container lg:max-w-[900px] flex flex-wrap"
    >
      <h3 className="container w-full text-secondary text-sm italic text-center lg:text-2xl lg:py-4">
        Categories
      </h3>
      <Item_category />
      <Item_category />
      <Item_category />
      <Item_category />
      <Item_category />
      <Item_category />
    </motion.div>
  );
};
