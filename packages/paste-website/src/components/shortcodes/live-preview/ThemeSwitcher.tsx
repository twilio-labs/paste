import * as React from 'react';
import {RadioButton, RadioButtonGroup} from '@twilio-paste/radio-button-group';
import {useUID, useUIDSeed} from '@twilio-paste/uid-library';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {Box} from '@twilio-paste/box';

import {usePreviewThemeContext} from '../../../context/PreviewThemeContext';

export const ThemeSwitcher: React.FC<React.PropsWithChildren> = () => {
  const {theme, selectTheme} = usePreviewThemeContext();
  const nameSeed = useUIDSeed();
  return (
    <Box padding="space40">
      <RadioButtonGroup
        attached
        name="theme"
        value={theme}
        legend={<ScreenReaderOnly>Component preview theme</ScreenReaderOnly>}
        onChange={(newValue) => {
          selectTheme(newValue);
        }}
        orientation="horizontal"
      >
        <RadioButton id={useUID()} value="default" name={nameSeed('theme')}>
          Default
        </RadioButton>
        <RadioButton id={useUID()} value="dark" name={nameSeed('theme')}>
          Dark
        </RadioButton>
        <RadioButton id={useUID()} value="twilio" name={nameSeed('theme')}>
          Twilio
        </RadioButton>
        <RadioButton id={useUID()} value="twilio-dark" name={nameSeed('theme')}>
          Twilio Dark
        </RadioButton>
        <RadioButton id={useUID()} value="evergreen" name={nameSeed('theme')}>
          Evergreen
        </RadioButton>
      </RadioButtonGroup>
    </Box>
  );
};
