import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select, text} from '@storybook/addon-knobs';
import {DefaultTheme, ThemeShape} from '@twilio-paste/theme-tokens';
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

const demoString = `I'm some text in a box`;

storiesOf('Utilities|Box', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const backgroudColorValue = select(
      'backgroundColor',
      backgroundColorOptions,
      'colorBackgroundBody'
    ) as keyof ThemeShape['backgroundColors'];

    const borderRadiusValue = select('borderRadius', borderRadiusOptions, '') as keyof ThemeShape['radii'];
    const borderTopLeftRadiusValue = select(
      'borderTopLeftRadius',
      borderRadiusOptions,
      ''
    ) as keyof ThemeShape['radii'];
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
    const borderRightWidthValue = select(
      'borderRightWidth',
      borderWidthOptions,
      ''
    ) as keyof ThemeShape['borderWidths'];
    const borderBottomWidthValue = select(
      'borderBottomWidth',
      borderWidthOptions,
      ''
    ) as keyof ThemeShape['borderWidths'];
    const borderLeftWidthValue = select('borderLeftWidth', borderWidthOptions, '') as keyof ThemeShape['borderWidths'];
    const borderColorValue = select('borderColor', borderColorOptions, '') as keyof ThemeShape['borderColors'];
    const borderStyleValue = text('borderStyle', '');

    const paddingValue = select('padding', spaceOptions, '') as keyof ThemeShape['space'];
    const marginValue = select('margin', spaceOptions, '') as keyof ThemeShape['space'];

    const widthValue = select('width', widthOptions, '') as keyof ThemeShape['widths'];
    const minWidthValue = select('minWidth', minWidthOptions, '') as keyof ThemeShape['minWidths'];
    const maxWidthValue = select('maxWidth', maxWidthOptions, '') as keyof ThemeShape['maxWidths'];
    const heightValue = select('height', heightOptions, '') as keyof ThemeShape['heights'];
    const minHeightValue = select('minHeight', minHeightOptions, '') as keyof ThemeShape['minHeights'];
    const maxHeightValue = select('maxHeight', maxHeightOptions, '') as keyof ThemeShape['maxHeights'];
    
    const boxShadowValue = select('boxShadow', boxShadowOptions, '') as keyof ThemeShape['shadows'];
    const displayValue = text('display', '');

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
      >
        <Text>{demoString}</Text>
      </Box>
    );
  });
