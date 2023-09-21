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
      className={`${
        menuIsOpen
          ? "fixed flex flex-col w-screen bg-slate-50 h-screen z-20"
          : "hidden"
      } `}
    >
      <button
        onClick={() => setMenuIsOpen(false)}
        className="p-10 flex justify-end text-3xl text-slate-600"
      >
        <AiOutlineClose />
      </button>
      <div className="flex flex-col justify-center items-center h-full gap-5">
        {links?.map((link) => (
          <NavbarLink key={link.name} link={link} />
        ))}
      </div>
    </motion.div>
  );
};
