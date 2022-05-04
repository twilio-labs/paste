import * as React from 'react';
import type {ThemeShape} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';
import {Card} from '@twilio-paste/card';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import {CustomizationProvider} from '@twilio-paste/customization';
import type {StackOrientation} from '../src';
import {Stack} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Layout/Stack',
  component: Stack,
};

export const DefaultStack = (): React.ReactNode => {
  const orientaionValue = 'vertical' as StackOrientation;
  const spaceValue = 'space40' as keyof ThemeShape['space'];
  return (
    <Stack orientation={orientaionValue} spacing={spaceValue}>
      <Card>
        <Heading as="h2" variant="heading20">
          First Card
        </Heading>
      </Card>
      <Card>
        <Heading as="h2" variant="heading20">
          Second Card
        </Heading>
        <Paragraph>Card content should go here.</Paragraph>
      </Card>
      <Card>
        <Heading as="h2" variant="heading20">
          Third Card
        </Heading>
      </Card>
    </Stack>
  );
};

DefaultStack.story = {
  name: 'Stack',
};

export const StackVertical = (): React.ReactNode => {
  return (
    <Stack orientation="vertical" spacing="space40">
      <Card>
        <Heading as="h2" variant="heading20">
          First Card
        </Heading>
      </Card>
      <Card>
        <Heading as="h2" variant="heading20">
          Second Card
        </Heading>
        <Paragraph>Card content should go here.</Paragraph>
      </Card>
      <Card>
        <Heading as="h2" variant="heading20">
          Third Card
        </Heading>
      </Card>
    </Stack>
  );
};

StackVertical.story = {
  name: 'Stack - Vertical',
};

export const StackHorizontal = (): React.ReactNode => {
  return (
    <Stack orientation="horizontal" spacing="space40">
      <Card>
        <Heading as="h2" variant="heading20">
          First Card
        </Heading>
      </Card>
      <Card>
        <Heading as="h2" variant="heading20">
          Second Card
        </Heading>
        <Paragraph>Card content should go here.</Paragraph>
      </Card>
      <Card>
        <Heading as="h2" variant="heading20">
          Third Card
        </Heading>
      </Card>
    </Stack>
  );
};

StackHorizontal.story = {
  name: 'Stack - Horizontal',
};

export const StackResponsive = (): React.ReactNode => {
  return (
    <Stack orientation={['vertical', 'horizontal', 'vertical']} spacing="space40">
      <Card>
        <Heading as="h2" variant="heading20">
          First Card
        </Heading>
      </Card>
      <Card>
        <Heading as="h2" variant="heading20">
          Second Card
        </Heading>
        <Paragraph>Card content should go here.</Paragraph>
      </Card>
      <Card>
        <Heading as="h2" variant="heading20">
          Third Card
        </Heading>
      </Card>
    </Stack>
  );
};

StackResponsive.story = {
  name: 'Stack - Responsive',
};

export const OneChild = (): React.ReactNode => {
  return (
    <Box display="inline-block" padding="space20" backgroundColor="colorBackgroundPrimary">
      <Stack orientation="horizontal" spacing="space60">
        {null}
        <Card>
          <Heading as="h2" variant="heading20">
            First Card
          </Heading>
        </Card>
        {null}
      </Stack>
    </Box>
  );
};

OneChild.story = {
  name: 'Stack - One Child',
};

export const CustomizedStack = (): React.ReactNode => {
  return (
    <>
      <Stack orientation="vertical" spacing="space40">
        <Card>
          <Heading as="h2" variant="heading20">
            First Card
          </Heading>
        </Card>

        <Card>
          <Heading as="h2" variant="heading20">
            Second Card
          </Heading>
        </Card>
      </Stack>

      <CustomizationProvider
        baseTheme="default"
        elements={{
          STACK: {
            backgroundColor: 'colorBackground',
            padding: 'space40',
            color: 'colorTextWarning',
          },
          STACK_CHILD: {
            flex: 1,
          },
          STACKY: {
            padding: 'space40',
          },
          STACKY_CHILD: {
            fontWeight: 'fontWeightBold',
          },
        }}
      >
        {/* Default Customized Stack */}
        <Stack orientation={['vertical', 'vertical', 'horizontal']} spacing="space40">
          <Card>
            <Heading as="h2" variant="heading20">
              First Card
            </Heading>

            <p>Customized Card content.</p>
          </Card>

          <Card>
            <Heading as="h2" variant="heading20">
              Second Card
            </Heading>

            <p>Customized Card content.</p>
          </Card>
        </Stack>

        {/* Custom Named Stack */}
        <Stack orientation="vertical" spacing="space40" element="STACKY">
          <Card>
            <Heading as="h2" variant="heading20">
              First Card
            </Heading>

            <p>Customized Card content.</p>
          </Card>

          <Card>
            <Heading as="h2" variant="heading20">
              Second Card
            </Heading>

            <p>Customized Card content.</p>
          </Card>
        </Stack>
      </CustomizationProvider>
    </>
  );
};

CustomizedStack.story = {
  name: 'Stack - Customized',
};
