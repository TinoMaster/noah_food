import { Banner_Image } from "@/components/Z-Banner_Image/Banner_Image";
import { img_Menu } from "@/utils/images";
import React from "react";
import { PropsSeachParam } from "@/types/types";

const tittle = "Probando esta talla";
const bigTittle = "Feels Like Home, Tastes Like a Paaradise";

export default function LayoutMenu({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Banner_Image image={img_Menu} tittle={tittle} bigTittle={bigTittle} />
      </header>
      {children}
    </>
  );
}
