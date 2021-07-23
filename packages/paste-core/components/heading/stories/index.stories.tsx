import * as React from 'react';
import {withKnobs, text, select} from '@storybook/addon-knobs';
import {Card} from '@twilio-paste/card';
import {asTags, Heading, HeadingVariants} from '@twilio-paste/heading';

const headingVariantOptions = ['heading10', 'heading20', 'heading30', 'heading40', 'heading50', 'heading60'];
// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Heading',
  decorators: [withKnobs],
  component: Heading,
};

export const AllVariants = (): React.ReactNode => {
  const asOptions = text('as', 'h2') as asTags;
  const headingVariantValue = select('variant', headingVariantOptions, 'heading20') as HeadingVariants;
  // eslint-disable-next-line unicorn/no-useless-undefined
  const marginBottomValue = select('marginBottom', [undefined, 'space0'], undefined);
  return (
    <Heading as={asOptions} marginBottom={marginBottomValue} variant={headingVariantValue}>
      I am a Very Large Heading
    </Heading>
  );
};

AllVariants.story = {
  name: 'All variants',
};

export const Heading10 = (): React.ReactNode => {
  return (
    <Heading as="h1" variant="heading10">
      I am a Very Large Heading
    </Heading>
  );
};

Heading10.story = {
  name: 'heading10',
};

export const Heading20 = (): React.ReactNode => {
  return (
    <Heading as="h1" variant="heading20">
      I am a Very Large Heading
    </Heading>
  );
};

Heading20.story = {
  name: 'heading20',
};

export const Heading30 = (): React.ReactNode => {
  return (
    <Heading as="h1" variant="heading30">
      I am a Very Large Heading
    </Heading>
  );
};

Heading30.story = {
  name: 'heading30',
};

export const Heading40 = (): React.ReactNode => {
  return (
    <Heading as="h1" variant="heading40">
      I am a Very Large Heading
    </Heading>
  );
};

Heading40.story = {
  name: 'heading40',
};

export const Heading50 = (): React.ReactNode => {
  return (
    <Heading as="h1" variant="heading50">
      I am a Very Large Heading
    </Heading>
  );
};

Heading50.story = {
  name: 'heading50',
};

export const Heading60 = (): React.ReactNode => {
  return (
    <Heading as="h1" variant="heading60">
      I am a Very Large Heading
    </Heading>
  );
};

Heading60.story = {
  name: 'heading60',
};

export const Heading10NoMargin = (): React.ReactNode => {
  return (
    <Card>
      <Heading as="h1" marginBottom="space0" variant="heading10">
        I am a Very Large Heading
      </Heading>
    </Card>
  );
};

Heading10NoMargin.story = {
  name: 'heading10 no margin',
};

export const Heading20NoMargin = (): React.ReactNode => {
  return (
    <Card>
      <Heading as="h1" marginBottom="space0" variant="heading20">
        I am a Very Large Heading
      </Heading>
    </Card>
  );
};

Heading20NoMargin.story = {
  name: 'heading20 no margin',
};

export const Heading30NoMargin = (): React.ReactNode => {
  return (
    <Card>
      <Heading as="h1" marginBottom="space0" variant="heading30">
        I am a Very Large Heading
      </Heading>
    </Card>
  );
};

Heading30NoMargin.story = {
  name: 'heading30 no margin',
};

export const Heading40NoMargin = (): React.ReactNode => {
  return (
    <Card>
      <Heading as="h1" marginBottom="space0" variant="heading40">
        I am a Very Large Heading
      </Heading>
    </Card>
  );
};

Heading40NoMargin.story = {
  name: 'heading40 no margin',
};

export const Heading50NoMargin = (): React.ReactNode => {
  return (
    <Card>
      <Heading as="h1" marginBottom="space0" variant="heading50">
        I am a Very Large Heading
      </Heading>
    </Card>
  );
};

Heading50NoMargin.story = {
  name: 'heading50 no margin',
};

export const Heading60NoMargin = (): React.ReactNode => {
  return (
    <Card>
      <Heading as="h1" marginBottom="space0" variant="heading60">
        I am a Very Large Heading
      </Heading>
    </Card>
  );
};

Heading60NoMargin.story = {
  name: 'heading60 no margin',
};
