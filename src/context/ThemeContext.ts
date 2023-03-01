import React from "react";

export interface ITheme {
  background: string;
  color: string;
  blueColor: string;
  textColor: string;
}
interface IThemes {
  dark: ITheme;
  light: ITheme;
}

export const themes: IThemes = {
  dark: {
    background:
      "linear-gradient(180deg, #1d3557 0%, #7a0058 74.48%, #942b3b 100%)",
    color: "#fff",
    blueColor: "#fff",
    textColor: "#000",
  },
  light: {
    background: "#fff",
    color: "#000",
    blueColor: "#041124",
    textColor: "#fff",
  },
};

export const ThemeContext = React.createContext<ITheme>(themes.dark);
