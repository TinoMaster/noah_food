import React from "react";
import { ImagesItems } from "./ImagesItems";

export const ImageSection = () => {
  return (
    <div className="container py-5">
      <h3 className="text-2xl text-secondary italic saturate-200 text-center">
        Prefer Menus
      </h3>
      <ImagesItems />
    </div>
  );
};
