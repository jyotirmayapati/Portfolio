import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "'Playfair Display', Georgia, serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "#0a0a0a" : "#f8f7f4",
        color: props.colorMode === "dark" ? "#e8e8e8" : "#0c0c0c",
        transition: "background 0.3s ease, color 0.3s ease",
      },
    }),
  },
});

export default theme;
