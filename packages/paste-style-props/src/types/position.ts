// https://styled-system.com/api/#position
import * as CSS from 'csstype';
import {ThemeShape} from '@twilio-paste/theme-tokens';
import {ResponsiveValue, TLengthStyledSystem} from 'styled-system';

// Tokens
export type ZIndexOptions = keyof ThemeShape['zIndices'];
export type ZIndex = ResponsiveValue<ZIndexOptions>;

// CSS native

export type PositionOptions = CSS.PositionProperty;
export type TopOptions = CSS.TopProperty<TLengthStyledSystem>;
export type RightOptions = CSS.RightProperty<TLengthStyledSystem>;
export type BottomOptions = CSS.BottomProperty<TLengthStyledSystem>;
export type LeftOptions = CSS.LeftProperty<TLengthStyledSystem>;

export type Position = ResponsiveValue<PositionOptions>;
export type Top = ResponsiveValue<TopOptions>;
export type Right = ResponsiveValue<RightOptions>;
export type Bottom = ResponsiveValue<BottomOptions>;
export type Left = ResponsiveValue<LeftOptions>;

// Styled-system grouping
export interface PositionProps {
  position?: Position;
  top?: Top;
  right?: Right;
  bottom?: Bottom;
  left?: Left;
  zIndex?: ZIndex;
}
