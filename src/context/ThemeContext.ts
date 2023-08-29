import React from "react";

export interface ITheme {
  background: string;
  color: string;
}
interface IThemes {
  dark: ITheme;
  light: ITheme;
}

export const primaryDarkColor: string = "#161C1E";
export const primaryColor: string = "#2a363b";
export const secondaryColor: string = "#e84a5f";

export const themes: IThemes = {
  dark: {
    background: primaryColor,
    color: "#fff",
  },
  light: {
    background: "#fff",
    color: "#000",
  },
};

export const ThemeContext = React.createContext<ITheme>(themes.dark);
