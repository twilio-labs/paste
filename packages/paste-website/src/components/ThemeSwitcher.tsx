import * as React from 'react';
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
    fontSize: '.fontSize30',
    lineHeight: 'lineHeight30',
    paddingTop: 'space20',
    paddingBottom: 'space20',
    paddingRight: 'space40',
    paddingLeft: 'space40',
    backgroundColor: props.checked ? 'colorBackgroundPrimary' : 'transparent',
    borderRadius: props.checked ? 'borderRadius10' : '0',
    color: props.checked ? 'colorTextInverse' : 'inherit',
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:focus-within': {
      boxShadow: 'shadowFocus',
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
      borderColor="colorBorderLight"
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
          />
        </StyledThemeSwitcherLabel>
      </Box>
    </Box>
  );
};
