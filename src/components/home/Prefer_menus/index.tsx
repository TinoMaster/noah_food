import React from "react";
import { BrokeBackground } from "./BrokeBackground";
import { ImageSection } from "./ImageSection";

export const PreferMenus = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white via-orange-50 to-white text-slate-800 relative my-20">
      <BrokeBackground />
      <ImageSection />
    </div>
  );
};
