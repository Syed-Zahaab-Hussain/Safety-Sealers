import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    text: {
      white: "#ffffff",
      alt: "#000000",
      divider: "#33587c",
    },
    background: {
      main: "#002e5b",
      white: "#ffffff",
      alt: "#33587c",
      button: "#0088cc",
      buttonHover: "#006599",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Open Sans, sans-serif",
  },
});

export default theme;
