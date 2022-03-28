import * as React from 'react';
import {Button} from '@twilio-paste/button';
import {Anchor} from '@twilio-paste/anchor';
import {Heading} from '@twilio-paste/heading';
import {Stack} from '@twilio-paste/stack';
import {Box} from '@twilio-paste/box';
import {CustomizationProvider} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Theme/Customization',
  component: CustomizationProvider,
};

const ExampleComponents: React.FC = () => (
  <Box marginBottom="space70">
    <Stack orientation="horizontal" spacing="space40">
      <Button variant="secondary">Primary</Button>
      <Button variant="destructive">Destructive</Button>
      <Anchor href="#">Anchor links</Anchor>
    </Stack>
  </Box>
);

export const Provider = (): React.ReactNode => {
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
        theme={{
          backgroundColors: {colorBackgroundDestructive: 'darkred'},
          radii: {borderRadius20: '20px'},
          fonts: {fontFamilyText: 'Times'},
          textColors: {colorTextLink: 'hotpink'},
        }}
      >
        <ExampleComponents />
      </CustomizationProvider>
      <Heading as="h2" variant="heading30">
        Custom theme 2
      </Heading>
      <CustomizationProvider
        theme={{
          backgroundColors: {colorBackgroundDestructive: 'blue'},
          radii: {borderRadius20: '8px'},
          fonts: {fontFamilyText: 'cursive'},
          textColors: {colorTextLink: 'green'},
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

Provider.story = {
  name: 'CustomizationProvider',
};
