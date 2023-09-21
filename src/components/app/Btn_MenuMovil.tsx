"use client";
import useApp from "@/context/appContext";
import { CgMenuHotdog } from "react-icons/cg";

/* //Todo: ver como puedo lograr esto */
export const Btn_MenuMovil = () => {
  const { setMenuIsOpen } = useApp();

  return (
    <button
      onClick={() => setMenuIsOpen(true)}
      className="text-4xl block p-1 border rounded-full"
    >
      <CgMenuHotdog />
    </button>
  );
};
