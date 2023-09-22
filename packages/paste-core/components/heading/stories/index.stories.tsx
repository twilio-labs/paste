import type { StoryFn } from '@storybook/react';
import { Card } from '@twilio-paste/card';
import { CustomizationProvider } from '@twilio-paste/customization';
import { Stack } from '@twilio-paste/stack';
import { useTheme } from '@twilio-paste/theme';
import * as React from 'react';

import { Heading } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Heading',
  component: Heading,
};

export const Heading10 = (): React.ReactNode => {
  return (
    <Heading as="h1" variant="heading10">
      I am a Very Large Heading
    </Heading>
  );
};

Heading10.storyName = 'heading10';

export const Heading20 = (): React.ReactNode => {
  return (
    <Heading as="h1" variant="heading20">
      I am a Very Large Heading
    </Heading>
  );
};

Heading20.storyName = 'heading20';

export const Heading30 = (): React.ReactNode => {
  return (
    <Heading as="h1" variant="heading30">
      I am a Very Large Heading
    </Heading>
  );
};

Heading30.storyName = 'heading30';

export const Heading40 = (): React.ReactNode => {
  return (
    <Heading as="h1" variant="heading40">
      I am a Very Large Heading
    </Heading>
  );
};

Heading40.storyName = 'heading40';

export const Heading50 = (): React.ReactNode => {
  return (
    <Heading as="h1" variant="heading50">
      I am a Very Large Heading
    </Heading>
  );
};

Heading50.storyName = 'heading50';

export const Heading60 = (): React.ReactNode => {
  return (
    <Heading as="h1" variant="heading60">
      I am a Very Large Heading
    </Heading>
  );
};

Heading60.storyName = 'heading60';

export const Heading10NoMargin = (): React.ReactNode => {
  return (
    <Card>
      <Heading as="h1" marginBottom="space0" variant="heading10">
        I am a Very Large Heading
      </Heading>
    </Card>
  );
};

Heading10NoMargin.storyName = 'heading10 no margin';

export const Heading20NoMargin = (): React.ReactNode => {
  return (
    <Card>
      <Heading as="h1" marginBottom="space0" variant="heading20">
        I am a Very Large Heading
      </Heading>
    </Card>
  );
};

Heading20NoMargin.storyName = 'heading20 no margin';

export const Heading30NoMargin = (): React.ReactNode => {
  return (
    <Card>
      <Heading as="h1" marginBottom="space0" variant="heading30">
        I am a Very Large Heading
      </Heading>
    </Card>
  );
};

Heading30NoMargin.storyName = 'heading30 no margin';

export const Heading40NoMargin = (): React.ReactNode => {
  return (
    <Card>
      <Heading as="h1" marginBottom="space0" variant="heading40">
        I am a Very Large Heading
      </Heading>
    </Card>
  );
};

Heading40NoMargin.storyName = 'heading40 no margin';

export const Heading50NoMargin = (): React.ReactNode => {
  return (
    <Card>
      <Heading as="h1" marginBottom="space0" variant="heading50">
        I am a Very Large Heading
      </Heading>
    </Card>
  );
};

Heading50NoMargin.storyName = 'heading50 no margin';

export const Heading60NoMargin = (): React.ReactNode => {
  return (
    <Card>
      <Heading as="h1" marginBottom="space0" variant="heading60">
        I am a Very Large Heading
      </Heading>
    </Card>
  );
};

Heading60NoMargin.storyName = 'heading60 no margin';

export const CustomHeading: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();
  return (
    <Stack orientation="vertical" spacing="space60">
      <Heading as="h1" variant="heading10">
        Default heading
      </Heading>
      <CustomizationProvider
        disableAnimations={isTestEnvironment}
        theme={currentTheme}
        elements={{
          HEADING: {
            backgroundColor: 'colorBackgroundPrimaryWeaker',
            color: 'colorTextError',
            padding: 'space40',
            textDecoration: 'underline',
            variants: {
              heading10: {
                color: 'colorTextError',
              },
              heading20: {
                color: 'colorTextLink',
                textDecoration: 'none',
              },
            },
          },
        }}
      >
        <Heading as="h1" variant="heading10">
          Customized heading
        </Heading>
        <Heading as="h2" variant="heading20">
          Customized heading variant
        </Heading>
      </CustomizationProvider>
      <CustomizationProvider
        disableAnimations={isTestEnvironment}
        theme={currentTheme}
        elements={{
          NEW_HEADING: {
            backgroundColor: 'colorBackgroundTrial',
            color: 'colorTextLink',
            padding: 'space60',
            variants: {
              heading10: {
                color: 'colorTextLink',
              },
              heading20: {
                color: 'colorTextError',
                textDecoration: 'underline',
              },
            },
          },
        }}
      >
        <Heading as="h1" variant="heading10" element="NEW_HEADING">
          Customized element heading
        </Heading>
        <Heading as="h2" variant="heading20" element="NEW_HEADING">
          Customized element heading variant
        </Heading>
      </CustomizationProvider>
    </Stack>
  );
};
CustomHeading.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
