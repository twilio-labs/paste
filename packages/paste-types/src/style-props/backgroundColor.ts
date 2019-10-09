import {ThemeShape} from '@twilio-paste/theme-tokens';
import {ResponsiveValue} from 'styled-system';

export interface BackgroundColorProps {
  backgroundColor?: ResponsiveValue<keyof ThemeShape['backgroundColors']>;
}
