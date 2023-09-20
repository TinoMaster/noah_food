"use client";
import React, { useState } from "react";
import { CgMenuHotdog } from "react-icons/cg";

/* //Todo: ver como puedo lograr esto */
export const Btn_MenuMovil = () => {
  const [openMenu, setopenMenu] = useState(false);
  const handlerOpenMenu = () => {
    setopenMenu((prev) => !prev);
  };
  return (
    <div onClick={handlerOpenMenu} className="text-4xl p-2 border rounded-full">
      {openMenu ? (
        <div className="w-full h-full bg-white absolute"></div>
      ) : null}
      <CgMenuHotdog />
    </div>
  );
};
