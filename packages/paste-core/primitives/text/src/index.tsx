"use client";
export { Text } from "./Text";
export { TEXT_PROPS_TO_BLOCK, safelySpreadTextProps } from "./SafelySpreadProps";
// We only want to document TextProps, by using inline type exports we can avoid documenting other exported types
export {
  type StyledTextProps,
  type TextBaseStyleProps,
  type TextElementProps,
  type TextPseudoStyleProps,
  type TextStyleProps,
} from "./types";
// this is the only interface we want to document
export type { TextProps } from "./types";
