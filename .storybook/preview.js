import React from 'react';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';

import isChromatic from 'chromatic/isChromatic';
import {StylingGlobals} from '@twilio-paste/styling-library';
import {Theme} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Grid, Column} from '@twilio-paste/grid';
import {StoryWrapper} from './RenderPerformanceProfiler';

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

const formatSuffix = (str) => (str ? str.padStart(str.length + 2, '--') : '');
const formatPrefix = (str) => (str ? str.padEnd(str.length + 2, '--') : '');
const getUndecoratedStory = (context) => context.undecoratedStoryFn(context);
const createProfilerId = (id, prefix, suffix) => `${formatPrefix(prefix)}${id}${formatSuffix(suffix)}`;

const StorybookThemeProvider = ({children, theme, disableAnimations}) => (
  <Theme.Provider theme={theme} disableAnimations={disableAnimations}>
    {children}
  </Theme.Provider>
);

StorybookThemeProvider.displayName = 'PasteStorybook.ThemeProvider';

export const decorators = [
  (_noop, context) => {
    const theme = context.globals.theme;
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

    // remove unnecessary fragment that wraps the decorated story.
    const story = getUndecoratedStory(context);

    switch (layout) {
      default:
      case 'default':
        return (
          <>
            <GlobalStyles />
            <StorybookThemeProvider theme={theme} disableAnimations={disableAnimations}>
              <Box backgroundColor="colorBackgroundBody" color="colorText" padding="space80">
                <StoryWrapper
                  id={createProfilerId(context.id, 'TEST', 'default-layout')}
                  kind={context.kind}
                  view="default"
                >
                  {story}
                </StoryWrapper>
              </Box>
            </StorybookThemeProvider>
          </>
        );

      case 'side-by-side':
        return (
          <>
            <GlobalStyles />
            <Grid>
              <Column>
                <StorybookThemeProvider theme="default" disableAnimations={disableAnimations}>
                  <Box backgroundColor="colorBackgroundBody" color="colorText" padding="space80">
                    <StoryWrapper
                      id={createProfilerId(context.id, 'TEST', 'sbs-layout')}
                      kind={context.kind}
                      view="side-by-side"
                    >
                      {story}
                    </StoryWrapper>
                  </Box>
                </StorybookThemeProvider>
              </Column>
              <Column>
                <Box backgroundColor="colorBackgroundBody" color="colorText" padding="space80">
                  <StorybookThemeProvider theme="dark" disableAnimations={disableAnimations}>
                    {story}
                  </StorybookThemeProvider>
                </Box>
              </Column>
            </Grid>
          </>
        );
      case 'stacked':
        return (
          <>
            <GlobalStyles />
            <Stack orientation="vertical">
              <StorybookThemeProvider theme="default" disableAnimations={disableAnimations}>
                <Box backgroundColor="colorBackgroundBody" color="colorText" padding="space80">
                  <StoryWrapper
                    id={createProfilerId(context.id, 'TEST', 'stacked-layout--default-1')}
                    kind={context.kind}
                    view="stacked"
                  >
                    {story}
                  </StoryWrapper>
                </Box>
              </StorybookThemeProvider>
              <StorybookThemeProvider theme="default" disableAnimations={disableAnimations}>
                <Box backgroundColor="colorBackgroundBody" color="colorText" padding="space20">
                  <Box margin="space40" padding="space40" backgroundColor="colorBackground">
                    <StoryWrapper
                      id={createProfilerId(context.id, 'TEST', 'stacked-layout--default-2')}
                      kind={context.kind}
                      view="stacked"
                    >
                      {story}
                    </StoryWrapper>
                  </Box>
                </Box>
              </StorybookThemeProvider>
              <StorybookThemeProvider theme="dark" disableAnimations={disableAnimations}>
                <Box backgroundColor="colorBackgroundBody" color="colorText" padding="space80">
                  <StoryWrapper
                    id={createProfilerId(context.id, 'TEST', 'stacked-layout--dark-1')}
                    kind={context.kind}
                    view="stacked"
                  >
                    {story}
                  </StoryWrapper>
                </Box>
              </StorybookThemeProvider>
              <StorybookThemeProvider theme="dark" disableAnimations={disableAnimations}>
                <Box backgroundColor="colorBackgroundBody" color="colorText" padding="space20">
                  <Box margin="space40" padding="space40" backgroundColor="colorBackground">
                    <StoryWrapper
                      id={createProfilerId(context.id, 'TEST', 'stacked-layout--dark-2')}
                      kind={context.kind}
                      view="stacked"
                    >
                      {story}
                    </StoryWrapper>
                  </Box>
                </Box>
              </StorybookThemeProvider>
            </Stack>
          </>
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
