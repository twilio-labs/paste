"use client";
export { Box } from "./Box";
export { getCustomElementStyles } from "./StyleFunctions";
export { BOX_PROPS_TO_BLOCK, safelySpreadBoxProps } from "./SafelySpreadProps";
// We only want to document BoxProps, by using inline type exports we can avoid documenting other exported types
export {
  type BoxBaseStyleProps,
  type BoxElementProps,
  type BoxStyleProps,
  type BoxPseudoStyleProps,
  type StyledBoxProps,
} from "./types";
// this is the only interface we want to document
export type { BoxProps } from "./types";
