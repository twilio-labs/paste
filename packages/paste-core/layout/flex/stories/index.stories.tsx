import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Text} from '@twilio-paste/text';
import {Paragraph} from '@twilio-paste/paragraph';
import {Truncate} from '@twilio-paste/truncate';
import {Flex} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Layout/Flex',
  component: Flex,
};

export const FlexOptions = (): React.ReactNode => {
  return (
    <Box padding="space30" borderStyle="solid">
      <Flex display="flex">
        <Flex grow={0} shrink={1} basis={100}>
          <Box backgroundColor="colorBackgroundBrand" width="100%" minHeight="size10" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
        </Flex>
      </Flex>
    </Box>
  );
};

export const FlexGrow = (): React.ReactNode => {
  return (
    <Box padding="space30" borderStyle="solid">
      <Flex display="flex">
        <Flex grow>
          <Box padding="space30" backgroundColor="colorBackgroundBrand" width="100%" minHeight="size10">
            <Text as="span" color="colorTextInverse">
              I will grow and shrink
            </Text>
          </Box>
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
        </Flex>
      </Flex>
    </Box>
  );
};

export const FlexShrink = (): React.ReactNode => {
  return (
    <Box padding="space30" borderStyle="solid">
      <Flex display="flex">
        <Flex grow shrink={0}>
          <Box padding="space30" backgroundColor="colorBackgroundBrand" width="size40" minHeight="size10">
            <Text as="span" color="colorTextInverse">
              I won&apos;t shrink
            </Text>
          </Box>
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
        </Flex>
      </Flex>
    </Box>
  );
};

export const FlexBasis = (): React.ReactNode => {
  return (
    <Box padding="space30" borderStyle="solid">
      <Flex display="flex">
        <Flex basis={400}>
          <Box padding="space30" backgroundColor="colorBackgroundBrand" width="100%" minHeight="size10">
            <Text as="span" color="colorTextInverse">
              I will always be 400px
            </Text>
          </Box>
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
        </Flex>
      </Flex>
    </Box>
  );
};

export const Row = (): React.ReactNode => {
  return (
    <Box padding="space30" borderStyle="solid">
      <Flex display="flex">
        <Flex>
          <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size10" />
        </Flex>
      </Flex>
    </Box>
  );
};

export const Column = (): React.ReactNode => {
  return (
    <Box padding="space30" borderStyle="solid">
      <Flex display="flex" vertical>
        <Flex>
          <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size10" />
        </Flex>
      </Flex>
    </Box>
  );
};

export const Wrap = (): React.ReactNode => {
  return (
    <Box width="size50" padding="space30" borderStyle="solid">
      <Flex display="flex" wrap>
        <Flex>
          <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size10" />
        </Flex>
      </Flex>
    </Box>
  );
};

export const Nowrap = (): React.ReactNode => {
  return (
    <Box width="size50" padding="space30" borderStyle="solid">
      <Flex display="flex">
        <Flex>
          <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size10" />
        </Flex>
      </Flex>
    </Box>
  );
};

export const VerticalAlignTop = (): React.ReactNode => {
  return (
    <Box padding="space30" borderStyle="solid">
      <Flex display="flex" vAlignContent="top">
        <Flex>
          <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size20" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size30" />
        </Flex>
      </Flex>
    </Box>
  );
};

export const VerticalAlignCenter = (): React.ReactNode => {
  return (
    <Box padding="space30" borderStyle="solid">
      <Flex display="flex" vAlignContent="center">
        <Flex>
          <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size20" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size30" />
        </Flex>
      </Flex>
    </Box>
  );
};

export const VerticalAlignBottom = (): React.ReactNode => {
  return (
    <Box padding="space30" borderStyle="solid">
      <Flex display="flex" vAlignContent="bottom">
        <Flex>
          <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size20" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size30" />
        </Flex>
      </Flex>
    </Box>
  );
};

export const VerticalAlignStretch = (): React.ReactNode => {
  return (
    <Box padding="space30" borderStyle="solid">
      <Flex display="flex" vAlignContent="stretch">
        <Flex>
          <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" height="100%" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size20" height="100%" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size30" height="100%" />
        </Flex>
      </Flex>
    </Box>
  );
};

export const HorizontalAlignLeft = (): React.ReactNode => {
  return (
    <Box padding="space30" borderStyle="solid">
      <Flex display="flex" hAlignContent="left">
        <Flex>
          <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size10" />
        </Flex>
      </Flex>
    </Box>
  );
};

export const HorizontalAlignCenter = (): React.ReactNode => {
  return (
    <Box padding="space30" borderStyle="solid">
      <Flex display="flex" hAlignContent="center">
        <Flex>
          <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size10" />
        </Flex>
      </Flex>
    </Box>
  );
};

export const HorizontalAlignRight = (): React.ReactNode => {
  return (
    <Box padding="space30" borderStyle="solid">
      <Flex display="flex" hAlignContent="right">
        <Flex>
          <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size10" />
        </Flex>
      </Flex>
    </Box>
  );
};

export const HorizontalAlignSpaceAround = (): React.ReactNode => {
  return (
    <Box padding="space30" borderStyle="solid">
      <Flex display="flex" hAlignContent="around">
        <Flex>
          <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size10" />
        </Flex>
      </Flex>
    </Box>
  );
};

export const HorizontalAlignSpaceBetween = (): React.ReactNode => {
  return (
    <Box padding="space30" borderStyle="solid">
      <Flex display="flex" hAlignContent="between">
        <Flex>
          <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size10" />
        </Flex>
      </Flex>
    </Box>
  );
};

export const Responsive = (): React.ReactNode => {
  return (
    <Box padding="space30" borderStyle="solid">
      <Paragraph>Boxes will be vertical on mobile and desktop browser sizes.</Paragraph>
      <Flex display="flex" vertical={[true, false, true]}>
        <Flex>
          <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
        </Flex>
        <Flex>
          <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size10" />
        </Flex>
      </Flex>
    </Box>
  );
};

export const ContainedWidth = (): React.ReactNode => {
  return (
    <Box padding="space30" borderStyle="solid" size="size70">
      <Paragraph>Text should not cause the flex boxes to break out of their containers when too long.</Paragraph>
      <Flex>
        <Flex>
          <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
            http://www.extremelylongurlthatmightbreakthelayout.com
          </Truncate>
        </Flex>
        <Flex>
          <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
            http://www.extremelylongurlthatmightbreakthelayout.com
          </Truncate>
        </Flex>
      </Flex>
    </Box>
  );
};

export const CustomizedFlex = (): React.ReactNode => {
  return (
    <>
      <Paragraph>Default Flex Row</Paragraph>
      <Box padding="space30" borderStyle="solid" marginBottom="space70">
        <Flex display="flex">
          <Flex>
            <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
          </Flex>
          <Flex>
            <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size10" />
          </Flex>
        </Flex>
      </Box>
      <Paragraph>Customized Flex Row</Paragraph>
      <CustomizationProvider baseTheme="default" elements={{FLEX: {backgroundColor: 'colorBackgroundBusy'}}}>
        <Box padding="space30" borderStyle="solid" marginBottom="space70">
          <Flex display="flex">
            <Flex>
              <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
            </Flex>
            <Flex>
              <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
            </Flex>
            <Flex>
              <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size10" />
            </Flex>
          </Flex>
        </Box>
      </CustomizationProvider>
      <Paragraph>Customized Flex Row With Custom Element Attribute</Paragraph>
      <CustomizationProvider baseTheme="default" elements={{MY_FLEX: {backgroundColor: 'colorBackgroundSuccess'}}}>
        <Box padding="space30" borderStyle="solid" marginBottom="space70">
          <Flex display="flex" element="MY_FLEX">
            <Flex>
              <Box backgroundColor="colorBackgroundBrand" minWidth="size20" minHeight="size10" />
            </Flex>
            <Flex>
              <Box backgroundColor="colorBackgroundBrandHighlight" minWidth="size20" minHeight="size10" />
            </Flex>
            <Flex>
              <Box backgroundColor="colorBackgroundPrimary" minWidth="size20" minHeight="size10" />
            </Flex>
          </Flex>
        </Box>
      </CustomizationProvider>
    </>
  );
};

ContainedWidth.story = {
  name: 'Contained width',
};
