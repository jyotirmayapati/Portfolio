import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light", // Set your preferred initial color mode
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      500: "#6a11cb", // Light mode color
      700: "#2c3e50", // Dark mode color
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.800" : "white",
        color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.800",
      },
    }),
  },
});

export default theme;
