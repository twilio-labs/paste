import {ThemeShape} from '@twilio-paste/theme-tokens';

export interface BackgroundColorProps {
  backgroundColor?: keyof ThemeShape['backgroundColors'];
}
