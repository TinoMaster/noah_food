import { Banner_Image } from "@/components/Z-Banner_Image/Banner_Image";
import { img_Contact } from "@/utils/images";
import React from "react";

const tittle = "Probando esta talla";
const bigTittle = "Feels Like Home, Tastes Like a Paaradise";

export default function LayoutContacts({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Banner_Image
          image={img_Contact}
          tittle={tittle}
          bigTittle={bigTittle}
        />
      </header>
      {children}
    </>
  );
}
