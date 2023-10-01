import React from "react";
import { ImagesItems } from "./ImagesItems";

export const Preferences = () => {
  return (
    <div className="m-auto max-w-[800px] px-2 py-10">
      <h3 className="container w-full text-secondary text-sm italic saturate-200 text-center lg:text-xl">
        Prefer Menus
      </h3>
      <ImagesItems />
    </div> 
  );
};
