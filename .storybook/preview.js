import React from 'react';
import {Theme} from '@twilio-paste/theme';

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
};

export const decorators = [
  Story => (
    <Theme.Provider theme="default">
      <Story />
    </Theme.Provider>
  ),
];
