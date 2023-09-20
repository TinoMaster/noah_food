import { Banner_Image } from "@/components/Banner_Image";
import { img_Services } from "@/utils/images";
import React from "react";

const tittle = "Probando esta talla";
const bigTittle = "Feels Like Home, Tastes Like a Paaradise";

export default function LayoutServices({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Banner_Image
          image={img_Services}
          tittle={tittle}
          bigTittle={bigTittle}
        />
      </header>
      {children}
    </>
  );
}
