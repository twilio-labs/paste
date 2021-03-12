import React from 'react';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {withPerformance} from 'storybook-addon-performance';
import {Theme} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';

export const globalTypes = {
  theme: {
    name: 'Paste Theme',
    description: 'Global theme for components',
    defaultValue: 'dark',
    toolbar: {
      // All available icons
      // https://github.com/storybookjs/storybook/blob/master/lib/components/src/icon/icons.tsx
      icon: 'paintbrush',
      // array of plain string values or MenuItem shape (see below)
      items: ['sendgrid', 'console', 'default', 'dark'],
    },
  },
};

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme;
    return (
      <Theme.Provider theme={theme}>
        <Box padding="space40" backgroundColor="colorBackgroundBody">
          <Story />
        </Box>
      </Theme.Provider>
    );
  },
  withPerformance,
];

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
