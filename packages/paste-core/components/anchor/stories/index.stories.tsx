import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Box } from '@twilio-paste/box';
import { Stack } from '@twilio-paste/stack';
import { Heading } from '@twilio-paste/heading';
import { CustomizationProvider } from '@twilio-paste/customization';
import { useTheme } from '@twilio-paste/theme';

import { Anchor } from '../src';
import type { AnchorTargets, AnchorTabIndexes } from '../src/types';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Anchor',
  component: Anchor,
};

export const Default = (): React.ReactNode => {
  const tabIndexOptions = 0 as AnchorTabIndexes;
  const targetOptions = '_self' as AnchorTargets;
  return (
    <Anchor
      href="/app"
      onBlur={action('handleBlur')}
      onClick={action('handleClick')}
      onFocus={action('handleFocus')}
      rel=""
      tabIndex={tabIndexOptions}
      target={targetOptions}
    >
      I am a text link
    </Anchor>
  );
};

export const Inverse = (): React.ReactNode => {
  const tabIndexOptions = 0 as AnchorTabIndexes;
  const targetOptions = '_self' as AnchorTargets;
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Anchor
        href="/app"
        onBlur={action('handleBlur')}
        onClick={action('handleClick')}
        onFocus={action('handleFocus')}
        rel=""
        tabIndex={tabIndexOptions}
        target={targetOptions}
        variant="inverse"
      >
        I am an inverse text link
      </Anchor>
    </Box>
  );
};

export const ShowExternalProp = (): React.ReactNode => {
  return (
    <>
      <Anchor href="https://paste.twilio.design" showExternal>
        I&rsquo;m an external link
      </Anchor>
      <Heading as="h2" variant="heading10">
        <Anchor href="https://paste.twilio.design" showExternal>
          I&rsquo;m an external link inside a heading
        </Anchor>
      </Heading>
    </>
  );
};

ShowExternalProp.storyName = 'showExternal prop';

export const CustomAnchor: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={currentTheme}
      elements={{
        ANCHOR: {
          color: 'colorTextError',
          padding: 'space40',
          ':hover': {
            color: 'colorTextLink',
          },
        },
        CUSTOM_ANCHOR: {
          backgroundColor: 'colorBackgroundPrimary',
          color: 'colorTextInverse',
          ':hover': {
            color: 'colorTextInverse',
          },
        },
      }}
    >
      <Stack spacing="space60" orientation="horizontal">
        <Anchor href="#app">customized Anchor styles</Anchor>
        <Anchor element="CUSTOM_ANCHOR" href="#app">
          customized Anchor styles with custom element
        </Anchor>
      </Stack>
    </CustomizationProvider>
  );
};
CustomAnchor.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};

export const i18nAnchor = (): React.ReactNode => {
  return (
    <>
      <Anchor
        href="https://paste.twilio.design"
        showExternal
        i18nExternalLinkLabel="(este enlace redirige a una página externa)"
      >
        Soy enlace externo
      </Anchor>
      <Heading as="h2" variant="heading10">
        <Anchor
          href="https://paste.twilio.design"
          showExternal
          i18nExternalLinkLabel="(este enlace redirige a una página externa)"
        >
          Soy enlace externo en un Heading
        </Anchor>
      </Heading>
    </>
  );
};

i18nAnchor.storyName = 'i18n Anchor';
