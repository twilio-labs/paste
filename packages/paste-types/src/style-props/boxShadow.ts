import {ThemeShape} from '@twilio-paste/theme-tokens';
import {ResponsiveValue} from 'styled-system';

export interface BoxShadowProps {
  boxShadow?: ResponsiveValue<keyof ThemeShape['shadows']>;
}
