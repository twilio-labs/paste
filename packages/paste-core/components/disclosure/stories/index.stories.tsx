import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { useTheme } from '@twilio-paste/theme';
import { CustomizationProvider } from '@twilio-paste/customization';
import { Box } from '@twilio-paste/box';
import { Stack } from '@twilio-paste/stack';
import { Truncate } from '@twilio-paste/truncate';
import { Paragraph } from '@twilio-paste/paragraph';
import { ProductInternetOfThingsIcon } from '@twilio-paste/icons/esm/ProductInternetOfThingsIcon';
import { MediaObject, MediaBody, MediaFigure } from '@twilio-paste/media-object';

import { Disclosure, DisclosureContent, DisclosureHeading, useDisclosureState } from '../src';
import type { DisclosureHeadingProps, DisclosureInitialState, DisclosureStateReturn, DisclosureVariants } from '../src';

export const ExampleDisclosures: React.FC<
  React.PropsWithChildren<{
    disabled?: boolean;
    variant?: DisclosureVariants;
    headingVariant: DisclosureHeadingProps['variant'];
  }>
> = (props) => {
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
const useDelayedDisclosureState = ({
  delay,
  ...initialState
}: UseDelayedDisclosureStateProps): DisclosureStateReturn => {
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
  decorators: [],
  excludeStories: ['ExampleDisclosures'],
  component: Disclosure,
  subcomponents: { DisclosureHeading, DisclosureContent },
};

export const HeadingVariant10 = (): React.ReactNode => {
  return <ExampleDisclosures headingVariant="heading10" />;
};

HeadingVariant10.storyName = 'Heading variant 10';

export const HeadingVariant20 = (): React.ReactNode => {
  return <ExampleDisclosures headingVariant="heading20" />;
};

HeadingVariant20.storyName = 'Heading variant 20';

export const HeadingVariant30 = (): React.ReactNode => {
  return <ExampleDisclosures headingVariant="heading30" />;
};

HeadingVariant30.storyName = 'Heading variant 30';

export const HeadingVariant40 = (): React.ReactNode => {
  return <ExampleDisclosures headingVariant="heading40" />;
};

HeadingVariant40.storyName = 'Heading variant 40';

export const HeadingVariant50 = (): React.ReactNode => {
  return <ExampleDisclosures headingVariant="heading50" />;
};

HeadingVariant50.storyName = 'Heading variant 50';

export const HeadingVariant60 = (): React.ReactNode => {
  return <ExampleDisclosures headingVariant="heading60" />;
};

HeadingVariant60.storyName = 'Heading variant 60';

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

MultilineHeading.storyName = 'Multiline heading';

export const TruncatedHeader = (): React.ReactNode => {
  return (
    <Box width="size40">
      <Disclosure variant="contained">
        <DisclosureHeading as="h3" variant="heading30">
          <Truncate title="This is a really long header with truncation">
            This is a really long header with truncation
          </Truncate>
        </DisclosureHeading>
        <DisclosureContent>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus
          commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a
          pharetra augue.
        </DisclosureContent>
      </Disclosure>
    </Box>
  );
};

TruncatedHeader.storyName = 'Truncated Header';

export const MediaObjectHeading = (): React.ReactNode => {
  return (
    <Disclosure variant="contained">
      <DisclosureHeading as="h2" variant="heading30">
        <Box width="100%">
          <MediaObject verticalAlign="center">
            <MediaFigure spacing="space10">
              <ProductInternetOfThingsIcon decorative={false} title="phone numbers" size="sizeIcon40" />
            </MediaFigure>
            <MediaBody as="div">
              <Box display="flex" justifyContent="space-between" flexWrap="wrap">
                <Box>Internet of Things</Box>
                <Box>$808</Box>
              </Box>
            </MediaBody>
          </MediaObject>
        </Box>
      </DisclosureHeading>
      <DisclosureContent>It works!</DisclosureContent>
    </Disclosure>
  );
};

MediaObjectHeading.storyName = 'MediaObject in Heading';

export const ContainedHeadingVariant10 = (): React.ReactNode => {
  return <ExampleDisclosures headingVariant="heading10" variant="contained" />;
};

ContainedHeadingVariant10.storyName = 'Contained Heading variant 10';

export const ContainedHeadingVariant20 = (): React.ReactNode => {
  return <ExampleDisclosures headingVariant="heading20" variant="contained" />;
};

ContainedHeadingVariant20.storyName = 'Contained Heading variant 20';

export const ContainedHeadingVariant30 = (): React.ReactNode => {
  return <ExampleDisclosures headingVariant="heading30" variant="contained" />;
};

ContainedHeadingVariant30.storyName = 'Contained Heading variant 30';

export const ContainedHeadingVariant40 = (): React.ReactNode => {
  return <ExampleDisclosures headingVariant="heading40" variant="contained" />;
};

ContainedHeadingVariant40.storyName = 'Contained Heading variant 40';

export const ContainedHeadingVariant50 = (): React.ReactNode => {
  return <ExampleDisclosures headingVariant="heading50" variant="contained" />;
};

ContainedHeadingVariant50.storyName = 'Contained Heading variant 50';

export const ContainedHeadingVariant60 = (): React.ReactNode => {
  return <ExampleDisclosures headingVariant="heading60" variant="contained" />;
};

ContainedHeadingVariant60.storyName = 'Contained Heading variant 60';

export const ContainedDisabled = (): React.ReactNode => {
  return <ExampleDisclosures disabled headingVariant="heading10" variant="contained" />;
};

ContainedDisabled.storyName = 'Contained disabled';

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

ContainedMultilineHeading.storyName = 'Contained multiline heading';

export const StateHook = (): React.ReactNode => {
  const { transitioning, ...disclosure } = useDelayedDisclosureState({
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

StateHook.storyName = 'State hook';

export const Customization: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={currentTheme}
      elements={{
        DISCLOSURE: { padding: 'space30', variants: { contained: { borderColor: 'colorBorderError' } } },
        DISCLOSURE_CONTENT: { color: 'colorTextErrorStrong' },
        DISCLOSURE_HEADING: {
          color: 'colorText',
          backgroundColor: 'colorBackgroundErrorWeakest',
          ':hover': { backgroundColor: 'colorBackgroundErrorWeak' },
        },
        DISCLOSURE_HEADING_ICON: {
          color: 'colorTextIconError',
        },
      }}
    >
      <Stack orientation="vertical" spacing="space70">
        <Disclosure visible>
          <DisclosureHeading as="h2" variant="heading20">
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam.
          </DisclosureHeading>
          <DisclosureContent>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac
            cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae
            elit libero, a pharetra augue.
          </DisclosureContent>
        </Disclosure>
        <Disclosure>
          <DisclosureHeading as="h2" variant="heading20">
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam.
            <br />
            Ut fermentum massa justo sit amet risus.
          </DisclosureHeading>
          <DisclosureContent>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac
            cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae
            elit libero, a pharetra augue.
          </DisclosureContent>
        </Disclosure>
        <Disclosure visible variant="contained">
          <DisclosureHeading as="h2" variant="heading20">
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam.
          </DisclosureHeading>
          <DisclosureContent>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac
            cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae
            elit libero, a pharetra augue.
          </DisclosureContent>
        </Disclosure>
        <Disclosure variant="contained">
          <DisclosureHeading as="h2" variant="heading20">
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam.
            <br />
            Ut fermentum massa justo sit amet risus.
          </DisclosureHeading>
          <DisclosureContent>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac
            cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae
            elit libero, a pharetra augue.
          </DisclosureContent>
        </Disclosure>
      </Stack>
    </CustomizationProvider>
  );
};
Customization.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
