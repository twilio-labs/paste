import * as React from 'react';
import type {IconSizeOptions, TextColorOptions} from '@twilio-paste/style-props';
import {DefaultTheme, useTheme} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Stack} from '@twilio-paste/stack';
import {Text} from '@twilio-paste/text';
import {Flex} from '@twilio-paste/flex';
import {CopyIcon} from '../src/CopyIcon';

const SizeOptions = Object.keys(DefaultTheme.iconSizes) as IconSizeOptions[];
const ColorOptions = Object.keys(DefaultTheme.textColors) as TextColorOptions[];

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Icon',
  component: CopyIcon,
};

export const Default = (): React.ReactNode => {
  const sizeValue = 'sizeIcon30';
  const colorValue = 'currentColor';

  return <CopyIcon size={sizeValue} color={colorValue} title="Icon text" decorative />;
};

Default.story = {
  name: 'default',
};

export const Colors = (): React.ReactNode => {
  return (
    <Stack orientation="horizontal" spacing="space40">
      {ColorOptions.map((color: TextColorOptions) => (
        <CopyIcon color={color} decorative />
      ))}
    </Stack>
  );
};

Colors.story = {
  name: 'colors',
};

export const Sizes = (): React.ReactNode => {
  return (
    <Stack orientation="horizontal" spacing="space40">
      {SizeOptions.map((size: IconSizeOptions) => (
        <CopyIcon size={size} decorative />
      ))}
    </Stack>
  );
};

Sizes.story = {
  name: 'sizes',
};

export const Alignment = (): React.ReactNode => {
  return (
    <Stack orientation="vertical" spacing="space40">
      <Text as="div" fontSize="fontSize30">
        <Flex vAlignContent="center">
          <CopyIcon decorative /> Some text to align to
        </Flex>
      </Text>
      <Text as="div" fontSize="fontSize80" lineHeight="lineHeight80">
        <Flex vAlignContent="center">
          <CopyIcon decorative /> Some text to align to
        </Flex>
      </Text>
      <Text as="div" fontSize="fontSize110" lineHeight="lineHeight110">
        <Flex vAlignContent="center">
          <CopyIcon decorative /> Some text to align to
        </Flex>
      </Text>
    </Stack>
  );
};

Alignment.story = {
  name: 'alignment',
};

export const CustomizedIcon: React.FC = () => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider
      baseTheme="default"
      theme={currentTheme}
      elements={{
        ICON: {borderRadius: 'borderRadius20', backgroundColor: 'colorBackgroundSuccess'},
        CUSTOM_ICON: {borderRadius: 'borderRadius20', backgroundColor: 'colorBackgroundDestructive'},
      }}
    >
      <Stack orientation="vertical" spacing="space40">
        <CopyIcon color="colorTextWeakest" decorative />
        <CopyIcon color="colorTextWeakest" element="CUSTOM_ICON" decorative />
      </Stack>
    </CustomizationProvider>
  );
};
