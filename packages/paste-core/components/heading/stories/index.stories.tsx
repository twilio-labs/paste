import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, select} from '@storybook/addon-knobs';
import {asTags, Heading, HeadingVariants} from '../src';

const headingVariantOptions = ['heading10', 'heading20', 'heading30', 'heading40', 'heading50', 'heading60'];

storiesOf('Components|Heading', module)
  .addDecorator(withKnobs)
  .add('All variants', () => {
    const asOptions = text('as', 'h2') as asTags;
    const headingVariantValue = select('variant', headingVariantOptions, 'heading20') as HeadingVariant;
    return (
      <Heading as={asOptions} variant={headingVariantValue}>
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
  });
