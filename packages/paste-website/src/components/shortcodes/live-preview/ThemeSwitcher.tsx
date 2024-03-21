import { Box } from "@twilio-paste/box";
import { RadioButton, RadioButtonGroup } from "@twilio-paste/radio-button-group";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { usePreviewThemeContext } from "../../../context/PreviewThemeContext";

export const ThemeSwitcher: React.FC<React.PropsWithChildren> = () => {
  const { theme, selectTheme } = usePreviewThemeContext();

  return (
    <Box padding="space40">
      <RadioButtonGroup
        attached
        name="site-theme-switcher"
        value={theme}
        legend={<ScreenReaderOnly>Component preview theme</ScreenReaderOnly>}
        onChange={(newValue) => {
          selectTheme(newValue);
        }}
        orientation="horizontal"
      >
        <RadioButton id={useUID()} value="default">
          Default
        </RadioButton>
        <RadioButton id={useUID()} value="dark">
          Dark
        </RadioButton>
        <RadioButton id={useUID()} value="twilio">
          Twilio
        </RadioButton>
        <RadioButton id={useUID()} value="twilio-dark">
          Twilio Dark
        </RadioButton>
        <RadioButton id={useUID()} value="evergreen">
          Evergreen
        </RadioButton>
      </RadioButtonGroup>
    </Box>
  );
};
