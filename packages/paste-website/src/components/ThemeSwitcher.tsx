import * as React from 'react';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {useUID} from 'react-uid';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {ThemeVariants} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';
import {useActiveSiteTheme} from '../context/ActiveSiteThemeContext';

interface ThemeSwitcherProps {
  children?: React.ReactElement;
}

const StyledThemeSwitcherLabel = styled.label<{}>(props => ({
  cursor: 'pointer',
  display: 'inline-block',
  padding: `${themeGet('space.space20')(props)} ${themeGet('space.space40')(props)}`,
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const StyledThemeSwitcherRadio = styled.input<{}>(props => ({
  opacity: 0,
  position: 'absolute',
  [`&:focus + ${StyledThemeSwitcherLabel}`]: {
    boxShadow: themeGet('shadows.shadowFocus')(props),
    textDecoration: 'underline',
  },
  [`&:checked + ${StyledThemeSwitcherLabel}`]: {
    backgroundColor: themeGet('backgroundColors.colorBackgroundPrimary')(props),
    borderRadius: themeGet('radii.borderRadius10')(props),
    color: themeGet('textColors.colorTextInverse')(props),
  },
}));

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
  const {theme, updateActiveSiteTheme} = useActiveSiteTheme();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    updateActiveSiteTheme(event.currentTarget.value as ThemeVariants);
  };

  const consoleID = useUID();
  const sendGridID = useUID();

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
        <StyledThemeSwitcherRadio
          checked={theme === ThemeVariants.CONSOLE}
          id={consoleID}
          name="sitetheme"
          onChange={handleChange}
          type="radio"
          value={ThemeVariants.CONSOLE}
        />
        <StyledThemeSwitcherLabel htmlFor={consoleID}>Console</StyledThemeSwitcherLabel>
        <StyledThemeSwitcherRadio
          checked={theme === ThemeVariants.SENDGRID}
          id={sendGridID}
          name="sitetheme"
          onChange={handleChange}
          type="radio"
          value={ThemeVariants.SENDGRID}
        />
        <StyledThemeSwitcherLabel htmlFor={sendGridID}>SendGrid</StyledThemeSwitcherLabel>
      </Box>
    </Box>
  );
};
