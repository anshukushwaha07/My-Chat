// src/theme.js
import { extendTheme } from "@chakra-ui/react";

// 1. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

// 2. Extend the theme
const theme = extendTheme({ config });

export default theme;
