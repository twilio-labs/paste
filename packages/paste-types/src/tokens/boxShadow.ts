import {ThemeShape} from '@twilio-paste/theme-tokens';

export interface BoxShadowProps {
  boxShadow?: keyof ThemeShape['shadows'] | Array<keyof ThemeShape['shadows']>;
}
