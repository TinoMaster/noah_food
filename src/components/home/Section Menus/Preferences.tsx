import React from "react";
import { ImagesItems } from "./ImagesItems";

export const Preferences = () => {
  return (
    <div className="m-auto px-2 py-10">
      <h3 className="w-full text-secondary text-sm italic text-center lg:text-2xl">
        Prefer Menus
      </h3>
      <ImagesItems />
    </div>
  );
};
