import * as React from 'react';
import {Separator} from '@twilio-paste/separator';
import {CustomizationProvider} from '@twilio-paste/customization';
import type {
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
import {CustomizableTextExample} from '../__fixtures__/CustomizableText';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Primitives/Text',
  component: Text,
};

export const Default = (): React.ReactNode => {
  const asValue = 'p' as keyof JSX.IntrinsicElements;
  const displayValue = '' as Display;

  const fontFamilyValue = '' as FontFamily;
  const fontSizeValue = 'fontSize30' as FontSize;
  const fontStyleValue = '' as FontStyle;
  const fontWeightValue = '' as FontWeight;
  const letterSpacingValue = '' as LetterSpacing;
  const lineHeightValue = '' as LineHeight;
  const textAlignValue = '' as TextAlign;
  const textColorValue = 'colorText' as TextColor;
  const textDecorationValue = '' as TextDecoration;

  const overflowValue = '' as Overflow;
  const overflowXValue = '' as OverflowX;
  const overflowYValue = '' as OverflowY;
  const textOverflowValue = '' as TextOverflow;
  const whiteSpaceValue = '' as WhiteSpace;
  const fontVariantNumericValue = '';

  const paddingValue = '' as Padding;
  const paddingBottomValue = '' as Padding;
  const paddingLeftValue = '' as Padding;
  const paddingRightValue = '' as Padding;
  const paddingTopValue = '' as Padding;
  const marginValue = '' as Margin;
  const marginBottomValue = '' as Margin;
  const marginLeftValue = '' as Margin;
  const marginRightValue = '' as Margin;
  const marginTopValue = '' as Margin;
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
      whiteSpace={whiteSpaceValue}
      fontVariantNumeric={fontVariantNumericValue}
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

const CustomTextCollection: React.FC = () => {
  return (
    <>
      <CustomizableTextExample element="RECTANGLE">base</CustomizableTextExample>
      <CustomizableTextExample element="RECTANGLE" variant="secondary">
        secondary
      </CustomizableTextExample>
      <CustomizableTextExample element="RECTANGLE" variant="primary">
        primary
      </CustomizableTextExample>
      <CustomizableTextExample element="SQUARE">base</CustomizableTextExample>
      <CustomizableTextExample element="SQUARE" variant="secondary">
        secondary
      </CustomizableTextExample>
      <CustomizableTextExample element="SQUARE" variant="primary">
        primary
      </CustomizableTextExample>
    </>
  );
};

export const CustomText: React.FC = () => {
  return (
    <>
      <CustomTextCollection />
      <Separator orientation="horizontal" verticalSpacing="space60" />
      <CustomizationProvider
        baseTheme="default"
        elements={{
          RECTANGLE: {
            borderRadius: 'borderRadius20',
            variants: {
              primary: {
                backgroundColor: 'colorBackgroundPrimaryWeaker',
                padding: 'space30',
                textDecoration: 'underline',
              },
              secondary: {
                backgroundColor: 'colorBackgroundSuccess',
                margin: 'space30',
              },
            },
          },
          SQUARE: {
            padding: 'space20',
            ':hover': {
              backgroundColor: 'colorBackgroundSuccess',
              cursor: 'pointer',
            },
            variants: {
              primary: {
                color: 'colorTextNew',
                ':hover': {
                  backgroundColor: 'colorBackgroundWarning',
                },
              },
              secondary: {
                color: 'colorTextWarning',
                ':hover': {
                  backgroundColor: 'colorBackgroundError',
                },
              },
            },
          },
        }}
      >
        <Text as="h2" element="CARD">
          Customized
        </Text>
        <CustomTextCollection />
      </CustomizationProvider>
    </>
  );
};
