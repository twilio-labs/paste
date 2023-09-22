import type { ResponsiveValue, TLengthStyledSystem } from "@twilio-paste/styling-library";
import type { ThemeShape } from "@twilio-paste/theme";
// https://styled-system.com/api/#position
import type { Properties } from "csstype";

// Tokens
export type ZIndexOptions = keyof ThemeShape["zIndices"];
export type ZIndex = ResponsiveValue<ZIndexOptions>;

// CSS native

export type PositionOptions = Properties["position"];
export type TopOptions = Properties<TLengthStyledSystem>["top"];
export type RightOptions = Properties<TLengthStyledSystem>["right"];
export type BottomOptions = Properties<TLengthStyledSystem>["bottom"];
export type LeftOptions = Properties<TLengthStyledSystem>["left"];
export type InsetOptions = Properties<TLengthStyledSystem>["inset"];

export type Position = ResponsiveValue<PositionOptions>;
export type Top = ResponsiveValue<TopOptions>;
export type Right = ResponsiveValue<RightOptions>;
export type Bottom = ResponsiveValue<BottomOptions>;
export type Left = ResponsiveValue<LeftOptions>;
export type Inset = ResponsiveValue<InsetOptions>;

// Styled-system grouping
export interface PositionProps {
  position?: Position;
  top?: Top;
  right?: Right;
  bottom?: Bottom;
  left?: Left;
  zIndex?: ZIndex;
  inset?: Inset;
}
