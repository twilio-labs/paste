import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Button} from '@twilio-paste/button';
import {Tooltip} from '@twilio-paste/tooltip';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {CopyIcon} from '@twilio-paste/icons/esm/CopyIcon';

import {rgbToHex} from '../../../utils/rgbToHex';
// @TODO probably need to modify the other inerface.
// import {remToPx} from '@twilio-paste/theme';
import {TokenExample} from './token-example';
import {useCopyIconName} from './hooks';
import type {DecoratedToken} from '../types';

// Based on root font-size being 16px
const PX_PER_REM = 16;
const numberIsString = (nm: string | number): nm is string => typeof nm === 'string';

type UnitValue = string | number;
export const remToPx = (rem: UnitValue, stringify?: false | true | undefined): UnitValue => {
  const remValue = numberIsString(rem) ? Number.parseFloat(rem.replace('rem', '')) : rem;
  // We round because decimal px values can cause issues.
  const pxValue = Math.round(remValue * PX_PER_REM);

  return stringify != null ? `${pxValue}px` : pxValue;
};

// @TODO
const getTokenAltValue = ({category, value}: {category: string; value: DecoratedToken['value']}): string | null => {
  switch (category) {
    case 'background-colors':
    case 'border-colors':
    case 'text-colors':
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const _value = value as string;
      return rgbToHex(_value);
    case 'font-sizes':
    case 'line-heights':
    case 'sizings':
    case 'spacings':
      return remToPx(value, true) as string;
    default:
      return null;
  }
};

export const TokenCard: React.FC<{
  category: DecoratedToken['category'];
  name: DecoratedToken['name'];
  value: DecoratedToken['value'];
  comment?: DecoratedToken['comment'];
  backgroundColor: DecoratedToken['backgroundColor'];
  contrastRating: DecoratedToken['contrastRating'];
}> = ({category, name, value, comment, contrastRating, backgroundColor}) => {
  const {tooltipState, handleCopyName, isCopied, tooltipText} = useCopyIconName(name);

  return (
    <Box
      key={name}
      display="flex"
      alignItems="stretch"
      backgroundColor="colorBackgroundBody"
      borderColor="colorBorderWeaker"
      borderWidth="borderWidth10"
      borderStyle="solid"
      borderRadius="borderRadius30"
      minHeight="sizeSquare170"
      marginTop="space30"
      marginBottom="space30"
      overflow="hidden"
    >
      <TokenExample
        category={category}
        name={name}
        value={value}
        contrastRating={contrastRating}
        backgroundColor={backgroundColor}
      />
      <Box
        display={['block', 'block', 'flex']}
        alignItems="center"
        paddingY={['space50', 'space60']}
        paddingX={['space50', 'space70']}
        borderLeftColor="colorBorderWeaker"
        borderLeftWidth="borderWidth10"
        borderLeftStyle="solid"
        width="100%"
      >
        <Box marginBottom={['space40', 'space0']} flexGrow={1}>
          <Box display="flex" alignItems="center" flexWrap="wrap">
            <Text
              as="span"
              fontFamily="fontFamilyCode"
              fontWeight="fontWeightBold"
              fontSize="fontSize30"
              lineHeight="lineHeight40"
              marginRight="space20"
              wordBreak="break-word"
            >
              {name}
            </Text>
            <Box display={['none', 'block']}>
              <Tooltip text={tooltipText} state={tooltipState}>
                <Button variant="secondary_icon" size="icon_small" onClick={handleCopyName}>
                  <span>
                    <CopyIcon decorative />
                    <span aria-live="polite">
                      <ScreenReaderOnly>{isCopied ? 'Copied token name!' : 'Copy token name'}</ScreenReaderOnly>
                    </span>
                  </span>
                </Button>
              </Tooltip>
            </Box>
          </Box>
          <Text as="div">{comment}</Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems={['flex-start', 'flex-start', 'flex-end']}
          textAlign={['left', 'left', 'right']}
          marginTop={['space30', 'space30', 'space0']}
          flexShrink={0}
        >
          <Text as="div" fontSize={['fontSize20', 'fontSize30']} lineHeight="lineHeight30">
            {value}
          </Text>
          <Text as="div" fontSize={['fontSize20', 'fontSize30']} lineHeight="lineHeight30">
            {getTokenAltValue({category, value})}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
