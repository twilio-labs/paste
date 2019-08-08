import * as React from 'react';
import * as lodash from 'lodash';
import {ThemeShape} from '@twilio-paste/theme-tokens';
import {Absolute, AbsoluteProps} from '@twilio-paste/absolute';
import {useTheme} from '@twilio-paste/theme';
import {Box, BoxProps} from '@twilio-paste/box';
import {Text, TextProps} from '@twilio-paste/text';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import ColorCombos, {ColorCombinationAccessibility} from '../../utils/color-combos';
import colorRating from '../../utils/color-rating';

// Traditional import as the color package isn't exported and typed correctly
const Color = require('color');

type BackgroundColor = Pick<AbsoluteProps, 'backgroundColor'>;
export const ColorBox: React.FC<BackgroundColor> = ({backgroundColor}) => {
  return <Absolute backgroundColor={backgroundColor} p="space50" preset="fill" />;
};

type BorderBoxProps = Pick<BoxProps, 'borderColor' | 'borderWidth'>;
export const BorderBox: React.FC<BorderBoxProps> = ({borderColor, borderWidth}) => {
  return (
    <Box borderStyle="solid none none none" borderColor={borderColor} borderWidth={borderWidth || 'borderWidth20'} />
  );
};

type TextBoxProp = Pick<TextProps, 'fontFamily' | 'fontSize' | 'fontWeight'>;
export const TextBox: React.FC<TextBoxProp> = ({fontFamily, fontSize, fontWeight}) => {
  return (
    <Text fontFamily={fontFamily} fontSize={fontSize || 'fontSize60'} fontWeight={fontWeight} lineHeight="lineHeight60">
      Ag
    </Text>
  );
};

type TextColorBoxProp = Pick<TextProps, 'textColor'>;
interface TextColorBoxProps extends TextColorBoxProp {
  color: string;
}
export const TextColorBox: React.FC<TextColorBoxProps> = ({color, textColor}) => {
  const theme = useTheme();
  const colorFn = Color(color);
  const isInverse = colorFn.isLight();
  const backgroundColorValue = isInverse
    ? theme.backgroundColors.colorBackgroundBrand
    : theme.backgroundColors.colorBackgroundBody;
  const colorCombos = ColorCombos([color, backgroundColorValue]);
  const {accessibility} = colorCombos[1].combinations[0];

  const getContrastRating = (acc: ColorCombinationAccessibility): string => {
    const rating = colorRating(acc);
    return rating.small;
  };

  return (
    <Absolute
      backgroundColor={isInverse ? 'colorBackgroundBrand' : 'colorBackgroundBody'}
      p="space60"
      preset="fill"
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Text as="span" fontSize="fontSize60" lineHeight="lineHeight60" textColor={textColor}>
        <ScreenReaderOnly>Example text: </ScreenReaderOnly>Ag
      </Text>
      <Text as="span" fontSize="fontSize40" lineHeight="lineHeight30" textColor={textColor}>
        <ScreenReaderOnly>Accessibility rating: </ScreenReaderOnly>
        {getContrastRating(accessibility)}
      </Text>
    </Absolute>
  );
};

type RadiiBoxProps = Pick<BoxProps, 'borderRadius'>;
export const RadiiBox: React.FC<RadiiBoxProps> = ({borderRadius}) => {
  return (
    <Box
      backgroundColor="colorBackgroundBrand"
      borderRadius={borderRadius}
      p="space60"
      display={borderRadius === 'borderRadiusCircle' ? 'inline-block' : undefined}
    />
  );
};

interface ShadowBoxProps extends BoxProps {
  shadow?: string;
}
export const ShadowBox: React.FC<ShadowBoxProps> = ({shadow}) => {
  return <Box borderRadius="borderRadius20" p="space60" css={{boxShadow: shadow}} />;
};

type SpacingBoxProps = Pick<BoxProps, 'padding'>;
export const SpacingBox: React.FC<SpacingBoxProps> = ({padding}) => {
  return <Box backgroundColor="colorBackgroundBrand" display="inline-block" p={padding} />;
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
    case 'shadow':
      return <ShadowBox shadow={token.value} />;
    case 'spacing':
      return <SpacingBox padding={tokenName as keyof ThemeShape['space']} />;
    case 'text-color':
      return <TextColorBox color={token.value} textColor={tokenName as keyof ThemeShape['textColors']} />;
    default:
      return <Box>{token.value}</Box>;
  }
};
