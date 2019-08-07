/** @jsx jsx */
import * as React from 'react';
import {jsx} from '@emotion/core';
import * as lodash from 'lodash';
import {ThemeShape} from '@twilio-paste/theme-tokens';
import {Absolute, AbsoluteProps} from '@twilio-paste/absolute';
import {Box, BoxProps} from '@twilio-paste/box';
import {Text, TextProps} from '@twilio-paste/text';

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

type TextBoxProp = Pick<TextProps, 'fontFamily' | 'fontSize' | 'fontWeight' | 'textColor'>;
interface TextBoxProps extends TextBoxProp {
  color?: string;
}
export const TextBox: React.FC<TextBoxProps> = ({color, fontFamily, fontSize, fontWeight, textColor}) => {
  const colorFn = Color(color);
  const isInverse = colorFn.isLight();
  return (
    <Absolute
      backgroundColor={isInverse ? 'colorBackgroundBrand' : 'colorBackgroundBody'}
      p="space60"
      preset="fill"
      css={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Text
        fontFamily={fontFamily}
        fontSize={fontSize || 'fontSize60'}
        fontWeight={fontWeight}
        lineHeight="lineHeight60"
        textColor={textColor}
      >
        Ag
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
      return <TextBox color={token.value} textColor={tokenName as keyof ThemeShape['textColors']} />;
    default:
      return <Box>{token.value}</Box>;
  }
};
