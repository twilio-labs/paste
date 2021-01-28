import * as React from 'react';
import {withKnobs, text, select} from '@storybook/addon-knobs';
import type {HeadingProps} from '@twilio-paste/heading';
import {Stack} from '@twilio-paste/stack';
import {Paragraph} from '@twilio-paste/paragraph';
import {Disclosure, DisclosureContent, DisclosureHeading, useDisclosureState} from '../src';
import type {DisclosureHeadingProps, DisclosureInitialState, DisclosureStateReturn, DisclosureVariants} from '../src';

const headingVariantOptions = ['heading10', 'heading20', 'heading30', 'heading40', 'heading50', 'heading60'];

export const ExampleDisclosures: React.FC<{
  disabled?: boolean;
  variant?: DisclosureVariants;
  headingVariant: DisclosureHeadingProps['variant'];
}> = (props) => {
  return (
    <Stack orientation="vertical" spacing="space70">
      <Disclosure visible variant={props.variant}>
        <DisclosureHeading as="h2" disabled={props.disabled} variant={props.headingVariant}>
          Heading variant {props.headingVariant}
        </DisclosureHeading>
        <DisclosureContent>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus
          commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a
          pharetra augue.
        </DisclosureContent>
      </Disclosure>
      <Disclosure variant={props.variant}>
        <DisclosureHeading as="h2" disabled={props.disabled} variant={props.headingVariant}>
          Heading variant {props.headingVariant}
        </DisclosureHeading>
        <DisclosureContent>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus
          commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a
          pharetra augue.
        </DisclosureContent>
      </Disclosure>
    </Stack>
  );
};

interface UseDelayedDisclosureStateProps extends DisclosureInitialState {
  delay: number;
}
const useDelayedDisclosureState = ({delay, ...initialState}: UseDelayedDisclosureStateProps): DisclosureStateReturn => {
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

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Disclosure',
  decorators: [withKnobs],
  excludeStories: ['ExampleDisclosures'],
  component: Disclosure,
  subcomponents: {DisclosureHeading, DisclosureContent},
};

export const AllVariants = (): React.ReactNode => {
  const asOptions = text('as', 'h2') as HeadingProps['as'];
  const headingVariantValue = select('heading variant', headingVariantOptions, 'heading10') as HeadingProps['variant'];
  const variantOptions = select('disclosure variant', ['default', 'contained'], 'default');
  return (
    <Disclosure variant={variantOptions}>
      <DisclosureHeading as={asOptions} variant={headingVariantValue}>
        Disclosure trigger as heading
      </DisclosureHeading>
      <DisclosureContent>Disclosure content</DisclosureContent>
    </Disclosure>
  );
};

AllVariants.story = {
  name: 'All variants',
};

export const HeadingVariant10 = (): React.ReactNode => {
  return <ExampleDisclosures headingVariant="heading10" />;
};

HeadingVariant10.story = {
  name: 'Heading variant 10',
};

export const HeadingVariant20 = (): React.ReactNode => {
  return <ExampleDisclosures headingVariant="heading20" />;
};

HeadingVariant20.story = {
  name: 'Heading variant 20',
};

export const HeadingVariant30 = (): React.ReactNode => {
  return <ExampleDisclosures headingVariant="heading30" />;
};

HeadingVariant30.story = {
  name: 'Heading variant 30',
};

export const HeadingVariant40 = (): React.ReactNode => {
  return <ExampleDisclosures headingVariant="heading40" />;
};

HeadingVariant40.story = {
  name: 'Heading variant 40',
};

export const HeadingVariant50 = (): React.ReactNode => {
  return <ExampleDisclosures headingVariant="heading50" />;
};

HeadingVariant50.story = {
  name: 'Heading variant 50',
};

export const HeadingVariant60 = (): React.ReactNode => {
  return <ExampleDisclosures headingVariant="heading60" />;
};

HeadingVariant60.story = {
  name: 'Heading variant 60',
};

export const Disabled = (): React.ReactNode => {
  return <ExampleDisclosures disabled headingVariant="heading10" />;
};

export const MultilineHeading = (): React.ReactNode => {
  return (
    <Stack orientation="vertical" spacing="space70">
      <Disclosure visible>
        <DisclosureHeading as="h2" variant="heading20">
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam.
          <br />
          Ut fermentum massa justo sit amet risus.
        </DisclosureHeading>
        <DisclosureContent>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus
          commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a
          pharetra augue.
        </DisclosureContent>
      </Disclosure>
      <Disclosure>
        <DisclosureHeading as="h2" variant="heading20">
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam.
          <br />
          Ut fermentum massa justo sit amet risus.
        </DisclosureHeading>
        <DisclosureContent>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus
          commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a
          pharetra augue.
        </DisclosureContent>
      </Disclosure>
    </Stack>
  );
};

MultilineHeading.story = {
  name: 'Multiline heading',
};

export const ContainedHeadingVariant10 = (): React.ReactNode => {
  return <ExampleDisclosures headingVariant="heading10" variant="contained" />;
};

ContainedHeadingVariant10.story = {
  name: 'Contained Heading variant 10',
};

export const ContainedHeadingVariant20 = (): React.ReactNode => {
  return <ExampleDisclosures headingVariant="heading20" variant="contained" />;
};

ContainedHeadingVariant20.story = {
  name: 'Contained Heading variant 20',
};

export const ContainedHeadingVariant30 = (): React.ReactNode => {
  return <ExampleDisclosures headingVariant="heading30" variant="contained" />;
};

ContainedHeadingVariant30.story = {
  name: 'Contained Heading variant 30',
};

export const ContainedHeadingVariant40 = (): React.ReactNode => {
  return <ExampleDisclosures headingVariant="heading40" variant="contained" />;
};

ContainedHeadingVariant40.story = {
  name: 'Contained Heading variant 40',
};

export const ContainedHeadingVariant50 = (): React.ReactNode => {
  return <ExampleDisclosures headingVariant="heading50" variant="contained" />;
};

ContainedHeadingVariant50.story = {
  name: 'Contained Heading variant 50',
};

export const ContainedHeadingVariant60 = (): React.ReactNode => {
  return <ExampleDisclosures headingVariant="heading60" variant="contained" />;
};

ContainedHeadingVariant60.story = {
  name: 'Contained Heading variant 60',
};

export const ContainedDisabled = (): React.ReactNode => {
  return <ExampleDisclosures disabled headingVariant="heading10" variant="contained" />;
};

ContainedDisabled.story = {
  name: 'Contained disabled',
};

export const ContainedMultilineHeading = (): React.ReactNode => {
  return (
    <Stack orientation="vertical" spacing="space70">
      <Disclosure visible variant="contained">
        <DisclosureHeading as="h2" variant="heading20">
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam.
          <br />
          Ut fermentum massa justo sit amet risus.
        </DisclosureHeading>
        <DisclosureContent>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus
          commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a
          pharetra augue.
        </DisclosureContent>
      </Disclosure>
      <Disclosure variant="contained">
        <DisclosureHeading as="h2" variant="heading20">
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam.
          <br />
          Ut fermentum massa justo sit amet risus.
        </DisclosureHeading>
        <DisclosureContent>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus
          commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a
          pharetra augue.
        </DisclosureContent>
      </Disclosure>
    </Stack>
  );
};

ContainedMultilineHeading.story = {
  name: 'Contained multiline heading',
};

export const StateHook = (): React.ReactNode => {
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
        <DisclosureContent>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus
          commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a
          pharetra augue.
        </DisclosureContent>
      </Disclosure>
    </>
  );
};

StateHook.story = {
  name: 'State hook',
};
