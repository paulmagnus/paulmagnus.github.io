"use client";

import { HeadingLevelContext } from "@/components/heading";
import { FC, PropsWithChildren } from "react";
import { Header } from "./header";

export interface ILayoutProps {}

export const Layout: FC<PropsWithChildren<ILayoutProps>> = ({ children }) => {
  return (
    <HeadingLevelContext.Provider value={1}>
      <Header />
      {children}
    </HeadingLevelContext.Provider>
  );
};
