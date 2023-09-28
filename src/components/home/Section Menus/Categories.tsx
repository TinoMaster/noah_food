import React from "react";
import { Item_category } from "./Item_category";

export const Categories = () => {
  return (
    <div className="container lg:max-w-[700px] flex flex-wrap">
      <Item_category />
      <Item_category />
      <Item_category />
      <Item_category />
      <Item_category />
      <Item_category />
    </div>
  );
};
