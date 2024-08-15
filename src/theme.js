import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    text: {
      white: "#ffffff",
      alt: "#000000",
      divider: "#33587c",
    },
    background: {
      main: "#f90201",
      alt: "#FE302F",
      nav: "#a50101",
      white: "#ffffff",
      button: "#f90201",
      buttonHover: "#a50101",
    },

    // hero: {
    //   main: "##FE302F",
    //   alt: "##F90201",
    // },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Open Sans, sans-serif",
  },
});

export default theme;
