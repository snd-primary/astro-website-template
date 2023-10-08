import { globalFontFace } from "@vanilla-extract/css";

const LINESeedJP = "LINESeedJP";

globalFontFace(LINESeedJP, {
  src: `url(/fonts/LINESeedJP_OTF_Eb.woff2) format('woff2')`,
  fontDisplay: "swap",
  fontStyle: "normal",
  fontWeight: "900",
});
globalFontFace(LINESeedJP, {
  src: `url(/fonts/LINESeedJP_OTF_Bd.woff2) format('woff2')`,
  fontDisplay: "swap",
  fontStyle: "normal",
  fontWeight: "700",
});
globalFontFace(LINESeedJP, {
  src: `url(/fonts/LINESeedJP_OTF_Rg.woff2) format('woff2')`,
  fontDisplay: "swap",
  fontStyle: "normal",
  fontWeight: "400",
});
globalFontFace(LINESeedJP, {
  src: `url(/fonts/LINESeedJP_OTF_Th.woff2) format('woff2')`,
  fontDisplay: "swap",
  fontStyle: "normal",
  fontWeight: "300",
});
