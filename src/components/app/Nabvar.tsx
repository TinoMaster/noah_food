import { TypeLinkMenu } from "@/types/types";
import { NavbarLink } from "./NabvarLink";

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
        {/* Links */}
        <div className="flex gap-3 text-lg">
          {links.map((link) => (
            <NavbarLink key={link.name} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
};
