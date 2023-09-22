import type { StoryFn } from '@storybook/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import { Separator } from '@twilio-paste/separator';
import type {
  Display,
  FontFamily,
  FontSize,
  FontStyle,
  FontWeight,
  LetterSpacing,
  LineHeight,
  Margin,
  Overflow,
  OverflowX,
  OverflowY,
  Padding,
  TextAlign,
  TextColor,
  TextDecoration,
  TextOverflow,
  WhiteSpace,
} from '@twilio-paste/style-props';
import { useTheme } from '@twilio-paste/theme';
import * as React from 'react';

import { CustomizableTextExample } from '../__fixtures__/CustomizableText';
import { Text } from '../src';

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

export const FontFamilies: StoryFn = () => {
  return (
    <>
      <Text as="div">
        `1234567890-=~!@#$%^&*()_+qwertyuiop[]\asdfghjkl;&apos;zxcvbnm,./QWERTYUIOP{}|ASDFGHJKL:&quot;ZXCVBNM
        <>? =`${'>'}` === == != !==</>
      </Text>
      <Text as="div" fontWeight="fontWeightMedium">
        `1234567890-=~!@#$%^&*()_+qwertyuiop[]\asdfghjkl;&apos;zxcvbnm,./QWERTYUIOP{}|ASDFGHJKL:&quot;ZXCVBNM
        <>? =`${'>'}` === == != !==</>
      </Text>
      <Text as="div" fontWeight="fontWeightBold">
        `1234567890-=~!@#$%^&*()_+qwertyuiop[]\asdfghjkl;&apos;zxcvbnm,./QWERTYUIOP{}|ASDFGHJKL:&quot;ZXCVBNM
        <>? =`${'>'}` === == != !==</>
      </Text>
      <Text as="div" fontFamily="fontFamilyCode">
        `1234567890-=~!@#$%^&*()_+qwertyuiop[]\asdfghjkl;&apos;zxcvbnm,./QWERTYUIOP{}|ASDFGHJKL:&quot;ZXCVBNM
        <>? =`${'>'}` === == != !==</>
      </Text>
      <Text as="div" fontFamily="fontFamilyCode" fontWeight="fontWeightMedium">
        `1234567890-=~!@#$%^&*()_+qwertyuiop[]\asdfghjkl;&apos;zxcvbnm,./QWERTYUIOP{}|ASDFGHJKL:&quot;ZXCVBNM
        <>? =`${'>'}` === == != !==</>
      </Text>
      <Text as="div" fontFamily="fontFamilyCode" fontWeight="fontWeightBold">
        `1234567890-=~!@#$%^&*()_+qwertyuiop[]\asdfghjkl;&apos;zxcvbnm,./QWERTYUIOP{}|ASDFGHJKL:&quot;ZXCVBNM
        <>? =`${'>'}` === == != !==</>
      </Text>
    </>
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
      _hover={{ color: 'colorTextWarningStrong' }}
      _before={{ content: `"Before text"`, position: 'absolute', bottom: 0, left: 0, color: 'colorTextErrorStrong' }}
      _after={{ content: `"After text"`, position: 'absolute', bottom: 0, right: 0, color: 'colorTextLinkStronger' }}
    >
      Hover this text
    </Text>
  );
};

PseudoClassesWithHoverPseudoProps.storyName = 'Pseudo-classes with hover pseudo props';

const CustomTextCollection = (): JSX.Element => {
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

export const CustomText: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();
  return (
    <>
      <CustomTextCollection />
      <Separator orientation="horizontal" verticalSpacing="space60" />
      <CustomizationProvider
        disableAnimations={isTestEnvironment}
        theme={currentTheme}
        elements={{
          RECTANGLE: {
            borderRadius: 'borderRadius20',
            variants: {
              primary: {
                backgroundColor: 'colorBackgroundPrimaryWeakest',
                padding: 'space30',
                textDecoration: 'underline',
              },
              secondary: {
                backgroundColor: 'colorBackgroundSuccessWeakest',
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
CustomText.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
