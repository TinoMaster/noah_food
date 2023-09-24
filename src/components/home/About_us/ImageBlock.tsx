"use client";
import { img_parrilla, img_Contact } from "@/utils/images";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { image1historyHome, image2historyHome } from "@/animations/framers";

export const ImageBlock = () => {
  return (
    <div className="lg:w-1/2 flex gap-3">
      {/* block1 */}
      <motion.div
        variants={image1historyHome}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 1.8 }}
        className="w-1/2 flex flex-col gap-2 justify-center items-end"
      >
        <div className="w-[120px] h-[150px] lg:w-[200px] lg:h-[250px] p-1 bg-gradient-to-tr from-secondary to-black shadow-lg shadow-black/40 rounded-md">
          <Image
            src={img_parrilla}
            alt="1"
            className="w-full h-full saturate-0 object-cover"
          />
        </div>
      </motion.div>
      {/* block2 */}
      <motion.div
        variants={image2historyHome}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 1.8 }}
        className="w-1/2 flex flex-col gap-2 justify-center items-start "
      >
        <div className="w-[120px] h-[150px] lg:w-[200px] lg:h-[250px] p-1 bg-gradient-to-tr from-black to-secondary shadow-lg shadow-black/40 rounded-md">
          <Image
            src={img_Contact}
            alt="1"
            className="w-full h-full saturate-0 object-cover rounded-md"
          />
        </div>
      </motion.div>
    </div>
  );
};
