import * as React from 'react';
import type {StoryFn} from '@storybook/react';
import {Box} from '@twilio-paste/box';
import {Card} from '@twilio-paste/card';
import {useTheme, DefaultTheme} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';
import type {IconSize, TextColorOptions} from '@twilio-paste/style-props';

import {Spinner} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Spinner',
  component: Spinner,
};

const {textColors: defaultThemeTextColors, iconSizes} = DefaultTheme;

const textColorTokens = Object.keys(defaultThemeTextColors);
const inverse = textColorTokens.filter((tokenName) => tokenName.toLowerCase().includes('inverse'));
const standard = textColorTokens.filter((tokenName) => !tokenName.toLowerCase().includes('inverse'));

export const Colors = (): React.ReactNode => (
  <Box
    display="flex"
    columnGap="space100"
    rowGap="space100"
    maxWidth="size50"
    flexWrap="wrap"
    backgroundColor="colorBackgroundBody"
    paddingX="space80"
    paddingY="space80"
  >
    {standard.map((color) => (
      <Spinner
        decorative={false}
        size="sizeIcon60"
        title={color}
        color={color as TextColorOptions}
        key={`default-${color}`}
      />
    ))}
  </Box>
);

export const InverseColors = (): React.ReactNode => (
  <Box
    display="flex"
    rowGap="space100"
    maxWidth="size50"
    backgroundColor="colorBackgroundBodyInverse"
    justifyContent="space-between"
    paddingX="space80"
    paddingY="space80"
  >
    {inverse.map((color) => (
      <Spinner
        decorative={false}
        size="sizeIcon60"
        title={color}
        color={color as TextColorOptions}
        key={`default-inverse-${color}`}
      />
    ))}
  </Box>
);

export const Sizes: React.FC = () => (
  <Box display="flex" marginX="space80" paddingY="space80" alignItems="center" justifyContent="space-between">
    {Object.keys(iconSizes).map((iconSize) => (
      <Spinner decorative={false} title={iconSize} size={iconSize as IconSize} key={`dark-${iconSize}`} />
    ))}
  </Box>
);

export const CustomizedSpinner: StoryFn = (_args, {parameters: {isTestEnvironment}}) => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={currentTheme}
      elements={{
        SPINNER: {
          color: 'colorTextIconSuccess',
        },
        CUSTOM_SPINNER_A: {
          size: 'sizeIcon80',
          backgroundColor: 'colorBackgroundBrand',
          color: 'colorTextInverse',
          alignSelf: 'flex-start',
          padding: 'space20',
        },
        CUSTOM_SPINNER_B: {
          size: 'sizeIcon60',
          alignSelf: 'flex-end',
          color: 'colorTextNew',
        },
      }}
    >
      <Box width="50%">
        <Card>
          <Box display="flex" justifyContent="space-between" alignItems="center" padding="space40">
            <Spinner
              data-testid="default-name-customization"
              color="colorText"
              title="Example of a customized spinner with default element name"
              decorative={false}
            />

            {/* Note: color passed here is ignored due to customization rules above */}
            <Spinner
              data-testid="unique-name-customization-a"
              element="CUSTOM_SPINNER_A"
              color="colorText"
              title="Example of a customized spinner with unique element name A"
              decorative={false}
            />

            {/* Note: color passed here is ignored due to customization rules above */}
            <Spinner
              data-testid="unique-name-customization-b"
              element="CUSTOM_SPINNER_B"
              color="colorText"
              title="Example of a customized spinner with unique element name A"
              decorative={false}
            />
          </Box>
        </Card>
      </Box>
    </CustomizationProvider>
  );
};
CustomizedSpinner.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
