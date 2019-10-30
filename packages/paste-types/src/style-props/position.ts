// https://styled-system.com/api/#position
import * as CSS from 'csstype';
import {ThemeShape} from '@twilio-paste/theme-tokens';
import {ResponsiveValue, TLengthStyledSystem} from 'styled-system';

// Tokens
export type ZIndex = ResponsiveValue<keyof ThemeShape['zIndices']>;

// CSS native
export type Position = ResponsiveValue<CSS.PositionProperty>;
export type Top = ResponsiveValue<CSS.TopProperty<TLengthStyledSystem>>;
export type Right = ResponsiveValue<CSS.RightProperty<TLengthStyledSystem>>;
export type Bottom = ResponsiveValue<CSS.BottomProperty<TLengthStyledSystem>>;
export type Left = ResponsiveValue<CSS.LeftProperty<TLengthStyledSystem>>;

// Styled-system grouping
export interface PositionProps {
  position?: Position;
  top?: Top;
  right?: Right;
  bottom?: Bottom;
  left?: Left;
  zIndex?: ZIndex;
}
