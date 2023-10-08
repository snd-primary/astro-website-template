import { createTheme } from "@vanilla-extract/css";
import { tokens, themeVars } from "./primitives.css";

const hex = tokens.palette;

//color themes
export const light = createTheme(themeVars, {
  colorSchema: {
    bg: {
      primary: hex.gray1,
    },
    text: {
      body: hex.gray9,
    },
    button: {
      normal: hex.gray1,
      hover: hex.gray5,
      brand: hex.brand2,
    },
    design: {
      primary: hex.brand3,
      secondary: hex.brand2,
      teriary: hex.brand1,
    },
  },
});

export const midDark = createTheme(themeVars, {
  colorSchema: {
    bg: {
      primary: hex.gray3,
    },
    text: {
      body: hex.gray9,
    },
    button: {
      normal: hex.gray1,
      hover: hex.gray5,
      brand: hex.brand2,
    },
    design: {
      primary: hex.brand3,
      secondary: hex.brand2,
      teriary: hex.brand1,
    },
  },
});

export const dark = createTheme(themeVars, {
  colorSchema: {
    bg: {
      primary: hex.gray10,
    },
    text: {
      body: hex.gray3,
    },
    button: {
      normal: hex.gray1,
      hover: hex.gray5,
      brand: hex.brand2,
    },
    design: {
      primary: hex.brand3,
      secondary: hex.brand2,
      teriary: hex.brand1,
    },
  },
});
