import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, select} from '@storybook/addon-knobs';
import {Card} from '@twilio-paste/card';
import {CustomizationProvider} from '@twilio-paste/theme';
import {Stack} from '@twilio-paste/stack';
import {asTags, Heading, HeadingVariants} from '../src';

const headingVariantOptions = ['heading10', 'heading20', 'heading30', 'heading40', 'heading50', 'heading60'];

storiesOf('Components|Heading', module)
  .addDecorator(withKnobs)
  .add('All variants', () => {
    const asOptions = text('as', 'h2') as asTags;
    const headingVariantValue = select('variant', headingVariantOptions, 'heading20') as HeadingVariants;
    const marginBottomValue = select('marginBottom', [null, 'space0'], null);
    return (
      <Heading as={asOptions} marginBottom={marginBottomValue} variant={headingVariantValue}>
        I am a Very Large Heading
      </Heading>
    );
  })
  .add('heading10', () => {
    return (
      <Heading as="h1" variant="heading10">
        I am a Very Large Heading
      </Heading>
    );
  })
  .add('heading20', () => {
    return (
      <Heading as="h1" variant="heading20">
        I am a Very Large Heading
      </Heading>
    );
  })
  .add('heading30', () => {
    return (
      <Heading as="h1" variant="heading30">
        I am a Very Large Heading
      </Heading>
    );
  })
  .add('heading40', () => {
    return (
      <Heading as="h1" variant="heading40">
        I am a Very Large Heading
      </Heading>
    );
  })
  .add('heading50', () => {
    return (
      <Heading as="h1" variant="heading50">
        I am a Very Large Heading
      </Heading>
    );
  })
  .add('heading60', () => {
    return (
      <Heading as="h1" variant="heading60">
        I am a Very Large Heading
      </Heading>
    );
  })
  .add('heading10 no margin', () => {
    return (
      <Card>
        <Heading as="h1" marginBottom="space0" variant="heading10">
          I am a Very Large Heading
        </Heading>
      </Card>
    );
  })
  .add('heading20 no margin', () => {
    return (
      <Card>
        <Heading as="h1" marginBottom="space0" variant="heading20">
          I am a Very Large Heading
        </Heading>
      </Card>
    );
  })
  .add('heading30 no margin', () => {
    return (
      <Card>
        <Heading as="h1" marginBottom="space0" variant="heading30">
          I am a Very Large Heading
        </Heading>
      </Card>
    );
  })
  .add('heading40 no margin', () => {
    return (
      <Card>
        <Heading as="h1" marginBottom="space0" variant="heading40">
          I am a Very Large Heading
        </Heading>
      </Card>
    );
  })
  .add('heading50 no margin', () => {
    return (
      <Card>
        <Heading as="h1" marginBottom="space0" variant="heading50">
          I am a Very Large Heading
        </Heading>
      </Card>
    );
  })
  .add('heading60 no margin', () => {
    return (
      <Card>
        <Heading as="h1" marginBottom="space0" variant="heading60">
          I am a Very Large Heading
        </Heading>
      </Card>
    );
  })
  .add('Customization', () => {
    return (
      <CustomizationProvider
        elements={{
          HEADING: {
            textDecoration: 'underline',
          },
          CUSTOM_HEADING: {
            backgroundColor: 'colorBackgroundError',
          },
        }}
      >
        <Stack orientation="vertical" spacing="space40">
          <Heading as="h2" variant="heading20">
            With a heading
          </Heading>
          <Heading as="h2" variant="heading20" element="CUSTOM_HEADING">
            Custom
          </Heading>
        </Stack>
      </CustomizationProvider>
    );
  });
