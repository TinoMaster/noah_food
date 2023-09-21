import React from "react";
import { RiMapPinTimeLine } from "react-icons/ri";
import { PiStarThin } from "react-icons/pi";

export const Wy_US = () => {
  return (
    <div className="container flex flex-col justify-center items-center">
      <h2 className="text-3xl md:text-4xl text-black italic">
        Scopri La Nostra Essenza
      </h2>
      <p className="text-secondary text-3xl">★★★★★</p>
      <div className="flex w-full justify-around gap-2 py-3">
        {/* Experience */}
        <div className="flex flex-col lg:flex-row w-1/2 items-center border-r-2 gap-3 lg:gap-0">
          <div className="text-5xl shadow-md flex justify-center items-center rounded-full">
            <RiMapPinTimeLine className="w-20 h-20 lg:w-28 lg:h-28 p-5 rounded-full bg-white" />
          </div>
          <div className="text-center">
            <h3 className="italic font-bold text-secondary">Experience</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore dignissimos praesentium atque, fugit sint voluptatem!
              Impedit{" "}
            </p>
          </div>
        </div>
        {/* Qualita */}
        <div className="flex flex-col-reverse lg:flex-row w-1/2 items-center border-l-2 gap-3 lg:gap-0">
          <div className="text-center">
            <h3 className="italic font-bold text-secondary">Qualita</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore dignissimos praesentium atque, fugit sint voluptatem!
              Impedit{" "}
            </p>
          </div>
          <div className="text-5xl shadow-md flex justify-center items-center rounded-full">
            <PiStarThin className="w-20 h-20 lg:w-28 lg:h-28 p-5 rounded-full bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
