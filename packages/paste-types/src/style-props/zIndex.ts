import {ThemeShape} from '@twilio-paste/theme-tokens';
import {ResponsiveValue} from 'styled-system';

export interface ZIndexProps {
  zIndex?: ResponsiveValue<keyof ThemeShape['zIndices']>;
}
