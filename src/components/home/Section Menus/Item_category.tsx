import { img_History } from "@/utils/images";
import Image from "next/image";
import React from "react";

export const Item_category = () => {
  return (
    <div className="w-1/2 md:w-1/3 h-48 flex flex-col items-center p-2">
      <Image
        src={img_History}
        alt=""
        className="w-full h-2/3 object-cover shadow-md rounded-md"
      />
    </div>
  );
};
