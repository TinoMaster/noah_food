import React from "react";
import { ImageBlock } from "./ImageBlock";
import { DescBlock } from "./DescBlock";

export const AboutUs = () => {
  return (
    <div className="container flex flex-col lg:flex-row gap-10 lg:gap-0">
      <ImageBlock />
      <DescBlock />
    </div>
  );
};
