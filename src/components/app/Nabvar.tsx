import { NavbarLink } from "./NabvarLink";
import { Btn_MenuMovil } from "./Btn_MenuMovil";
import { links } from "@/utils/links_menu";
import { GiHotMeal } from "react-icons/gi";

export const Nabvar = () => {
  return (
    <div className="flex justify-center items-center absolute text-white z-10 w-full h-32">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col items-center -translate-y-1 lg:ml-28">
          <GiHotMeal className="text-xl"/>
          <h1 className="text-3xl">Noah</h1>
        </div>
        {/* btn open menu */}
        <div className="lg:hidden">
          <Btn_MenuMovil />
        </div>
        {/* Links */}
        <div className="gap-3 text-lg hidden lg:flex">
          {links?.map((link) => (
            <NavbarLink key={link.name} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
};
