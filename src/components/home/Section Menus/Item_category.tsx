import { img_History } from "@/utils/images";
import Image from "next/image";
import React from "react";

export const Item_category = () => {
  return (
    <div className="w-1/2 md:w-1/3 flex flex-col gap-1 items-center p-2">
      <Image
        src={img_History}
        alt=""
        className="w-full h-2/3 object-cover shadow-md rounded-md"
      />
      <div className="flex flex-col gap-1">
        <h3 className="italic text-orange-400 text-sm text-center">Bebanda</h3>
        <p className="text-xs italic text-center text-slate-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button className="py-1 px-2 italic shadow rounded-md w-full text-xs bg-gradient-to-tr from-orange-400 to-orange-400/70 text-white">
          Di Piu
        </button>
      </div>
    </div>
  );
};
