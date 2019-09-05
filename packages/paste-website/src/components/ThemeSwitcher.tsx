import * as React from 'react';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {Box} from '@twilio-paste/box';
import {Themes, ThemesType} from '../constants';
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

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    updateActiveSiteTheme(event.currentTarget.value as ThemesType);
  };

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
        <legend>
          <ScreenReaderOnly>Change the site theme</ScreenReaderOnly>
        </legend>
        <StyledThemeSwitcherRadio
          checked={theme === Themes.CONSOLE}
          id="console"
          name="sitetheme"
          onClick={handleChange}
          onChange={handleChange}
          type="radio"
          value={Themes.CONSOLE}
        />
        <StyledThemeSwitcherLabel htmlFor="console">Console</StyledThemeSwitcherLabel>
        <StyledThemeSwitcherRadio
          checked={theme === Themes.SENDGRID}
          id="sendgrid"
          name="sitetheme"
          onClick={handleChange}
          onChange={handleChange}
          type="radio"
          value={Themes.SENDGRID}
        />
        <StyledThemeSwitcherLabel htmlFor="sendgrid">SendGrid</StyledThemeSwitcherLabel>
      </Box>
    </Box>
  );
};
