"use client"

import React, { FC, PropsWithChildren, useContext } from "react";

export interface ITheme {
  color?: string;
}

const ThemeContext = React.createContext<ITheme>({});

export const ThemeProvider: FC<PropsWithChildren<ITheme>> = ({
  children,
  ...theme
}) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export function useTheme(): ITheme {
  return useContext(ThemeContext);
}
