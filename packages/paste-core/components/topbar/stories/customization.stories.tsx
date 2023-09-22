import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { CustomizationProvider } from '@twilio-paste/customization';

import { Topbar } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Topbar/Customization',
};

export const DefaultElement: StoryFn = () => {
  return (
    <CustomizationProvider
      baseTheme="default"
      elements={{
        TOPBAR: {
          backgroundColor: 'colorBackgroundPrimary',
          color: 'colorTextInverse',
        },
      }}
    >
      <Topbar id="topbar">Topbar</Topbar>
    </CustomizationProvider>
  );
};
DefaultElement.parameters = {
  padding: false,
};

export const CustomElement: StoryFn = () => {
  return (
    <CustomizationProvider
      baseTheme="default"
      elements={{
        CUSTOM_TOPBAR: {
          backgroundColor: 'colorBackgroundPrimary',
          color: 'colorTextInverse',
        },
      }}
    >
      <Topbar id="topbar" element="CUSTOM_TOPBAR">
        Topbar
      </Topbar>
    </CustomizationProvider>
  );
};
CustomElement.parameters = {
  padding: false,
};
