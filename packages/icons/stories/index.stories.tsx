import * as React from 'react';
import type {IconSizeOptions, TextColorOptions} from '@twilio-paste/style-props';
import {DefaultTheme, useTheme} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Stack} from '@twilio-paste/stack';
import {Text} from '@twilio-paste/text';
import {Flex} from '@twilio-paste/flex';
import {withKnobs, select, text, boolean} from '@storybook/addon-knobs';
import {CopyIcon} from '../src/CopyIcon';

const ColorOptions = Object.keys(DefaultTheme.textColors) as TextColorOptions[];
const SizeOptions = Object.keys(DefaultTheme.iconSizes) as IconSizeOptions[];

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Icon',
  decorators: [withKnobs],
  component: CopyIcon,
};

export const Default = (): React.ReactNode => {
  const sizeValue = select('size', SizeOptions, 'sizeIcon30');
  const colorValue = select('color', ColorOptions, 'currentColor');

  return (
    <CopyIcon
      size={sizeValue}
      color={colorValue}
      title={text('title', 'Icon text')}
      decorative={boolean('decorative', true)}
    />
  );
};

Default.story = {
  name: 'default',
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
