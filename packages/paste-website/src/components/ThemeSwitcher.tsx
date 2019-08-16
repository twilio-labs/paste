import * as React from 'react';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';

interface ThemeSwitcherProps {
  children?: React.ReactElement;
}
export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
  return (
    <div>
      <ScreenReaderOnly>Theme Switcher Placeholder</ScreenReaderOnly>
    </div>
  );
};
