import * as React from 'react';
import {CustomizationProvider} from '@twilio-paste/customization';
import {useTheme} from '@twilio-paste/theme';
import type {Story} from '@storybook/react';

import {ChatComposer} from '../src';
import type {ChatComposerProps} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Chat Composer/Customization',
};

const defaultConfig: ChatComposerProps['config'] = {
  namespace: 'foo',
  onError: (error: Error) => {
    throw error;
  },
};

export const Default: Story = (_args, {parameters: {isTestEnvironment}}) => {
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
