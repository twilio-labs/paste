import {ThemeShape} from '@twilio-paste/theme-tokens';

export interface ZIndexProps {
  zIndex?: keyof ThemeShape['zIndices'] | Array<keyof ThemeShape['zIndices']>;
}
