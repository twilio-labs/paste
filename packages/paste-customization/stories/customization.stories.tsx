import * as React from 'react';
import type {StoryFn} from '@storybook/react';
import {Button} from '@twilio-paste/button';
import {Anchor} from '@twilio-paste/anchor';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import {Stack} from '@twilio-paste/stack';
import {Box} from '@twilio-paste/box';
import {useTheme} from '@twilio-paste/theme';

import {CustomizationProvider} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Theme/Customization',
  component: CustomizationProvider,
};

const ExampleComponents = (): JSX.Element => (
  <Box marginBottom="space70">
    <Stack orientation="horizontal" spacing="space40">
      <Button variant="secondary">Primary</Button>
      <Button variant="destructive">Destructive</Button>
      <Anchor href="#">Anchor links</Anchor>
    </Stack>
  </Box>
);

export const Provider: StoryFn = (_args, {parameters: {isTestEnvironment}}) => {
  const currentTheme = useTheme();
  return (
    <>
      <Heading as="h2" variant="heading30">
        Base theme
      </Heading>
      <ExampleComponents />
      <Heading as="h2" variant="heading30">
        Custom theme
      </Heading>
      <CustomizationProvider
        disableAnimations={isTestEnvironment}
        theme={{
          ...currentTheme,
          backgroundColors: {...currentTheme.backgroundColors, colorBackgroundDestructive: 'darkred'},
          radii: {borderRadius20: '20px'},
          fonts: {fontFamilyText: 'Times'},
        }}
      >
        <ExampleComponents />
      </CustomizationProvider>
      <Heading as="h2" variant="heading30">
        Custom theme 2
      </Heading>
      <CustomizationProvider
        disableAnimations={isTestEnvironment}
        theme={{
          ...currentTheme,
          backgroundColors: {...currentTheme.backgroundColors, colorBackgroundDestructive: 'blue'},
          radii: {borderRadius20: '8px'},
          fonts: {fontFamilyText: 'cursive'},
        }}
        elements={{
          CARD: {
            backgroundColor: 'colorBackground',
            variant: {
              primary: {
                backgroundColor: 'colorBackgroundBody',
              },
            },
          },
        }}
      >
        <ExampleComponents />
      </CustomizationProvider>
    </>
  );
};

Provider.storyName = 'CustomizationProvider';
Provider.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};

export const Embedded: StoryFn = (_args, {parameters: {isTestEnvironment}}) => {
  const currentTheme = useTheme();
  return (
    <>
      <p>Another application styles to contend with.</p>
      <CustomizationProvider
        disableAnimations={isTestEnvironment}
        theme={{
          ...currentTheme,
          fontSizes: {
            fontSize10: '10px',
            fontSize20: '12px',
            fontSize30: '14px',
            fontSize40: '16px',
            fontSize50: '18px',
            fontSize60: '20px',
            fontSize70: '24px',
            fontSize80: '28px',
            fontSize90: '32px',
            fontSize100: '40px',
            fontSize110: '48px',
            fontSizeBase: '62.5%',
            fontSizeDisplay10: '32px',
            fontSizeDisplay20: '48px',
            fontSizeDisplay30: '64px',
          },
          lineHeights: {
            lineHeight0: '0',
            lineHeight05: '12px',
            lineHeight10: '16px',
            lineHeight20: '20px',
            lineHeight30: '20px',
            lineHeight40: '24px',
            lineHeight50: '28px',
            lineHeight60: '28px',
            lineHeight70: '32px',
            lineHeight80: '40px',
            lineHeight90: '44px',
            lineHeight100: '52px',
            lineHeight110: '64px',
            lineHeightDisplay10: '40px',
            lineHeightDisplay20: '60px',
            lineHeightDisplay30: '80px',
          },
          sizes: {
            size0: '0',
            size10: '88px',
            size20: '192px',
            size30: '296px',
            size40: '400px',
            size50: '504px',
            size60: '608px',
            size70: '712px',
            size80: '816px',
            size90: '920px',
            size100: '1024px',
            size110: '1128px',
            size120: '1264px',
            sizeIcon05: '12px',
            sizeIcon10: '16px',
            sizeIcon20: '20px',
            sizeIcon30: '20px',
            sizeIcon40: '24px',
            sizeIcon50: '28px',
            sizeIcon60: '28px',
            sizeIcon70: '32px',
            sizeIcon80: '40px',
            sizeIcon90: '44px',
            sizeIcon100: '52px',
            sizeIcon110: '64px',
            sizeSidebar: '220px',
            sizeSquare0: '0',
            sizeSquare10: '2px',
            sizeSquare20: '4px',
            sizeSquare25: '6px',
            sizeSquare30: '8px',
            sizeSquare40: '12px',
            sizeSquare50: '16px',
            sizeSquare60: '20px',
            sizeSquare70: '24px',
            sizeSquare80: '28px',
            sizeSquare90: '32px',
            sizeSquare100: '36px',
            sizeSquare110: '40px',
            sizeSquare120: '44px',
            sizeSquare130: '48px',
            sizeSquare140: '52px',
            sizeSquare150: '56px',
            sizeSquare160: '60px',
            sizeSquare170: '64px',
            sizeSquare180: '68px',
            sizeSquare190: '72px',
            sizeSquare200: '76px',
          },
          iconSizes: {},
          space: {
            space0: '0',
            space10: '2px',
            space20: '4px',
            space30: '8px',
            space40: '12px',
            space50: '16px',
            space60: '20px',
            space70: '24px',
            space80: '28px',
            space90: '32px',
            space100: '36px',
            space110: '40px',
            space120: '44px',
            space130: '48px',
            space140: '52px',
            space150: '56px',
            space160: '60px',
            space170: '64px',
            space180: '68px',
            space190: '72px',
            space200: '76px',
            spaceNegative10: '-2px',
            spaceNegative20: '-4px',
            spaceNegative30: '-8px',
            spaceNegative40: '-12px',
            spaceNegative50: '-16px',
            spaceNegative60: '-20px',
            spaceNegative70: '-24px',
            spaceNegative80: '-28px',
            spaceNegative90: '-32px',
            spaceNegative100: '-36px',
            spaceNegative110: '-40px',
            spaceNegative120: '-44px',
            spaceNegative130: '-48px',
            spaceNegative140: '-52px',
            spaceNegative150: '-56px',
            spaceNegative160: '-60px',
            spaceNegative170: '-64px',
            spaceNegative180: '-68px',
            spaceNegative190: '-72px',
            spaceNegative200: '-76px',
          },
        }}
      >
        <Heading as="h2" variant="heading30">
          Embedded Paste
        </Heading>
        <Paragraph>
          When embedding Paste into another application, you might need to modify the Base Font Size to match the
          consuming application, and adjust all sizing and spacing values based on a new html base percentage.
        </Paragraph>
        <ExampleComponents />
      </CustomizationProvider>
    </>
  );
};

Embedded.storyName = 'Embedded Paste';
Embedded.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
