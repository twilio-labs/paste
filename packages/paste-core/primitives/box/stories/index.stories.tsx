import * as React from 'react';
import {withKnobs, select, text} from '@storybook/addon-knobs';
import {DefaultTheme, ThemeShape} from '@twilio-paste/theme';
import {Text} from '@twilio-paste/text';
import {Box} from '../src';

const backgroundColorOptions = Object.keys(DefaultTheme.backgroundColors);
const spaceOptions = Object.keys(DefaultTheme.space);
const widthOptions = Object.keys(DefaultTheme.widths);
const minWidthOptions = Object.keys(DefaultTheme.minWidths);
const maxWidthOptions = Object.keys(DefaultTheme.maxWidths);
const heightOptions = Object.keys(DefaultTheme.heights);
const minHeightOptions = Object.keys(DefaultTheme.minHeights);
const maxHeightOptions = Object.keys(DefaultTheme.maxHeights);
const borderRadiusOptions = Object.keys(DefaultTheme.radii);
const borderColorOptions = Object.keys(DefaultTheme.borderColors);
const borderWidthOptions = Object.keys(DefaultTheme.borderWidths);
const boxShadowOptions = Object.keys(DefaultTheme.shadows);
const zIndexOptions = Object.keys(DefaultTheme.zIndices);

const demoString = `I'm some text in a box`;

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Primitives/Box',
  decorators: [withKnobs],
  component: Box,
};

export const Default = (): React.ReactNode => {
  const backgroudColorValue = select(
    'backgroundColor',
    backgroundColorOptions,
    'colorBackgroundPrimaryWeak'
  ) as keyof ThemeShape['backgroundColors'];

  const borderRadiusValue = select('borderRadius', borderRadiusOptions, 'borderRadius20') as keyof ThemeShape['radii'];
  const borderTopLeftRadiusValue = select('borderTopLeftRadius', borderRadiusOptions, '') as keyof ThemeShape['radii'];
  const borderTopRightRadiusValue = select(
    'borderTopRightRadius',
    borderRadiusOptions,
    ''
  ) as keyof ThemeShape['radii'];
  const borderBottomLeftRadiusValue = select(
    'borderBottomLeftRadius',
    borderRadiusOptions,
    ''
  ) as keyof ThemeShape['radii'];

  const borderBottomRightRadiusValue = select(
    'borderBottomRightRadius',
    borderRadiusOptions,
    ''
  ) as keyof ThemeShape['radii'];

  const borderWidthValue = select('borderWidth', borderWidthOptions, '') as keyof ThemeShape['borderWidths'];
  const borderTopWidthValue = select('borderTopWidth', borderWidthOptions, '') as keyof ThemeShape['borderWidths'];
  const borderRightWidthValue = select('borderRightWidth', borderWidthOptions, '') as keyof ThemeShape['borderWidths'];
  const borderBottomWidthValue = select(
    'borderBottomWidth',
    borderWidthOptions,
    ''
  ) as keyof ThemeShape['borderWidths'];
  const borderLeftWidthValue = select('borderLeftWidth', borderWidthOptions, '') as keyof ThemeShape['borderWidths'];
  const borderColorValue = select(
    'borderColor',
    borderColorOptions,
    'colorBorderPrimaryStrong'
  ) as keyof ThemeShape['borderColors'];
  const borderStyleValue = text('borderStyle', 'solid');

  const paddingValue = select('padding', spaceOptions, 'space20') as keyof ThemeShape['space'];
  const marginValue = select('margin', spaceOptions, 'space40') as keyof ThemeShape['space'];

  const widthValue = select('width', widthOptions, '') as keyof ThemeShape['widths'];
  const minWidthValue = select('minWidth', minWidthOptions, '') as keyof ThemeShape['minWidths'];
  const maxWidthValue = select('maxWidth', maxWidthOptions, '') as keyof ThemeShape['maxWidths'];
  const heightValue = select('height', heightOptions, 'size10') as keyof ThemeShape['heights'];
  const minHeightValue = select('minHeight', minHeightOptions, '') as keyof ThemeShape['minHeights'];
  const maxHeightValue = select('maxHeight', maxHeightOptions, '') as keyof ThemeShape['maxHeights'];

  const boxShadowValue = select('boxShadow', boxShadowOptions, '') as keyof ThemeShape['shadows'];
  const zIndexValue = select('zIndex', zIndexOptions, '') as keyof ThemeShape['zIndices'];
  const displayValue = text('display', 'block');
  const overflowValue = text('overflow', 'hidden');

  return (
    <Box
      backgroundColor={backgroudColorValue}
      borderRadius={borderRadiusValue}
      borderTopLeftRadius={borderTopLeftRadiusValue}
      borderTopRightRadius={borderTopRightRadiusValue}
      borderBottomLeftRadius={borderBottomLeftRadiusValue}
      borderBottomRightRadius={borderBottomRightRadiusValue}
      borderWidth={borderWidthValue}
      borderTopWidth={borderTopWidthValue}
      borderRightWidth={borderRightWidthValue}
      borderBottomWidth={borderBottomWidthValue}
      borderLeftWidth={borderLeftWidthValue}
      borderStyle={borderStyleValue}
      borderColor={borderColorValue}
      width={widthValue}
      minWidth={minWidthValue}
      maxWidth={maxWidthValue}
      height={heightValue}
      minHeight={minHeightValue}
      maxHeight={maxHeightValue}
      margin={marginValue}
      padding={paddingValue}
      boxShadow={boxShadowValue}
      display={displayValue}
      zIndex={zIndexValue}
      overflow={overflowValue}
    >
      <Text as="p" color="colorText">
        {demoString}
      </Text>
    </Box>
  );
};

export const Responsive = (): React.ReactNode => {
  return (
    <Box
      backgroundColor={['colorBackgroundPrimaryWeak', 'colorBackgroundPrimary']}
      padding={['space20', 'space70']}
      height={['size10', 'size20']}
    >
      <Text as="p" color="colorText">
        DO NOTE: width is not currently responsive due to a bug in Styled System v4. To be fixed in an upgrade.
      </Text>
    </Box>
  );
};

export const PseudoClassesWithProps = (): React.ReactNode => {
  return (
    <Box
      backgroundColor="colorBackgroundPrimaryWeak"
      height="size20"
      position="relative"
      _hover={{padding: 'space20', backgroundColor: 'colorBackgroundPrimaryWeaker'}}
      _first={{margin: 'space10'}}
      _before={{content: `"Before text"`, position: 'absolute', bottom: 0, left: 0}}
      _after={{content: `"After text"`, position: 'absolute', bottom: 0, right: 0}}
    >
      <Text as="p" color="colorText">
        Hover this box
      </Text>
    </Box>
  );
};

PseudoClassesWithProps.story = {
  name: 'Pseudo-classes with props',
};
