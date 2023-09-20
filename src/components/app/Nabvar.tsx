import { TypeLinkMenu } from "@/types/types";
import { NavbarLink } from "./NabvarLink";
import { Btn_MenuMovil } from "./Btn_MenuMovil";

const links: Array<TypeLinkMenu> = [
  {
    name: "Casa",
    href: "/",
    hash: "",
  },
  {
    name: "Menu",
    href: "/menu",
    hash: "menu",
  },
  {
    name: "Servizi",
    href: "/services",
    hash: "services",
  },
  {
    name: "Storia",
    href: "/history",
    hash: "history",
  },
  {
    name: "Contatti",
    href: "/contacts",
    hash: "contacts",
  },
];

export const Nabvar = () => {
  return (
    <div className="flex justify-center items-center absolute text-white z-10 w-full h-32">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl">Noah</div>
        {/* btn open menu */}
        <div className="lg:hidden">
          <Btn_MenuMovil />
        </div>
        {/* Links */}
        <div className="gap-3 text-lg hidden lg:flex">
          {links.map((link) => (
            <NavbarLink key={link.name} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
};
