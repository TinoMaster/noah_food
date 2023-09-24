"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { TypeLinkMenu } from "@/types/types";
import useApp from "@/context/appContext";

export const NavbarLink = ({ link }: { link: TypeLinkMenu }) => {
  const { name, href, hash } = link;
  const pathname = usePathname();
  const currentHash = pathname.slice(1);
  const { setMenuIsOpen } = useApp();

  return (
    <Link
      href={`${href}`}
      onClick={() => setTimeout(() => setMenuIsOpen(false), 100)}
      className={`${
        currentHash === hash ? "" : ""
      } relative text-3xl lg:text-xl inline-block`}
    >
      {currentHash === hash ? (
        <motion.div
          layoutId="active"
          className="absolute w-full h-full border-b-2"
        ></motion.div>
      ) : null}
      <span className="text-slate-800 lg:text-white">{name}</span>
    </Link>
  );
};
