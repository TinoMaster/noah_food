import React from "react";
import { Item_category } from "./Item_category";

export const Categories = () => {
  return (
    <div className="container lg:max-w-[700px] flex flex-wrap">
      <h3 className="container w-full text-secondary text-sm italic saturate-200 text-center lg:text-xl lg:py-4">
        Categories
      </h3>
      <Item_category />
      <Item_category />
      <Item_category />
      <Item_category />
      <Item_category />
      <Item_category />
    </div>
  );
};
