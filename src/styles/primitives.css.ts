import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

// media-query
export const mq = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
  motionSafe: "(prefers-reduced-motion: no-preference)",
  retina: "(-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi)",
};

export const tokens = createGlobalTheme(":root", {
  font: {
    lineSeed:
      'LINESeedJP, "Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,serif',
  },
  palette: {
    black1: "#13131333",
    black2: "#13131366",
    black3: "#13131399",
    black4: "#131313BF",
    black5: "#131313E5",

    white1: "#F6F6F633",
    white2: "#F6F6F666",
    white3: "#F6F6F699",
    white4: "#F6F6F6BF",
    white5: "#F6F6F6D9",

    gray1: "#F6F6F6",
    gray2: "#C8C8C8",
    gray3: "#969696",
    gray4: "#737373",
    gray5: "#676767",
    gray6: "#474747",
    gray7: "#3B3B3B",
    gray8: "#2D2D2D",
    gray9: "#222222",
    gray10: "#131313",

    brand1: "#E7EBB4",
    brand2: "#EAF195",
    brand3: "#EAF65F",
    brand4: "#E9F746",
    brand5: "#E4F432",
  },
  space: {
    "1/2": "4px",
    1: "8px",
    2: "16px",
    3: "24px",
    4: "32px",
    5: "40px",
    6: "48px",
    7: "56px",
    8: "64px",
    9: "72px",
    10: "80px",
    11: "88px",
    12: "96px",
    13: "104px",
    14: "112px",
    15: "120px",
  },
  borderWidth: {
    thin: "0.8px",
    normal: "1px",
    bold: "1.6px",
  },
  zIndex: {
    "-1": "-1",
    "1": "1",
    "2": "2",
    "3": "3",
  },
  lineHght: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.85",
    loose: "4",
  },
  letterSp: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.08em",
    widest: "0.12em",
  },
  fontWght: {
    thin: "300",
    normal: "400",
    bold: "700",
    bolder: "800",
  },
});

export const {
  font,
  palette,
  space,
  borderWidth,
  zIndex,
  lineHght,
  letterSp,
  fontWght,
} = tokens;

export const themeVars = createThemeContract({
  colorSchema: {
    bg: {
      primary: null,
    },
    text: {
      body: null,
    },
    button: {
      normal: null,
      hover: null,
      brand: null,
    },
    design: {
      primary: null,
      secondary: null,
      teriary: null,
    },
  },
});
