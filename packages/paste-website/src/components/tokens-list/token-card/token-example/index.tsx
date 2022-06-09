import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import type {ThemeShape} from '@twilio-paste/theme';

import {BoxExample} from './BoxExample';
import {TextExample} from './TextExample';
import {BorderExample} from './BorderExample';
import {LineHeightExample} from './LineHeightExample';
// import {SpacingExample} from './SpacingExample';
// import {SizingExample} from './SizingExample';

type TokenExampleProps = {
  category: string;
  name: string;
  value: string;
};

// Notes:
// make the following generic example types:
// BoxExample: covers background-colors, border-colors, box-shadows, border-radius
// TextExample: covers fonts, font-sizes, font-weights, text-colors
// BorderExample: covers border widths
// SpacingExample: covers spacing tokens
// SizingExample: this one will be trickier...
// ..more?

export const TokenExample: React.FC<TokenExampleProps> = ({category, name, value}) => {
  const exampleBackground = name.toLowerCase().includes('inverse')
    ? 'colorBackgroundBodyInverse'
    : 'colorBackgroundBody';

  let tokenExampleRender = null;

  switch (category) {
    case 'background-colors':
      tokenExampleRender = <BoxExample backgroundColor={value as keyof ThemeShape['backgroundColors']} />;
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
    // case 'spacing':
    //   return <SpacingBox padding={tokenName as keyof ThemeShape['space']} />;
    case 'text-colors':
      tokenExampleRender = (
        <Box display="flex" flexDirection="column" alignItems="center">
          <TextExample color={value as keyof ThemeShape['textColors']} />
          <Text as="span" fontSize="fontSize10" lineHeight="lineHeight10" marginTop="space20">
            AAA
          </Text>
        </Box>
      );
  }

  return tokenExampleRender ? (
    <Box
      boxSizing="content-box"
      padding="space40"
      width="sizeSquare200"
      minHeight="sizeSquare170"
      justifyContent="center"
      alignItems="center"
      display="flex"
      flexShrink={0}
      backgroundColor={exampleBackground}
    >
      {tokenExampleRender}
    </Box>
  ) : null;
};
