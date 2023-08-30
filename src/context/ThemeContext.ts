import React from "react";

export type ThemeType = {
  background: string;
  color: string;
  primaryColor: string;
};
type Themes = {
  dark: ThemeType;
  light: ThemeType;
};

export const primaryDarkColor: string = "#161C1E";
export const primaryColor: string = "#2a363b";
export const secondaryColor: string = "#e84a5f";

export const themes: Themes = {
  dark: {
    background: primaryColor,
    color: "#fff",
    primaryColor: "#fff",
  },
  light: {
    background: "#fff",
    color: "#000",
    primaryColor: primaryDarkColor,
  },
};

export const ThemeContext = React.createContext<ThemeType>(themes.dark);
