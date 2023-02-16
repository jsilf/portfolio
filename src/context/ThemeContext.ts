import React from "react";

export interface ITheme {
  background: string;
  color: string;
}
interface IThemes {
  dark: ITheme;
  light: ITheme;
}

export const themes: IThemes = {
  dark: {
    background: "",
    color: "#fff",
  },
  light: {
    background: "#fff",
    color: "#000",
  },
};

export const ThemeContext = React.createContext<ITheme>(themes.dark);
