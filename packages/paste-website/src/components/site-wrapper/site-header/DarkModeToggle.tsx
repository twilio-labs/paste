import * as React from 'react';
import {styled, css} from '@twilio-paste/styling-library';
import {useUID} from '@twilio-paste/uid-library';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {DarkModeIcon} from '@twilio-paste/icons/esm/DarkModeIcon';
import {LightModeIcon} from '@twilio-paste/icons/esm/LightModeIcon';

import {useDarkModeContext} from '../../../context/DarkModeContext';
import {DarkModeBadge} from './DarkModeBadge';
import {event} from '../../../lib/gtag';

const StyledThemeSwitcherLabel = styled.label<{checked: boolean}>((props) =>
  css({
    cursor: 'pointer',
    display: 'inline-block',
    flexGrow: 1,
    justifyContent: 'center',
    fontSize: 'fontSize30',
    fontWeight: props.checked ? 'fontWeightBold' : 'fontWeightNormal',
    lineHeight: 'lineHeight30',
    paddingTop: 'space20',
    paddingBottom: 'space20',
    paddingRight: 'space40',
    paddingLeft: 'space40',
    backgroundColor: props.checked ? 'colorBackgroundStrongest' : 'transparent',
    borderRadius: 'borderRadius10',
    color: props.checked ? 'colorTextWeakest' : 'colorTextInverse',
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

export const DarkModeToggle = (): JSX.Element => {
  const {theme, toggleMode} = useDarkModeContext();
  const lightModeID = useUID();
  const darkModeID = useUID();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = () => {
    toggleMode();
  };

  return (
    <Box display="flex">
      <Box
        as="form"
        backgroundColor="colorBackgroundInverse"
        borderColor="colorBorderInverse"
        borderRadius="borderRadius20"
        borderStyle="solid"
        borderWidth="borderWidth10"
        padding="space10"
        maxWidth="size30"
      >
        <Box as="fieldset" display="flex" borderWidth="borderWidth0" padding="space0" margin="space0">
          <ScreenReaderOnly as="legend">Change the site theme</ScreenReaderOnly>
          <StyledThemeSwitcherLabel htmlFor={lightModeID} checked={theme === 'twilio'}>
            <Stack spacing="space10" orientation="horizontal">
              <LightModeIcon decorative /> Light
            </Stack>
            <StyledThemeSwitcherRadio
              checked={theme === 'twilio'}
              id={lightModeID}
              name="darkmode"
              onChange={handleChange}
              type="radio"
              value="light"
              onClick={() => {
                event({
                  category: 'Top Navigation',
                  action: 'click-dark-mode',
                  label: 'Light',
                });
              }}
            />
          </StyledThemeSwitcherLabel>
          <StyledThemeSwitcherLabel htmlFor={darkModeID} checked={theme === 'twilio-dark'}>
            <Stack spacing="space10" orientation="horizontal">
              <DarkModeIcon decorative /> Dark
            </Stack>
            <StyledThemeSwitcherRadio
              checked={theme === 'twilio-dark'}
              id={darkModeID}
              name="darkmode"
              onChange={handleChange}
              type="radio"
              value="dark"
              onClick={() => {
                event({
                  category: 'Top Navigation',
                  action: 'click-dark-mode',
                  label: 'Dark',
                });
              }}
            />
          </StyledThemeSwitcherLabel>
        </Box>
      </Box>
    </Box>
  );
};
