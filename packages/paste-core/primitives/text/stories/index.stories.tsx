import * as React from 'react';
import {withKnobs, text, select} from '@storybook/addon-knobs';
import {DefaultTheme} from '@twilio-paste/theme';
import {
  Display,
  FontFamily,
  FontSize,
  FontStyle,
  FontWeight,
  LetterSpacing,
  LineHeight,
  TextAlign,
  TextColor,
  TextDecoration,
  Overflow,
  OverflowX,
  OverflowY,
  TextOverflow,
  WhiteSpace,
  Padding,
  Margin,
} from '@twilio-paste/style-props';
import {Text} from '../src';

const fontSizeOptions = Object.keys(DefaultTheme.fontSizes);
const fontFamilyOptions = [''].concat(Object.keys(DefaultTheme.fonts));
const fontWeightOptions = [''].concat(Object.keys(DefaultTheme.fontWeights));
const lineHeightOptions = Object.keys(DefaultTheme.lineHeights);
const spaceOptions = [''].concat(Object.keys(DefaultTheme.space));
const textColorOptions = Object.keys(DefaultTheme.textColors);

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Primitives/Text',
  decorators: [withKnobs],
  component: Text,
};

export const Default = (): React.ReactNode => {
  const asValue = text('as', 'p') as keyof JSX.IntrinsicElements;
  const displayValue = text('display', '') as Display;

  const fontFamilyValue = select('fontFamily', fontFamilyOptions, '') as FontFamily;
  const fontSizeValue = select('fontSize', fontSizeOptions, 'fontSize30') as FontSize;
  const fontStyleValue = text('fontStyle', '') as FontStyle;
  const fontWeightValue = select('fontWeight', fontWeightOptions, '') as FontWeight;
  const letterSpacingValue = text('letterSpacing', '') as LetterSpacing;
  const lineHeightValue = select('lineHeight', lineHeightOptions, 'lineHeight30') as LineHeight;
  const textAlignValue = text('textAlign', '') as TextAlign;
  const textColorValue = select('color', textColorOptions, 'colorText') as TextColor;
  const textDecorationValue = text('textDecoration', '') as TextDecoration;

  const overflowValue = text('overflow', '') as Overflow;
  const overflowXValue = text('overflowX', '') as OverflowX;
  const overflowYValue = text('overflowY', '') as OverflowY;
  const textOverflowValue = text('textOverflow', '') as TextOverflow;
  const whitespaceValue = text('whitespace', '') as WhiteSpace;

  const paddingValue = select('padding', spaceOptions, '') as Padding;
  const paddingBottomValue = select('paddingBottom', spaceOptions, '') as Padding;
  const paddingLeftValue = select('paddingLeft', spaceOptions, '') as Padding;
  const paddingRightValue = select('paddingRight', spaceOptions, '') as Padding;
  const paddingTopValue = select('paddingTop', spaceOptions, '') as Padding;
  const marginValue = select('margin', spaceOptions, '') as Margin;
  const marginBottomValue = select('marginBottom', spaceOptions, '') as Margin;
  const marginLeftValue = select('marginLeft', spaceOptions, '') as Margin;
  const marginRightValue = select('marginRight', spaceOptions, '') as Margin;
  const marginTopValue = select('marginTop', spaceOptions, '') as Margin;
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
      overflow={overflowValue}
      overflowX={overflowXValue}
      overflowY={overflowYValue}
      padding={paddingValue}
      paddingBottom={paddingBottomValue}
      paddingLeft={paddingLeftValue}
      paddingRight={paddingRightValue}
      paddingTop={paddingTopValue}
      textAlign={textAlignValue}
      color={textColorValue}
      textDecoration={textDecorationValue}
      textOverflow={textOverflowValue}
      whiteSpace={whitespaceValue}
    >
      Some text
    </Text>
  );
};

export const Responsive = (): React.ReactNode => {
  return (
    <Text
      as="p"
      fontSize={['fontSize40', 'fontSize50', 'fontSize60', 'fontSize70']}
      padding={['space0', 'space10', 'space130', 'space70']}
      textAlign={['center', 'right', 'left']}
      color={['colorTextBrandHighlight', 'colorTextLink', 'colorTextSuccess', 'colorText']}
    >
      Some text with responsive styling.
    </Text>
  );
};

export const PseudoClassesWithHoverPseudoProps = (): React.ReactNode => {
  return (
    <Text
      as="p"
      color="colorText"
      _hover={{color: 'colorTextWarningStrong'}}
      _before={{content: `"Before text"`, position: 'absolute', bottom: 0, left: 0, color: 'colorTextErrorStrong'}}
      _after={{content: `"After text"`, position: 'absolute', bottom: 0, right: 0, color: 'colorTextLinkStronger'}}
    >
      Hover this text
    </Text>
  );
};

PseudoClassesWithHoverPseudoProps.story = {
  name: 'Pseudo-classes with hover pseudo props',
};
