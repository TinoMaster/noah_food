"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Item_Prefer } from "./Item_prefer";

export const ImagesItems = () => {
  const [width, setWhidth] = useState(0);
  const carousel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (carousel.current) {
      setWhidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <motion.div
      ref={carousel}
      whileTap={{ cursor: "grabbing" }}
      className="overflow-hidden relative lg:p-5 rounded-md"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex w-max py-3 lg:py-10 gap-2 cursor-grab"
      >
        {/* Piatto */}
        <Item_Prefer />
        <Item_Prefer />
        <Item_Prefer />
        <Item_Prefer />
        <Item_Prefer />
        <Item_Prefer />
        <Item_Prefer />
        <Item_Prefer />
      </motion.div>
    </motion.div>
  );
};
