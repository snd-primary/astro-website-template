import { fallbackVar, createVar, globalStyle } from "@vanilla-extract/css";
import { font, fontWght, letterSp, lineHght } from "./primitives.css";

globalStyle("html", {
  fontFamily: font.lineSeed,
});

// Dynamic FontSize
const fluidTypeMin = createVar();
const fluidTypeMax = createVar();
const fluidTypeTarget = createVar();

globalStyle("h1", {
  vars: {
    [fluidTypeMin]: "2.5rem",
    [fluidTypeMax]: "5rem",
    [fluidTypeTarget]: "5vw",
  },
  maxWidth: "15ch",
  lineHeight: lineHght.normal,
  letterSpacing: letterSp.normal,
  fontWeight: fontWght.bolder,
});

globalStyle("h2", {
  vars: {
    [fluidTypeMin]: "1.8rem",
    [fluidTypeMax]: "3rem",
  },

  lineHeight: lineHght.normal,
  letterSpacing: letterSp.normal,
  fontWeight: fontWght.bolder,
});

globalStyle("h3", {
  vars: {
    [fluidTypeMin]: "1.5rem",
    [fluidTypeMax]: "2rem",
  },

  lineHeight: lineHght.normal,
  letterSpacing: letterSp.normal,
  fontWeight: fontWght.bold,
});

globalStyle("h2, h3", {
  maxWidth: "30ch",
});

globalStyle("p", {
  maxWidth: "60ch",
  fontWeight: fontWght.normal,
  lineHeight: lineHght.normal,
  letterSpacing: letterSp.normal,
});

globalStyle("h1, h2, h3, p", {
  fontSize: `clamp(
    ${fallbackVar(fluidTypeMin, "1rem")},
    calc(1rem + ${fallbackVar(fluidTypeTarget, "3vw")}),
    ${fallbackVar(fluidTypeMax, "1.3rem")}
   )`,
});
