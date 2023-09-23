import React from "react";
import { BrokeBackground } from "./BrokeBackground";

export const PreferMenus = () => {
  return (
    <div className="w-full h-52 bg-white text-slate-800 relative my-10">
      <BrokeBackground />
      <div className="container">
        <h3 className="text-2xl text-secondary italic saturate-200">
          Prefer Menus
        </h3>
      </div>
    </div>
  );
};
