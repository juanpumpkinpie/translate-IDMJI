import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      "primary-100": string;
      "primary-200": string;
      secondary: string;
      background: string;
      gold: string;
      "background-dark": string;
      shadows: string;
      black: string;
      autumn: string;
      "green-100": string;
      "yellow-100": string;
      "purple-100": string;
      amber: string;
      pink: string;
      white: string;
    };
    breakpoints: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tablet: string;
      laptop: string;
      laptopL: string;
      desktop: string;
    };
  }
}

export const theme: DefaultTheme = {
  colors: {
    primary: "#110484",
    "primary-100": "#0095eb",
    "primary-200": "#007cc3",
    secondary: "#00569f",
    background: "#f6f6f6",
    gold: "#987f44",
    "background-dark": "#57575b",
    shadows: "#e2e2e3",
    black: "#333944",
    autumn: "#cc686e",
    "green-100": "#7bdcb5",
    "yellow-100": "#fcb900",
    "purple-100": "#9b51e0",
    amber: "#F8AC45",
    pink: " #FFBBD7",
    white: "#FFFFFF",
  },
  breakpoints: {
    mobileS: "250px",
    mobileM: "350px",
    mobileL: "425px",
    tablet: "700px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
  },
};
