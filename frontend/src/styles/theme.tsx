export type ThemeType = typeof Theme;

export const light = {
  colors: {
    primary: "#1a62ac",
    "primary-100": "#7bacdc",
    "primary-200": "#e2ecf7",
    black: "#17181f",
    "green-100": "#c4f3c4",
    "green-200": "#E5EFEA",
    "green-300": "#7FBD8B",
    "yellow-100": " #F5C776 ",
    "yellow-200": " #DCBD7B",
    "purple-100": "#d3d4fa ",
    "purple-200": "#548894 ",
    "purple-300": " #bbb5f5 ",
    amber: "#F8AC45",
    pink: " #FFBBD7",
  },
  breakpoints: {
    mobileS: "250px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
  },
};

export const dark = {
  colors: {
    primary: "#f0f0e8",
    background: "#8f8f8f ",
  },
};

const Theme = light;
export default Theme;
