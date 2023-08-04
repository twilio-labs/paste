import type {ThemeShape} from '@twilio-paste/theme';

export type BackgroundColorTokens = keyof ThemeShape['backgroundColors'];

export interface UIStates {
  disabled?: boolean;
  error?: boolean;
  focused?: boolean;
  hovered?: boolean;
  dragging?: boolean;
}
