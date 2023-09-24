"use client";
import { motion } from "framer-motion";
import { openMenuMovil } from "@/animations/framers";
import { links } from "@/utils/links_menu";
import { NavbarLink } from "./NabvarLink";
import { AiOutlineClose } from "react-icons/ai";
import useApp from "@/context/appContext";

export const Nabvar_Movil = () => {
  const { menuIsOpen, setMenuIsOpen } = useApp();

  return (
    <motion.div
      variants={openMenuMovil}
      initial="initial"
      animate="animate"
      className={`fixed transition-transform ${
        menuIsOpen
          ? "flex flex-col translate-x-0 w-screen bg-gradient-to-tr from-orange-50 via-white to-orange-50 h-screen z-20"
          : "-translate-x-full"
      } `}
    >
      <button
        onClick={() => setMenuIsOpen(false)}
        className="p-10 flex justify-end text-3xl text-slate-600"
      >
        <AiOutlineClose />
      </button>
      <div className="flex flex-col grow justify-center items-center h-full gap-5">
        {links?.map((link) => (
          <NavbarLink key={link.name} link={link} />
        ))}
      </div>
    </motion.div>
  );
};
