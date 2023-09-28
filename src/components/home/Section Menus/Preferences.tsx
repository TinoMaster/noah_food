import React from "react";
import { ImagesItems } from "./ImagesItems";

export const Preferences = () => {
  return (
    <div className="container py-5">
      <h3 className="text-2xl text-secondary italic saturate-200 text-center lg:text-4xl lg:text-start">
        Prefer Menus
      </h3>
      <ImagesItems />
    </div>
  );
};
