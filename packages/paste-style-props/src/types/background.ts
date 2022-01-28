// https://styled-system.com/api/#background
import type * as CSS from 'csstype';
import type {ThemeShape} from '@twilio-paste/theme';
import type {ResponsiveValue, TLengthStyledSystem} from '@twilio-paste/styling-library';
import type {StyleReset} from './helpers';

// Tokens
export type BackgroundColorOptions = keyof ThemeShape['backgroundColors'];
export type BackgroundColor = ResponsiveValue<BackgroundColorOptions | 'none' | 'transparent'>;

// CSS native
export type BackgroundImageOptions = CSS.BackgroundImageProperty;
export type BackgroundSizeOptions = CSS.BackgroundSizeProperty<TLengthStyledSystem>;
export type BackgroundPositionOptions = CSS.BackgroundPositionProperty<TLengthStyledSystem>;
export type BackgroundRepeatOptions = CSS.BackgroundRepeatProperty;
export type BackgroundAttachmentOptions = CSS.BackgroundAttachmentProperty;

export type BackgroundImage = ResponsiveValue<BackgroundImageOptions>;
export type BackgroundSize = ResponsiveValue<BackgroundSizeOptions>;
export type BackgroundPosition = ResponsiveValue<BackgroundPositionOptions>;
export type BackgroundRepeat = ResponsiveValue<BackgroundRepeatOptions>;
export type BackgroundAttachment = ResponsiveValue<BackgroundAttachmentOptions>;

/* Styled-system grouping
 * ---
 * We add `backgroundColor` here, not in the `color` interface grouping like styled-system does
 * We also add `backgroundAttachment` here since it's logically grouped
 */
export interface BackgroundProps {
  background?: StyleReset;
  backgroundColor?: BackgroundColor;
  backgroundImage?: BackgroundImage;
  backgroundSize?: BackgroundSize;
  backgroundPosition?: BackgroundPosition;
  backgroundRepeat?: BackgroundRepeat;
  backgroundAttachment?: BackgroundAttachment;
}
