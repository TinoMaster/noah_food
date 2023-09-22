import { img_parrilla } from "@/utils/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const AboutUs = () => {
  return (
    <div className="container flex p-4">
      {/* Images */}
      <div className="w-1/2 flex gap-3 min-h-[400px] p-10">
        {/* block1 */}
        <div className="w-1/2 flex flex-col gap-2 justify-center items-center translate-y-14">
          <div className="w-5/6 h-full p-1 bg-gradient-to-tr from-secondary to-black shadow-lg shadow-black/50 rounded-md">
            <Image
              src={img_parrilla}
              alt="1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* block2 */}
        <div className="w-1/2 flex flex-col gap-2 justify-center items-center">
          <div className="w-5/6 h-full p-1 bg-gradient-to-tr from-black to-secondary shadow-lg shadow-black/50 rounded-md">
            <Image
              src={img_parrilla}
              alt="1"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
      {/* About us */}
      <div className="flex flex-col w-1/2 p-5 italic gap-2 items-start justify-center">
        <h3 className="text-secondary text-3xl">La Nostra Storia</h3>
        <p className="text-slate-200 w-5/6 text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          aliquam odio consequuntur temporibus suscipit, ratione beatae,
          cupiditate, placeat explicabo est blanditiis maiores. Illo modi fuga
          at odio vero laborum alias? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Inventore aliquam odio consequuntur temporibus
          suscipit, ratione beatae, cupiditate, placeat explicabo est blanditiis
          maiores. Illo modi fuga at odio vero laborum alias?
        </p>
        <Link
          href={"/history"}
          className="border border-secondary bg-primary/70 hover:bg-secondary/50 hover:shadow-black/60 transition-colors italic shadow-md shadow-black/40 text-lg p-2 rounded"
        >
          Conoci Piu
        </Link>
      </div>
    </div>
  );
};
