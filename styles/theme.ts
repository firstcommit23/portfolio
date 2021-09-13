import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    black: "#17181c",
    navy: "#272e41",
    white: "#ffffff",
    pink: "#FB9F9F",
    gradient: "linear-gradient(128.93deg, #00ADB5 22.41%, #393E46 93.45%)",
  }
};

const customMediaQuery = (maxWidth: number) : string => 
  `@media (max-width: ${maxWidth}px)`;

  export const media = {
    custom: customMediaQuery,
    laptop: customMediaQuery(1440),
    tablet: customMediaQuery(800),
    mobile: customMediaQuery(420),
  };