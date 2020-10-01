import * as React from 'react';
import {trackCustomEvent} from 'gatsby-plugin-google-analytics';
import {styled, css} from '@twilio-paste/styling-library';
import {useUID} from 'react-uid';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {ThemeVariants} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';
import {useActiveSiteTheme} from '../context/ActiveSiteThemeContext';

interface ThemeSwitcherProps {
  children?: React.ReactElement;
}

const StyledThemeSwitcherLabel = styled.label<{checked: boolean}>(props =>
  css({
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: 'fontSize30',
    fontWeight: props.checked ? 'fontWeightBold' : 'fontWeightNormal',
    lineHeight: 'lineHeight30',
    paddingTop: 'space20',
    paddingBottom: 'space20',
    paddingRight: 'space40',
    paddingLeft: 'space40',
    backgroundColor: props.checked ? 'colorBackgroundInverseLight' : 'transparent',
    borderRadius: props.checked ? 'borderRadius10' : '0',
    color: 'colorTextInverse',
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:focus-within': {
      boxShadow: 'shadowFocusInverse',
      textDecoration: 'underline',
    },
  })
);

const StyledThemeSwitcherRadio = styled.input({
  opacity: 0,
  position: 'absolute',
});

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
  const {theme, updateActiveSiteTheme} = useActiveSiteTheme();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    updateActiveSiteTheme(event.currentTarget.value as ThemeVariants);
  };

  const consoleID = useUID();
  const pasteID = useUID();

  return (
    <Box
      as="form"
      backgroundColor="colorBackgroundInverse"
      borderColor="colorBorderInverse"
      borderRadius="borderRadius20"
      borderStyle="solid"
      borderWidth="borderWidth10"
      padding="space10"
    >
      <Box as="fieldset" borderWidth="borderWidth0" padding="space0" margin="space0">
        <ScreenReaderOnly as="legend">Change the site theme</ScreenReaderOnly>

        <StyledThemeSwitcherLabel htmlFor={consoleID} checked={theme === ThemeVariants.CONSOLE}>
          Current
          <StyledThemeSwitcherRadio
            checked={theme === ThemeVariants.CONSOLE}
            id={consoleID}
            name="sitetheme"
            onChange={handleChange}
            type="radio"
            value={ThemeVariants.CONSOLE}
            onClick={() =>
              trackCustomEvent({
                category: 'Theme Switcher',
                action: 'Click',
                label: 'Current',
              })
            }
          />
        </StyledThemeSwitcherLabel>

        <StyledThemeSwitcherLabel htmlFor={pasteID} checked={theme === ThemeVariants.DEFAULT}>
          Preview
          <StyledThemeSwitcherRadio
            checked={theme === ThemeVariants.DEFAULT}
            id={pasteID}
            name="sitetheme"
            onChange={handleChange}
            type="radio"
            value={ThemeVariants.DEFAULT}
            onClick={() =>
              trackCustomEvent({
                category: 'Theme Switcher',
                action: 'Click',
                label: 'Default',
              })
            }
          />
        </StyledThemeSwitcherLabel>
      </Box>
    </Box>
  );
};
