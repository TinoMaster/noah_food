import React from "react";
import { BrokeBackground } from "./BrokeBackground";
import { Preferences } from "./Preferences";
import { Categories } from "./Categories";

export const SectionMenus = () => {
  return (
    <section className="w-full z-10 bg-gradient-to-b from-primary via-primary/20 to-primary text-slate-100 mt-10 relative">
      <BrokeBackground />
      <h2 className="container text-2xl text-secondary italic text-center lg:text-4xl lg:py-4">
        Menu
      </h2>
      <Categories />
      <Preferences />
    </section>
  );
};
