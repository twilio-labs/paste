import React from 'react';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import isChromatic from 'chromatic';
import {StylingGlobals} from '@twilio-paste/styling-library';
import {Theme} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Grid, Column} from '@twilio-paste/grid';
import {RenderPerformanceProfiler} from './RenderPerformanceProfiler';
import {SITE_BREAKPOINTS} from '../packages/paste-website/src/constants';

// disable animations in test environments
const isTestEnvironment = isChromatic() || process.env.NODE_ENV === 'test';

export const globalTypes = {
  theme: {
    name: 'Paste Theme',
    description: 'Global theme for components',
    defaultValue: 'twilio',
    toolbar: {
      // All available icons
      // https://github.com/storybookjs/storybook/blob/master/lib/components/src/icon/icons.tsx
      icon: 'paintbrush',
      // array of plain string values or MenuItem shape (see below)
      items: ['default', 'dark', 'sendgrid', 'evergreen', 'twilio', 'twilio-dark'],
    },
  },
  theme_layout: {
    name: 'Theme layout',
    description: 'Choose how you wish to view the story themes',
    defaultValue: isTestEnvironment ? 'stacked' : 'default',
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
  breakpoints: {
    name: 'Breakpoints',
    description: 'Responsive breakpoint settings for ThemeProvider',
    defaultValue: null,
    toolbar: {
      icon: 'mobile',
      items: [
        {value: null, title: 'Default Breakpoints'},
        {value: SITE_BREAKPOINTS, title: 'Docs Site Breakpoints'},
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

// This collection of story ids will always be tested in VRT and our a11y test suites using
// the default layout, rather than the stacked layout which renders the story across multiple
// themes. This is important for stories that focus on an individual theme for example.
const FORCE_DEFAULT_LAYOUT_STORY_IDS = 'theme-themes--evergreen'.split(' ');

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme;
    const layout = FORCE_DEFAULT_LAYOUT_STORY_IDS.includes(context.id) ? 'default' : context.globals.theme_layout;
    const lang = context.globals.locale;
    const breakpoints = context.globals.breakpoints;

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
            <Theme.Provider theme={theme} disableAnimations={isTestEnvironment} customBreakpoints={breakpoints}>
              <Box
                backgroundColor="colorBackgroundBody"
                color="colorText"
                padding={context.parameters.padding === false ? 'space0' : 'space80'}
              >
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
                <Theme.Provider theme="twilio" disableAnimations={isTestEnvironment} customBreakpoints={breakpoints}>
                  <Box
                    backgroundColor="colorBackgroundBody"
                    color="colorText"
                    padding={context.parameters.padding === false ? 'space0' : 'space80'}
                  >
                    <Story />
                  </Box>
                </Theme.Provider>
              </Column>
              <Column>
                <Theme.Provider
                  theme="twilio-dark"
                  disableAnimations={isTestEnvironment}
                  customBreakpoints={breakpoints}
                >
                  <Box
                    backgroundColor="colorBackgroundBody"
                    color="colorText"
                    padding={context.parameters.padding === false ? 'space0' : 'space80'}
                  >
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
            <Stack orientation="vertical" spacing="space0">
              <Theme.Provider theme="default" disableAnimations customBreakpoints={breakpoints}>
                <Box
                  backgroundColor="colorBackgroundBody"
                  color="colorText"
                  padding={context.parameters.padding === false ? 'space0' : 'space80'}
                >
                  <Story />
                </Box>
              </Theme.Provider>
              <Theme.Provider theme="default" disableAnimations customBreakpoints={breakpoints}>
                <Box
                  backgroundColor="colorBackgroundBody"
                  color="colorText"
                  padding={context.parameters.padding === false ? 'space0' : 'space20'}
                >
                  <Box
                    margin={context.parameters.padding === false ? 'space0' : 'space40'}
                    padding={context.parameters.padding === false ? 'space0' : 'space40'}
                    backgroundColor="colorBackground"
                  >
                    <Story />
                  </Box>
                </Box>
              </Theme.Provider>
              <Theme.Provider theme="dark" disableAnimations customBreakpoints={breakpoints}>
                <Box
                  backgroundColor="colorBackgroundBody"
                  color="colorText"
                  padding={context.parameters.padding === false ? 'space0' : 'space80'}
                >
                  <Story />
                </Box>
              </Theme.Provider>
              <Theme.Provider theme="dark" disableAnimations customBreakpoints={breakpoints}>
                <Box
                  backgroundColor="colorBackgroundBody"
                  color="colorText"
                  padding={context.parameters.padding === false ? 'space0' : 'space20'}
                >
                  <Box
                    margin={context.parameters.padding === false ? 'space0' : 'space40'}
                    padding={context.parameters.padding === false ? 'space0' : 'space40'}
                    backgroundColor="colorBackground"
                  >
                    <Story />
                  </Box>
                </Box>
              </Theme.Provider>
              <Theme.Provider theme="twilio" disableAnimations customBreakpoints={breakpoints}>
                <Box
                  backgroundColor="colorBackgroundBody"
                  color="colorText"
                  padding={context.parameters.padding === false ? 'space0' : 'space80'}
                >
                  <Story />
                </Box>
              </Theme.Provider>
              <Theme.Provider theme="twilio" disableAnimations customBreakpoints={breakpoints}>
                <Box
                  backgroundColor="colorBackgroundBody"
                  color="colorText"
                  padding={context.parameters.padding === false ? 'space0' : 'space20'}
                >
                  <Box
                    margin={context.parameters.padding === false ? 'space0' : 'space40'}
                    padding={context.parameters.padding === false ? 'space0' : 'space40'}
                    backgroundColor="colorBackground"
                  >
                    <Story />
                  </Box>
                </Box>
              </Theme.Provider>
              <Theme.Provider theme="twilio-dark" disableAnimations customBreakpoints={breakpoints}>
                <Box
                  backgroundColor="colorBackgroundBody"
                  color="colorText"
                  padding={context.parameters.padding === false ? 'space0' : 'space80'}
                >
                  <Story />
                </Box>
              </Theme.Provider>
              <Theme.Provider theme="twilio-dark" disableAnimations customBreakpoints={breakpoints}>
                <Box
                  backgroundColor="colorBackgroundBody"
                  color="colorText"
                  padding={context.parameters.padding === false ? 'space0' : 'space20'}
                >
                  <Box
                    margin={context.parameters.padding === false ? 'space0' : 'space40'}
                    padding={context.parameters.padding === false ? 'space0' : 'space40'}
                    backgroundColor="colorBackground"
                  >
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
  isTestEnvironment,
  actions: {argTypesRegex: '^on[A-Z].*'},
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  // Notifies Chromatic to pause the animations when they finish for all stories.
  chromatic: {pauseAnimationAtEnd: true},
};
