// https://styled-system.com/api/#background
import * as CSS from 'csstype';
import {ThemeShape} from '@twilio-paste/theme';
import {ResponsiveValue, TLengthStyledSystem} from '@twilio-paste/styling-library';

// Tokens
export type BackgroundColorOptions = keyof ThemeShape['backgroundColors'];
export type BackgroundColor = ResponsiveValue<BackgroundColorOptions>;

// CSS native
export type BackgroundImageOptions = CSS.BackgroundImageProperty;
export type BackgroundSizeOptions = CSS.BackgroundSizeProperty<TLengthStyledSystem>;
export type BackgroundPositionOptions = CSS.BackgroundPositionProperty<TLengthStyledSystem>;
export type BackgroundRepeatOptions = CSS.BackgroundRepeatProperty;

export type BackgroundImage = ResponsiveValue<BackgroundImageOptions>;
export type BackgroundSize = ResponsiveValue<BackgroundSizeOptions>;
export type BackgroundPosition = ResponsiveValue<BackgroundPositionOptions>;
export type BackgroundRepeat = ResponsiveValue<BackgroundRepeatOptions>;

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
