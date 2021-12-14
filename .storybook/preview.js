import React from 'react';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import isChromatic from 'chromatic/isChromatic';
import {withPerformance} from 'storybook-addon-performance';
import {StylingGlobals} from '@twilio-paste/styling-library';
import {Theme} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Grid, Column} from '@twilio-paste/grid';

export const globalTypes = {
  theme: {
    name: 'Paste Theme',
    description: 'Global theme for components',
    defaultValue: 'default',
    toolbar: {
      // All available icons
      // https://github.com/storybookjs/storybook/blob/master/lib/components/src/icon/icons.tsx
      icon: 'paintbrush',
      // array of plain string values or MenuItem shape (see below)
      items: ['default', 'dark', 'sendgrid'],
    },
  },
  theme_layout: {
    name: 'Theme layout',
    description: 'Choose how you wish to view the story themes',
    defaultValue: isChromatic() ? 'stacked' : 'default',
    toolbar: {
      icon: 'component',
      items: [
        {value: 'default', title: 'default'},
        {value: 'side-by-side', title: 'side by side'},
        {value: 'stacked', title: 'stacked'},
      ],
    },
  },
};

const GlobalStyles = () => (
  <StylingGlobals
    styles={{
      body: {
        padding: '0 !important',
      },
    }}
  />
);

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme;
    const layout = context.globals.theme_layout;
    switch (layout) {
      default:
      case 'default':
        return (
          <Theme.Provider theme={theme} disableAnimations={isChromatic()}>
            <GlobalStyles />
            <Box backgroundColor="colorBackgroundBody" color="colorText" padding="space80">
              <Story />
            </Box>
          </Theme.Provider>
        );
      case 'side-by-side':
        return (
          <>
            <GlobalStyles />
            <Grid>
              <Column>
                <Theme.Provider theme="default" disableAnimations={isChromatic()}>
                  <Box backgroundColor="colorBackgroundBody" color="colorText" padding="space80">
                    <Story />
                  </Box>
                </Theme.Provider>
              </Column>
              <Column>
                <Theme.Provider theme="dark" disableAnimations={isChromatic()}>
                  <Box backgroundColor="colorBackgroundBody" color="colorText" padding="space80">
                    <Story />
                  </Box>
                </Theme.Provider>
              </Column>
            </Grid>
          </>
        );
      case 'stacked':
        return (
          <>
            <GlobalStyles />
            <Stack orientation="vertical">
              <Theme.Provider theme="default" disableAnimations={isChromatic()}>
                <Box backgroundColor="colorBackgroundBody" color="colorText" padding="space80">
                  <Story />
                </Box>
              </Theme.Provider>
              <Theme.Provider theme="default" disableAnimations={isChromatic()}>
                <Box backgroundColor="colorBackgroundBody" color="colorText" padding="space20">
                  <Box margin="space40" padding="space40" backgroundColor="colorBackground">
                    <Story />
                  </Box>
                </Box>
              </Theme.Provider>
              <Theme.Provider theme="dark" disableAnimations={isChromatic()}>
                <Box backgroundColor="colorBackgroundBody" color="colorText" padding="space80">
                  <Story />
                </Box>
              </Theme.Provider>
              <Theme.Provider theme="dark" disableAnimations={isChromatic()}>
                <Box backgroundColor="colorBackgroundBody" color="colorText" padding="space20">
                  <Box margin="space40" padding="space40" backgroundColor="colorBackground">
                    <Story />
                  </Box>
                </Box>
              </Theme.Provider>
            </Stack>
          </>
        );
    }
  },
  withPerformance,
];

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
