import type { StoryFn } from '@storybook/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import { useTheme } from '@twilio-paste/theme';
import * as React from 'react';

import { ChatComposer } from '../src';
import type { ChatComposerProps } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Chat Composer/Customization',
  parameters: {
    a11y: {
      // no need to a11y check customization
      disable: true,
    },
  },
};

const defaultConfig: ChatComposerProps['config'] = {
  namespace: 'foo',
  onError: (error: Error) => {
    throw error;
  },
};

export const Default: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();

  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={currentTheme}
      elements={{
        CHAT_COMPOSER: {
          maxWidth: 'size10',
          backgroundColor: 'colorBackgroundNeutralWeakest',
        },
        CHAT_COMPOSER_PLACEHOLDER_WRAPPER: {
          color: 'colorTextNeutral',
          fontSize: 'fontSize10',
        },
      }}
    >
      <ChatComposer
        ariaLabel="customized chat composer"
        config={defaultConfig}
        testid="foo"
        placeholder="Type here..."
      />
    </CustomizationProvider>
  );
};
