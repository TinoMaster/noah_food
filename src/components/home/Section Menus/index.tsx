import React from "react";
import { BrokeBackground } from "./BrokeBackground";
import { Preferences } from "./Preferences";
import { Categories } from "./Categories";

export const SectionMenus = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white via-orange-50 to-white text-slate-800 relative my-20">
      <BrokeBackground />
      <h3 className="container text-2xl text-secondary italic saturate-200 text-center lg:text-4xl lg:py-4">
        Categories
      </h3>
      <Categories />
      <Preferences />
    </section>
  );
};
