import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {ThemeShape} from '@twilio-paste/theme';
import type {Properties} from 'csstype';
import {BoxExample} from './BoxExample';
import {TextExample} from './TextExample';
import {BorderExample} from './BorderExample';
import {LineHeightExample} from './LineHeightExample';
import {SpacingExample} from './SpacingExample';
import {TextColorExample} from './TextColorExample';
import {IconSizeExample} from './IconSizeExample';

type TokenExampleProps = {
  category: string;
  name: string;
  value: string;
  backgroundColor: Properties['backgroundColor'];
};

export const TokenExample: React.FC<TokenExampleProps> = ({category, name, value, backgroundColor}) => {
  let tokenExampleRender = null;

  switch (category) {
    case 'background-colors':
      // apply a border to foreground colors that match the background color
      const borderColor = value === backgroundColor ? 'colorBorderWeak' : null;
      tokenExampleRender = (
        <BoxExample backgroundColor={value as keyof ThemeShape['backgroundColors']} borderColor={borderColor} />
      );
      break;
    case 'border-colors':
      tokenExampleRender = <BoxExample borderColor={value as keyof ThemeShape['borderColors']} />;
      break;
    case 'border-widths':
      tokenExampleRender = <BorderExample borderWidth={value as keyof ThemeShape['borderWidths']} />;
      break;
    case 'fonts':
      tokenExampleRender = <TextExample fontFamily={value as keyof ThemeShape['fonts']} />;
      break;
    case 'font-sizes':
      tokenExampleRender = <TextExample fontSize={value as keyof ThemeShape['fontSizes']} />;
      break;
    case 'font-weights':
      tokenExampleRender = <TextExample fontWeight={value as keyof ThemeShape['fontWeights']} />;
      break;
    case 'line-heights':
      tokenExampleRender = <LineHeightExample tokenName={name} lineHeight={value as keyof ThemeShape['lineHeights']} />;
      break;
    case 'radii':
      tokenExampleRender = (
        <BoxExample borderRadius={value as keyof ThemeShape['radii']} backgroundColor="colorBackgroundStrong" />
      );
      break;
    case 'box-shadows':
      tokenExampleRender = <BoxExample boxShadow={value as keyof ThemeShape['shadows']} />;
      break;
    case 'spacings':
      tokenExampleRender = <SpacingExample tokenName={name} spacing={value} />;
      break;
    case 'sizings':
      // only render a preview for icons or squares
      if (name.toLowerCase().match('icon')) {
        tokenExampleRender = <IconSizeExample size={value as keyof ThemeShape['iconSizes']} />;
      } else if (name.toLowerCase().match('square')) {
        tokenExampleRender = (
          <BoxExample
            backgroundColor="colorBackgroundStrong"
            size={value as keyof ThemeShape['sizes']}
            borderRadius="borderRadius0"
          />
        );
      }

      break;
    case 'text-colors':
      tokenExampleRender = (
        <TextColorExample value={value as keyof ThemeShape['textColors']} backgroundColor={backgroundColor} />
      );
  }

  return tokenExampleRender ? (
    <Box
      boxSizing="content-box"
      padding={['space30', 'space40']}
      width="sizeSquare200"
      minHeight="sizeSquare170"
      justifyContent="center"
      alignItems="center"
      display="flex"
      flexShrink={0}
      style={{backgroundColor: backgroundColor}}
      borderRightColor="colorBorderWeaker"
      borderRightWidth="borderWidth10"
      borderRightStyle="solid"
    >
      {tokenExampleRender}
    </Box>
  ) : null;
};
