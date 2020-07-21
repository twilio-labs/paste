import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, select} from '@storybook/addon-knobs';
import {HeadingProps} from '@twilio-paste/heading';
import {Stack} from '@twilio-paste/stack';
import {Paragraph} from '@twilio-paste/paragraph';
import {
  Disclosure,
  DisclosureHeading,
  DisclosureContent,
  Variants,
  DisclosureHeadingProps,
  useDisclosureState,
  DisclosureStateReturn,
} from '../src';

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

const useDelayedDisclosureState = ({delay, ...initialState}): DisclosureStateReturn => {
  const disclosure = useDisclosureState(initialState);
  const [transitioning, setTransitioning] = React.useState(false);
  return {
    ...disclosure,
    transitioning,
    toggle: () => {
      setTransitioning(true);
      setTimeout(() => {
        disclosure.toggle();
        setTransitioning(false);
      }, delay);
    },
  };
};

const StateHookExample: React.FC = () => {
  const {transitioning, ...disclosure} = useDelayedDisclosureState({
    delay: 500,
  });
  const clickableHeading = disclosure.visible ? 'Hide with delay' : 'Show with delay';
  return (
    <>
      <Paragraph>This Disclosure should be visible on load, and take 1 second to open and close.</Paragraph>
      <Disclosure variant="contained" state={disclosure}>
        <DisclosureHeading as="h2" variant="heading20">
          {transitioning ? 'Please wait...' : clickableHeading}
        </DisclosureHeading>
        <DisclosureContent>Disclosure content</DisclosureContent>
      </Disclosure>
    </>
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
  })
  .add('State hook', () => {
    return <StateHookExample />;
  });
