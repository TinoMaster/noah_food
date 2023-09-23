import Link from "next/link";
import React from "react";

export const DescBlock = () => {
  return (
    <div className="flex flex-col w-full lg:w-1/2 italic gap-2 items-center lg:items-start justify-center">
      <h3 className="text-secondary text-2xl">La Nostra Storia</h3>
      <p className="text-slate-200 text-xl text-center lg:text-start">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
        aliquam odio consequuntur temporibus suscipit, ratione beatae,
        cupiditate, placeat explicabo est blanditiis maiores. Illo modi fuga at
        odio vero laborum alias? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Inventore aliquam odio consequuntur temporibus
        suscipit, ratione beatae, cupiditate, placeat explicabo est blanditiis
        maiores. Illo modi fuga at odio vero laborum alias?
      </p>
      <Link
        href={"/history"}
        className="border border-secondary bg-primary/70 hover:bg-secondary/50 hover:shadow-black/60 transition-colors italic shadow-md shadow-black/40 text-lg p-2 rounded-md"
      >
        Conoci di Piu
      </Link>
    </div>
  );
};
