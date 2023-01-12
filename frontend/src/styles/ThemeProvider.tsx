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
      "background-dark": string;
      shadows: string;
      black: string;
      autumn: string;
      "green-100": string;
      "green-200": string;
      "green-300": string;
      "yellow-100": string;
      "yellow-200": string;
      "purple-100": string;
      "purple-200": string;
      "purple-300": string;
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
    primary: "#1a62ac",
    "primary-100": "#7bacdc",
    "primary-200": "#e2ecf7",
    secondary: "#E26162",
    background: "#f6f6f6",
    "background-dark": "#BEBFBF ",
    shadows: "#e2e2e3",
    black: "#333944",
    autumn: "#cc686e",
    "green-100": "#c4f3c4",
    "green-200": "#6E9D57",
    "green-300": "#7FBD8B",
    "yellow-100": " #f3edb6",
    "yellow-200": " #DCBD7B",
    "purple-100": "#d3d4fa ",
    "purple-200": "#548894 ",
    "purple-300": " #bbb5f5 ",
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
