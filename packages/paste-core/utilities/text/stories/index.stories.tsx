import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, select} from '@storybook/addon-knobs';
import {DefaultTheme, ThemeShape} from '@paste/theme-tokens';
import {ResponsiveValue} from 'styled-system';
import * as CSS from 'csstype';
import {Text} from '../src';

const fontSizeOptions = Object.keys(DefaultTheme.fontSizes);
const fontFamilyOptions = Object.keys(DefaultTheme.fonts);
const lineHeightOptions = Object.keys(DefaultTheme.lineHeights);
const textColorOptions = Object.keys(DefaultTheme.textColors);
const fontWeightOptions = Object.keys(DefaultTheme.fontWeights);

storiesOf('Utilities|Text', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const fontFamilyValue = select('fontFamily', fontFamilyOptions, 'fontFamilyText') as keyof ThemeShape['fonts'];
    const fontSizeValue = select('fontSize', fontSizeOptions, 'fontSize30') as keyof ThemeShape['fontSizes'];
    const fontWeightValue = select(
      'fontWeight',
      fontWeightOptions,
      'fontWeightNormal'
    ) as keyof ThemeShape['fontWeights'];
    const lineHeightValue = select('lineHeight', lineHeightOptions, 'lineHeight20') as keyof ThemeShape['lineHeights'];
    const textAlignValue = text('textAlign', '') as ResponsiveValue<CSS.TextAlignProperty>;
    const textColorValue = select('textColor', textColorOptions, 'colorText') as keyof ThemeShape['textColors'];
    return (
      <Text
        fontFamily={fontFamilyValue}
        fontSize={fontSizeValue}
        fontWeight={fontWeightValue}
        lineHeight={lineHeightValue}
        textAlign={textAlignValue}
        textColor={textColorValue}
        as={text('as', 'p')}
      >
        Some text
      </Text>
    );
  });
