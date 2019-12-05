import * as React from 'react';
import * as lodash from 'lodash';
import {ThemeShape} from '@twilio-paste/theme-tokens';
import {Absolute, AbsoluteProps} from '@twilio-paste/absolute';
import {useTheme} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {LineHeight} from '@twilio-paste/types';
import ColorCombos, {ColorCombinationAccessibility} from '../../utils/color-combos';
import colorRating from '../../utils/color-rating';

// Traditional import as the color package isn't exported and typed correctly
const Color = require('color');

type BackgroundColor = Pick<AbsoluteProps, 'backgroundColor'>;
export const ColorBox: React.FC<BackgroundColor> = ({backgroundColor}) => {
  return <Absolute backgroundColor={backgroundColor} padding="space50" preset="fill" />;
};

type BorderBoxProps = Pick<Box, 'borderColor' | 'borderWidth'>;
export const BorderBox: React.FC<BorderBoxProps> = ({borderColor, borderWidth}) => {
  return (
    <Box borderStyle="solid" borderColor={borderColor} borderWidth={borderWidth || 'borderWidth20'} padding="space60" />
  );
};

type TextBoxProp = Pick<Text, 'fontFamily' | 'fontSize' | 'fontWeight'>;
export const TextBox: React.FC<TextBoxProp> = ({fontFamily, fontSize, fontWeight}) => {
  let lineHeight: LineHeight = 'lineHeight70';
  if (fontSize != null && typeof fontSize === 'string') {
    lineHeight = `lineHeight${fontSize.replace('fontSize', '')}` as LineHeight;
  }
  return (
    <Text
      as="p"
      fontFamily={fontFamily}
      fontSize={fontSize || 'fontSize70'}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
    >
      Ag
    </Text>
  );
};

type TextColorBoxProp = Pick<Text, 'textColor'>;
interface TextColorBoxProps extends TextColorBoxProp {
  color: string;
}
export const TextColorBox: React.FC<TextColorBoxProps> = ({color, textColor}) => {
  const theme = useTheme();
  const colorFn = Color(color);
  const isInverse = colorFn.isLight();
  const backgroundColorValue = isInverse
    ? theme.backgroundColors.colorBackgroundInverse
    : theme.backgroundColors.colorBackgroundBody;
  const colorCombos = ColorCombos([color, backgroundColorValue]);
  const {accessibility} = colorCombos[1].combinations[0];

  const getContrastRating = (acc: ColorCombinationAccessibility): string => {
    const rating = colorRating(acc);
    return rating.small;
  };

  return (
    <Absolute
      backgroundColor={isInverse ? 'colorBackgroundInverse' : 'colorBackgroundBody'}
      padding="space60"
      preset="fill"
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Text as="span" fontSize="fontSize70" lineHeight="lineHeight70" textColor={textColor}>
        <ScreenReaderOnly>Example text: </ScreenReaderOnly>Ag
      </Text>
      <Text as="span" fontSize="fontSize50" lineHeight="lineHeight50" textColor={textColor}>
        <ScreenReaderOnly>Accessibility rating: </ScreenReaderOnly>
        {getContrastRating(accessibility)}
      </Text>
    </Absolute>
  );
};

type RadiiBoxProps = Pick<Box, 'borderRadius'>;
export const RadiiBox: React.FC<RadiiBoxProps> = ({borderRadius}) => {
  return (
    <Box
      backgroundColor="colorBackgroundBrand"
      borderRadius={borderRadius}
      padding="space60"
      display={borderRadius === 'borderRadiusCircle' ? 'inline-block' : undefined}
    />
  );
};

interface ShadowBoxProps extends Box {
  shadow?: string;
}
export const ShadowBox: React.FC<ShadowBoxProps> = ({shadow}) => {
  return <Box borderRadius="borderRadius20" padding="space60" css={{boxShadow: shadow}} />;
};

type SpacingBoxProps = Pick<Box, 'padding'>;
export const SpacingBox: React.FC<SpacingBoxProps> = ({padding}) => {
  return (
    <Box backgroundColor="colorBackgroundBrand" display="inline-block" paddingLeft={padding} paddingTop={padding} />
  );
};

interface TokenExampleProps {
  children?: React.ReactElement;
  token: {
    name: string;
    value: string;
    comment: string;
    category: string;
  };
}
export const TokenExample: React.FC<TokenExampleProps> = ({token}) => {
  const tokenName = lodash.camelCase(token.name);
  switch (token.category) {
    case 'background-color':
      return <ColorBox backgroundColor={tokenName as keyof ThemeShape['backgroundColors']} />;
    case 'color':
      return <ColorBox backgroundColor={token.value as any} />;
    case 'border-color':
      return <BorderBox borderColor={tokenName as keyof ThemeShape['borderColors']} />;
    case 'border-width':
      return <BorderBox borderWidth={tokenName as keyof ThemeShape['borderWidths']} />;
    case 'font':
      return <TextBox fontFamily={tokenName as keyof ThemeShape['fonts']} />;
    case 'font-size':
      return <TextBox fontSize={tokenName as keyof ThemeShape['fontSizes']} />;
    case 'font-weight':
      return <TextBox fontWeight={tokenName as keyof ThemeShape['fontWeights']} />;
    case 'radius':
      return <RadiiBox borderRadius={tokenName as keyof ThemeShape['radii']} />;
    case 'box-shadow':
      return <ShadowBox shadow={token.value} />;
    case 'spacing':
      return <SpacingBox padding={tokenName as keyof ThemeShape['space']} />;
    case 'text-color':
      return <TextColorBox color={token.value} textColor={tokenName as keyof ThemeShape['textColors']} />;
    default:
      return <Box>{token.value}</Box>;
  }
};
