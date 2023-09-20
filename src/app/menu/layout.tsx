import { Banner_Image } from "@/components/Banner_Image";
import { img_Menu } from "@/utils/images";
import React from "react";

export default function LayoutMenu({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Banner_Image image={img_Menu} />
      </header>
      {children}
    </>
  );
}
