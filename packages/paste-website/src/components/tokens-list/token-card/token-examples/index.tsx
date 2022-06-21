import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {ThemeShape} from '@twilio-paste/theme';

import type {DecoratedToken} from '../../types';

import {BoxExample} from './BoxExample';
import {TextExample} from './TextExample';
import {BorderExample} from './BorderExample';
import {LineHeightExample} from './LineHeightExample';
import {SpacingExample} from './SpacingExample';
import {TextColorExample} from './TextColorExample';
import {IconSizeExample} from './IconSizeExample';

import type {CategoryKeys} from '../../types';

type BgColor = Exclude<React.ComponentProps<typeof Box>['backgroundColor'], undefined>;

const tokenPreviews: Record<
  Exclude<CategoryKeys, 'colors' | 'z-indices'>,
  React.FC<{
    value: DecoratedToken['value'];
    name?: DecoratedToken['name'];
    contrastRating: DecoratedToken['contrastRating'];
  }>
> = {
  'background-colors': ({value}) => <BoxExample backgroundColor={value as keyof ThemeShape['backgroundColors']} />,
  'border-colors': ({value}) => <BoxExample borderColor={value as keyof ThemeShape['borderColors']} />,
  'border-widths': ({value}) => <BorderExample borderWidth={value as keyof ThemeShape['borderWidths']} />,
  fonts: ({value}) => <TextExample fontFamily={value as keyof ThemeShape['fonts']} />,
  'font-sizes': ({value}) => <TextExample fontSize={value as keyof ThemeShape['fontSizes']} />,
  'font-weights': ({value}) => <TextExample fontWeight={value as keyof ThemeShape['fontWeights']} />,
  'line-heights': ({value, name}) => (
    <LineHeightExample tokenName={name as string} lineHeight={value as keyof ThemeShape['lineHeights']} />
  ),
  radii: ({value}) => (
    <BoxExample borderRadius={value as keyof ThemeShape['radii']} backgroundColor="colorBackgroundStrong" />
  ),
  'box-shadows': ({value}) => <BoxExample boxShadow={value as keyof ThemeShape['shadows']} />,
  spacings: ({value, name}) => <SpacingExample tokenName={name as string} spacing={value as string} />,
  sizings: ({value, name}) => {
    const _name = (name as string).toLowerCase();
    if (_name.match('icon')) {
      return <IconSizeExample size={value as keyof ThemeShape['iconSizes']} />;
    }
    if (_name.match('square')) {
      return <BoxExample backgroundColor="colorBackgroundStrong" size={value as keyof ThemeShape['sizes']} />;
    }

    return null;
  },
  'text-colors': ({value, contrastRating}) => (
    <TextColorExample value={value as keyof ThemeShape['textColors']} contrastRating={contrastRating as string} />
  ),
};

export const TokenExample: React.FC<{
  category: DecoratedToken['category'];
  name: DecoratedToken['name'];
  value: DecoratedToken['value'];
  backgroundColor: DecoratedToken['backgroundColor'];
  contrastRating: DecoratedToken['contrastRating'];
}> = ({category, name, value, contrastRating, backgroundColor}) => {
  const TokenPreview = tokenPreviews[category as keyof typeof tokenPreviews];

  return TokenPreview != null ? (
    <Box
      boxSizing="content-box"
      padding={['space30', 'space40']}
      width="sizeSquare200"
      minHeight="sizeSquare170"
      justifyContent="center"
      alignItems="center"
      display="flex"
      flexShrink={0}
      backgroundColor={backgroundColor as BgColor}
    >
      <TokenPreview value={value} name={name} contrastRating={contrastRating} />
    </Box>
  ) : null;
};
