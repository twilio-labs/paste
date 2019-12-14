// https://styled-system.com/api/#background
import * as CSS from 'csstype';
import {ThemeShape} from '@twilio-paste/theme-tokens';
import {ResponsiveValue, TLengthStyledSystem} from 'styled-system';

// Tokens
export type BackgroundColor = ResponsiveValue<keyof ThemeShape['backgroundColors']>;

// CSS native
export type BackgroundImage = ResponsiveValue<CSS.BackgroundImageProperty>;
export type BackgroundSize = ResponsiveValue<CSS.BackgroundSizeProperty<TLengthStyledSystem>>;
export type BackgroundPosition = ResponsiveValue<CSS.BackgroundPositionProperty<TLengthStyledSystem>>;
export type BackgroundRepeat = ResponsiveValue<CSS.BackgroundRepeatProperty>;

/* Styled-system grouping
 * ---
 * We add `backgroundColor` here, not in the `color` interface grouping like styled-system does
 */
export interface BackgroundProps {
  background?: never;
  backgroundColor?: BackgroundColor;
  backgroundImage?: BackgroundImage;
  backgroundSize?: BackgroundSize;
  backgroundPosition?: BackgroundPosition;
  backgroundRepeat?: BackgroundRepeat;
}
