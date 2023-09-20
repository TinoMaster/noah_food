"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { TypeLinkMenu } from "@/types/types";

export const NavbarLink = ({ link }: { link: TypeLinkMenu }) => {
  const { name, href, hash } = link;
  const pathname = usePathname();
  const currentHash = pathname.slice(1);

  return (
    <Link
      href={`${href}`}
      className={`${currentHash === hash ? "" : ""} relative`}
    >
      {currentHash === hash ? (
        <motion.div
          layoutId="active"
          className="absolute w-full h-full border-b-2"
        ></motion.div>
      ) : null}
      {name}
    </Link>
  );
};
