import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select, text} from '@storybook/addon-knobs';
import {DefaultTheme, ThemeShape} from '@twilio-paste/theme-tokens';
import {Text} from '@twilio-paste/text';
import {Box} from '../src';

const backgroundColorOptions = Object.keys(DefaultTheme.backgroundColors);
const spaceOptions = Object.keys(DefaultTheme.space);
const borderRadiusOptions = Object.keys(DefaultTheme.radii);
const borderColorOptions = Object.keys(DefaultTheme.borderColors);
const borderWidthOptions = Object.keys(DefaultTheme.borderWidths);

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

    const borderColorValue = select('borderColor', borderColorOptions, '') as keyof ThemeShape['borderColors'];

    const borderStyleValue = text('borderStyle', '');

    const borderWidthValue = select('borderWidth', borderWidthOptions, '') as keyof ThemeShape['borderWidths'];

    const borderBottomWidthValue = select(
      'borderBottomWidth',
      borderWidthOptions,
      ''
    ) as keyof ThemeShape['borderWidths'];

    const borderLeftWidthValue = select('borderLeftWidth', borderWidthOptions, '') as keyof ThemeShape['borderWidths'];

    const borderRightWidthValue = select(
      'borderRightWidth',
      borderWidthOptions,
      ''
    ) as keyof ThemeShape['borderWidths'];

    const borderTopWidthValue = select('borderTopWidth', borderWidthOptions, '') as keyof ThemeShape['borderWidths'];

    const paddingValue = select('padding', spaceOptions, '') as keyof ThemeShape['space'];

    const marginValue = select('margin', spaceOptions, '') as keyof ThemeShape['space'];

    const displayValue = text('display', '');

    return (
      <Box
        backgroundColor={backgroudColorValue}
        borderBottomLeftRadius={borderBottomLeftRadiusValue}
        borderBottomRightRadius={borderBottomRightRadiusValue}
        borderBottomWidth={borderBottomWidthValue}
        borderColor={borderColorValue}
        borderLeftWidth={borderLeftWidthValue}
        borderRadius={borderRadiusValue}
        borderRightWidth={borderRightWidthValue}
        borderStyle={borderStyleValue}
        borderTopLeftRadius={borderTopLeftRadiusValue}
        borderTopRightRadius={borderTopRightRadiusValue}
        borderTopWidth={borderTopWidthValue}
        borderWidth={borderWidthValue}
        display={displayValue}
        margin={marginValue}
        padding={paddingValue}
      >
        <Text>{demoString}</Text>
      </Box>
    );
  });
