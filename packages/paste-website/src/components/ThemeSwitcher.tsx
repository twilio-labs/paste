import * as React from 'react';
import {trackCustomEvent} from 'gatsby-plugin-google-analytics';
import {styled, css} from '@twilio-paste/styling-library';
import {useUID} from '@twilio-paste/uid-library';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {ThemeVariants} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';
import {useActiveSiteTheme} from '../context/ActiveSiteThemeContext';
import {useNavigationContext} from '../context/NavigationContext';

interface ThemeSwitcherProps {
  children?: React.ReactElement;
}

const StyledThemeSwitcherLabel = styled.label<{checked: boolean}>((props) =>
  css({
    cursor: 'pointer',
    display: ['flex', 'flex', 'inline-block'],
    flexGrow: 1,
    justifyContent: 'center',
    fontSize: 'fontSize30',
    fontWeight: props.checked ? 'fontWeightBold' : 'fontWeightNormal',
    lineHeight: 'lineHeight30',
    paddingTop: 'space20',
    paddingBottom: 'space20',
    paddingRight: 'space40',
    paddingLeft: 'space40',
    backgroundColor: props.checked
      ? ['colorBackgroundPrimary', 'colorBackgroundPrimary', 'colorBackgroundInverseLight']
      : ['colorBackgroundBody', 'colorBackgroundBody', 'transparent'],
    borderRadius: props.checked ? 'borderRadius10' : '0',
    color: props.checked ? 'colorTextInverse' : ['colorTextLink', 'colorTextLink', 'colorTextInverse'],
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
  const {pathname} = useNavigationContext();

  // We don't want the ThemeSwitcher on the homepage anymore.
  if (pathname === '/') {
    return <div />; // return empty div because desktop flex expects something
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    updateActiveSiteTheme(event.currentTarget.value as ThemeVariants);
  };

  const darkID = useUID();
  const pasteID = useUID();

  return (
    <Box
      as="form"
      backgroundColor="colorBackgroundInverse"
      borderColor={['colorBorderLight', 'colorBorderLight', 'colorBorderInverse']}
      borderRadius="borderRadius20"
      borderStyle="solid"
      borderWidth="borderWidth10"
      padding="space10"
      maxWidth="size30"
    >
      <Box as="fieldset" display="flex" borderWidth="borderWidth0" padding="space0" margin="space0">
        <ScreenReaderOnly as="legend">Change the site theme</ScreenReaderOnly>

        <StyledThemeSwitcherLabel htmlFor={pasteID} checked={theme === ThemeVariants.DEFAULT}>
          Default
          <StyledThemeSwitcherRadio
            checked={theme === ThemeVariants.DEFAULT}
            id={pasteID}
            name="sitetheme"
            onChange={handleChange}
            type="radio"
            value={ThemeVariants.DEFAULT}
            onClick={() =>
              trackCustomEvent({
                category: 'Top Navigation',
                action: 'click-default',
                label: 'Default',
              })
            }
          />
        </StyledThemeSwitcherLabel>

        <StyledThemeSwitcherLabel htmlFor={darkID} checked={theme === ThemeVariants.DARK}>
          Dark
          <StyledThemeSwitcherRadio
            checked={theme === ThemeVariants.DARK}
            id={darkID}
            name="sitetheme"
            onChange={handleChange}
            type="radio"
            value={ThemeVariants.DARK}
            onClick={() =>
              trackCustomEvent({
                category: 'Top Navigation',
                action: 'click-legacy',
                label: 'DARK',
              })
            }
          />
        </StyledThemeSwitcherLabel>
      </Box>
    </Box>
  );
};
