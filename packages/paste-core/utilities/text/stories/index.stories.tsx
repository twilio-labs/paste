import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, select} from '@storybook/addon-knobs';
import {DefaultTheme, ThemeShape} from '@twilio-paste/theme-tokens';
import {ResponsiveValue} from 'styled-system';
import * as CSS from 'csstype';
import {Text} from '../src';

const fontSizeOptions = Object.keys(DefaultTheme.fontSizes);
const fontFamilyOptions = [''].concat(Object.keys(DefaultTheme.fonts));
const fontWeightOptions = [''].concat(Object.keys(DefaultTheme.fontWeights));
const lineHeightOptions = Object.keys(DefaultTheme.lineHeights);
const spaceOptions = [''].concat(Object.keys(DefaultTheme.space));
const textColorOptions = Object.keys(DefaultTheme.textColors);

storiesOf('Utilities|Text', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const asValue = text('as', 'p') as keyof JSX.IntrinsicElements;
    const displayValue = text('display', '');

    const fontFamilyValue = select('fontFamily', fontFamilyOptions, '') as keyof ThemeShape['fonts'];
    const fontSizeValue = select('fontSize', fontSizeOptions, 'fontSize30') as keyof ThemeShape['fontSizes'];
    const fontStyleValue = text('fontStyle', '') as ResponsiveValue<CSS.FontStyleProperty>;
    const fontWeightValue = select('fontWeight', fontWeightOptions, '') as keyof ThemeShape['fontWeights'];
    const letterSpacingValue = text('letterSpacing', '');
    const lineHeightValue = select('lineHeight', lineHeightOptions, 'lineHeight20') as keyof ThemeShape['lineHeights'];
    const textAlignValue = text('textAlign', '') as ResponsiveValue<CSS.TextAlignProperty>;
    const textColorValue = select('textColor', textColorOptions, 'colorText') as keyof ThemeShape['textColors'];
    const textDecorationValue = text('textDecoration', '') as ResponsiveValue<
      CSS.TextDecorationProperty<CSS.TextDecorationLineProperty>
    >;

    const paddingValue = select('padding', spaceOptions, '') as keyof ThemeShape['space'];
    const paddingBottomValue = select('paddingBottom', spaceOptions, '') as keyof ThemeShape['space'];
    const paddingLeftValue = select('paddingLeft', spaceOptions, '') as keyof ThemeShape['space'];
    const paddingRightValue = select('paddingRight', spaceOptions, '') as keyof ThemeShape['space'];
    const paddingTopValue = select('paddingTop', spaceOptions, '') as keyof ThemeShape['space'];
    const marginValue = select('margin', spaceOptions, '') as keyof ThemeShape['space'];
    const marginBottomValue = select('marginBottom', spaceOptions, '') as keyof ThemeShape['space'];
    const marginLeftValue = select('marginLeft', spaceOptions, '') as keyof ThemeShape['space'];
    const marginRightValue = select('marginRight', spaceOptions, '') as keyof ThemeShape['space'];
    const marginTopValue = select('marginTop', spaceOptions, '') as keyof ThemeShape['space'];
    return (
      <Text
        as={asValue}
        display={displayValue}
        fontFamily={fontFamilyValue}
        fontSize={fontSizeValue}
        fontStyle={fontStyleValue}
        fontWeight={fontWeightValue}
        letterSpacing={letterSpacingValue}
        lineHeight={lineHeightValue}
        margin={marginValue}
        marginBottom={marginBottomValue}
        marginLeft={marginLeftValue}
        marginRight={marginRightValue}
        marginTop={marginTopValue}
        padding={paddingValue}
        paddingBottom={paddingBottomValue}
        paddingLeft={paddingLeftValue}
        paddingRight={paddingRightValue}
        paddingTop={paddingTopValue}
        textAlign={textAlignValue}
        textColor={textColorValue}
        textDecoration={textDecorationValue}
      >
        Some text
      </Text>
    );
  })
  .add('Responsive', () => {
    return (
      <Text
        as="p"
        fontSize={['fontSize40', 'fontSize50', 'fontSize60', 'fontSize70']}
        padding={['space0', 'space10', 'space130', 'space70']}
        textAlign={['center', 'right', 'left']}
        textColor={['colorTextBrandHighlight', 'colorTextLink', 'colorTextSuccess', 'colorText']}
      >
        Some text with responsive styling.
      </Text>
    );
  });
