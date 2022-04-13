import React from 'react';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import isChromatic from 'chromatic/isChromatic';
import {StylingGlobals} from '@twilio-paste/styling-library';
import {Theme} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Grid, Column} from '@twilio-paste/grid';
import {RenderPerformanceProfiler} from './RenderPerformanceProfiler';

const disableAnimations = isChromatic();

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
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        {value: 'en', right: 'LTR', title: 'English'},
        {value: 'rtl', right: 'RTL', title: 'English (RTL)'},
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
    console.log({theme});
    const layout = context.globals.theme_layout;
    const lang = context.globals.locale;

    switch (lang) {
      case 'rtl':
        document.body.setAttribute('dir', 'rtl');
        break;

      default:
        document.body.setAttribute('dir', 'ltr');
        break;
    }

    switch (layout) {
      default:
      case 'default':
        return (
          <RenderPerformanceProfiler id={context.id} kind={context.kind} view="default">
            <GlobalStyles />
            <Theme.Provider theme={theme} disableAnimations={disableAnimations}>
              <Box backgroundColor="colorBackgroundBody" color="colorText" padding="space80">
                <Story />
              </Box>
            </Theme.Provider>
          </RenderPerformanceProfiler>
        );
      case 'side-by-side':
        return (
          <RenderPerformanceProfiler id={context.id} kind={context.kind} view="side-by-side">
            <GlobalStyles />
            <Grid>
              <Column>
                <Theme.Provider theme="default" disableAnimations={disableAnimations}>
                  <Box backgroundColor="colorBackgroundBody" color="colorText" padding="space80">
                    <Story />
                  </Box>
                </Theme.Provider>
              </Column>
              <Column>
                <Theme.Provider theme="dark" disableAnimations={disableAnimations}>
                  <Box backgroundColor="colorBackgroundBody" color="colorText" padding="space80">
                    <Story />
                  </Box>
                </Theme.Provider>
              </Column>
            </Grid>
          </RenderPerformanceProfiler>
        );
      case 'stacked':
        return (
          <RenderPerformanceProfiler id={context.id} kind={context.kind} view="stacked">
            <GlobalStyles />
            <Stack orientation="vertical">
              <Theme.Provider theme="default" disableAnimations={disableAnimations}>
                <Box backgroundColor="colorBackgroundBody" color="colorText" padding="space80">
                  <Story />
                </Box>
              </Theme.Provider>
              <Theme.Provider theme="default" disableAnimations={disableAnimations}>
                <Box backgroundColor="colorBackgroundBody" color="colorText" padding="space20">
                  <Box margin="space40" padding="space40" backgroundColor="colorBackground">
                    <Story />
                  </Box>
                </Box>
              </Theme.Provider>
              <Theme.Provider theme="dark" disableAnimations={disableAnimations}>
                <Box backgroundColor="colorBackgroundBody" color="colorText" padding="space80">
                  <Story />
                </Box>
              </Theme.Provider>
              <Theme.Provider theme="dark" disableAnimations={disableAnimations}>
                <Box backgroundColor="colorBackgroundBody" color="colorText" padding="space20">
                  <Box margin="space40" padding="space40" backgroundColor="colorBackground">
                    <Story />
                  </Box>
                </Box>
              </Theme.Provider>
            </Stack>
          </RenderPerformanceProfiler>
        );
    }
  },
];

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
