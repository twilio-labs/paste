import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, select} from '@storybook/addon-knobs';
import {HeadingProps} from '@twilio-paste/heading';
import {Stack} from '@twilio-paste/stack';
import {Disclosure, DisclosureHeading, DisclosureContent, Variants, DisclosureHeadingProps} from '../src';

const headingVariantOptions = ['heading10', 'heading20', 'heading30', 'heading40', 'heading50', 'heading60'];

export const ExampleDisclosures: React.FC<{
  disabled?: boolean;
  variant?: Variants;
  headingVariant: DisclosureHeadingProps['variant'];
}> = props => {
  return (
    <Stack orientation="vertical" spacing="space70">
      <Disclosure visible variant={props.variant}>
        <DisclosureHeading as="h2" disabled={props.disabled} variant={props.headingVariant}>
          Heading variant {props.headingVariant}
        </DisclosureHeading>
        <DisclosureContent>Disclosure content</DisclosureContent>
      </Disclosure>
      <Disclosure variant={props.variant}>
        <DisclosureHeading as="h2" disabled={props.disabled} variant={props.headingVariant}>
          Heading variant {props.headingVariant}
        </DisclosureHeading>
        <DisclosureContent>Disclosure content</DisclosureContent>
      </Disclosure>
    </Stack>
  );
};

storiesOf('Components|Disclosure', module)
  .addDecorator(withKnobs)
  .add('All variants', () => {
    const asOptions = text('as', 'h2') as HeadingProps['as'];
    const headingVariantValue = select(
      'heading variant',
      headingVariantOptions,
      'heading10'
    ) as HeadingProps['variant'];
    const variantOptions = select('disclosure variant', ['default', 'contained'], 'default');
    return (
      <Disclosure variant={variantOptions}>
        <DisclosureHeading as={asOptions} variant={headingVariantValue}>
          Disclosure trigger as heading
        </DisclosureHeading>
        <DisclosureContent>Disclosure content</DisclosureContent>
      </Disclosure>
    );
  })
  .add('Heading variant 10', () => {
    return <ExampleDisclosures headingVariant="heading10" />;
  })
  .add('Heading variant 20', () => {
    return <ExampleDisclosures headingVariant="heading20" />;
  })
  .add('Heading variant 30', () => {
    return <ExampleDisclosures headingVariant="heading30" />;
  })
  .add('Heading variant 40', () => {
    return <ExampleDisclosures headingVariant="heading40" />;
  })
  .add('Heading variant 50', () => {
    return <ExampleDisclosures headingVariant="heading50" />;
  })
  .add('Heading variant 60', () => {
    return <ExampleDisclosures headingVariant="heading60" />;
  })
  .add('Disabled', () => {
    return <ExampleDisclosures disabled headingVariant="heading10" />;
  })
  .add('Contained Heading variant 10', () => {
    return <ExampleDisclosures headingVariant="heading10" variant="contained" />;
  })
  .add('Contained Heading variant 20', () => {
    return <ExampleDisclosures headingVariant="heading20" variant="contained" />;
  })
  .add('Contained Heading variant 30', () => {
    return <ExampleDisclosures headingVariant="heading30" variant="contained" />;
  })
  .add('Contained Heading variant 40', () => {
    return <ExampleDisclosures headingVariant="heading40" variant="contained" />;
  })
  .add('Contained Heading variant 50', () => {
    return <ExampleDisclosures headingVariant="heading50" variant="contained" />;
  })
  .add('Contained Heading variant 60', () => {
    return <ExampleDisclosures headingVariant="heading60" variant="contained" />;
  })
  .add('Contained disabled', () => {
    return <ExampleDisclosures disabled headingVariant="heading10" variant="contained" />;
  });
