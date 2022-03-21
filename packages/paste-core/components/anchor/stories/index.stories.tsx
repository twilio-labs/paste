import * as React from 'react';
import {action} from '@storybook/addon-actions';
import {withKnobs, select, text} from '@storybook/addon-knobs';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Heading} from '@twilio-paste/heading';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Anchor} from '../src';
import type {AnchorTargets, AnchorTabIndexes} from '../src/types';

const AnchorTargetOptions = ['_self', '_blank', '_parent', '_top'];
const AnchorTabIndexOptions = [0, -1];

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Anchor',
  decorators: [withKnobs],
  component: Anchor,
};

export const Default = (): React.ReactNode => {
  const tabIndexOptions = select('tabIndex', AnchorTabIndexOptions, 0) as AnchorTabIndexes;
  const targetOptions = select('target', AnchorTargetOptions, '_self') as AnchorTargets;
  return (
    <Anchor
      href={text('href', '/app')}
      onBlur={action('handleBlur')}
      onClick={action('handleClick')}
      onFocus={action('handleFocus')}
      rel={text('rel', '')}
      tabIndex={tabIndexOptions}
      target={targetOptions}
    >
      {text('children', 'I am a text link')}
    </Anchor>
  );
};

export const Inverse = (): React.ReactNode => {
  const tabIndexOptions = select('tabIndex', AnchorTabIndexOptions, 0) as AnchorTabIndexes;
  const targetOptions = select('target', AnchorTargetOptions, '_self') as AnchorTargets;
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Anchor
        href={text('href', '/app')}
        onBlur={action('handleBlur')}
        onClick={action('handleClick')}
        onFocus={action('handleFocus')}
        rel={text('rel', '')}
        tabIndex={tabIndexOptions}
        target={targetOptions}
        variant="inverse"
      >
        {text('children', 'I am an inverse text link')}
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

ShowExternalProp.story = {
  name: 'showExternal prop',
};

export const CustomAnchor = (): React.ReactNode => {
  return (
    <CustomizationProvider
      baseTheme="default"
      theme={{
        textColors: {colorTextLink: 'red'},
        fonts: {fontFamilyText: 'cursive'},
      }}
      elements={{
        ANCHOR: {
          color: 'colorTextLink',
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

i18nAnchor.story = {
  name: 'i18n Anchor',
};
