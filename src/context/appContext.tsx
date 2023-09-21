"use client";
import React, { useState, useContext } from "react";
import { createContext } from "react";

type AppState = {
  menuIsOpen: boolean;
  setMenuIsOpen(menu: boolean): void;
};

const AppContext = createContext<AppState | null>(null);

const useApp = (): AppState => {
  const context = useContext(AppContext);
  if (!context) throw new Error("Please use ThemeProvider in parent component");
  return context;
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const data = { menuIsOpen, setMenuIsOpen };
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export default useApp;
