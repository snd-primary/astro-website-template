import {
  createMapValueFn,
  createNormalizeValueFn,
  createSprinkles,
  defineProperties,
  type ConditionalValue,
} from "@vanilla-extract/sprinkles";
import { mq, tokens } from "./primitives.css";

const responsiveProperties = defineProperties({
  conditions: {
    initial: {},
    sm: { "@media": mq.sm },
    md: { "@media": mq.md },
    lg: { "@media": mq.lg },
    xl: { "@media": mq.xl },
    xxl: { "@media": mq["2xl"] },
  },
  defaultCondition: "initial",
  properties: {
    position: ["relative", "absolute"],
    display: [
      "none",
      "flex",
      "inline-flex",
      "grid",
      "block",
      "inline",
      "inline-block",
    ],
    flexDirection: ["row", "row-reverse", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end", "baseline"],
    alignContent: ["baseline"],
    placeItems: ["center"],
    placeContent: ["center"],
    paddingTop: tokens.space,
    paddingBottom: tokens.space,
    paddingLeft: tokens.space,
    paddingRight: tokens.space,
    marginTop: tokens.space,
    marginRight: tokens.space,
    marginBottom: tokens.space,
    marginLeft: tokens.space,
    gap: tokens.space,
    rowGap: tokens.space,
    columnGap: tokens.space,
    textAlign: ["left", "center", "right"],
  },
});

export const mapResponsiveValue = createMapValueFn(responsiveProperties);

export const normalizeResponsiveValue =
  createNormalizeValueFn(responsiveProperties);

export type ResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveProperties,
  Value
>;

const unResponsiveProperties = defineProperties({
  properties: {
    color: tokens.palette,
    pointerEvents: ["auto", "none"],
    zIndex: tokens.zIndex,
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  unResponsiveProperties,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
