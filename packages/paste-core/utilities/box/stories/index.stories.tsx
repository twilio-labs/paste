import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select} from '@storybook/addon-knobs';
import {DefaultTheme, ThemeShape} from '@paste/theme-tokens';
import {Text} from '@paste/text';
import {Box} from '../src';

const backgroundColorOptions = Object.keys(DefaultTheme.backgroundColors);
const borderTypeOptions = Object.keys(DefaultTheme.borderTypes);
const spaceOptions = Object.keys(DefaultTheme.space);
const borderRadiusOptions = Object.keys(DefaultTheme.radii);
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
    const borderTypeValue = select('borderType', borderTypeOptions, '') as keyof ThemeShape['borderTypes'];
    const borderRadiusValue = select('borderRadius', borderRadiusOptions, '') as keyof ThemeShape['radii'];
    const borderWidthValue = select('borderWidth', borderWidthOptions, '') as keyof ThemeShape['borderWidths'];
    const paddingValue = select('padding', spaceOptions, '');
    const marginValue = select('margin', spaceOptions, '');
    return (
      <Box
        borderRadius={borderRadiusValue}
        backgroundColor={backgroudColorValue}
        borderType={borderTypeValue}
        borderWidth={borderWidthValue}
        margin={marginValue}
        padding={paddingValue}
      >
        <Text>{demoString}</Text>
      </Box>
    );
  });
