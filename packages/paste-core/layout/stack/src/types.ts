import type {ResponsiveValue} from '@twilio-paste/styling-library';
import type {Space, JustifyContent} from '@twilio-paste/style-props';
import type {BoxElementProps} from '@twilio-paste/box';

export type StackOrientationOptions = 'horizontal' | 'vertical';
export type StackOrientation = ResponsiveValue<StackOrientationOptions>;

export interface StackProps extends BoxElementProps {
  justifyContent?: JustifyContent;
  orientation: StackOrientation;
  spacing: Space;
}
