import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Button} from '@twilio-paste/button';
import {Tooltip, useTooltipState} from '@twilio-paste/tooltip';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {useClipboard} from '@twilio-paste/clipboard-copy-library';
import {CopyIcon} from '@twilio-paste/icons/esm/CopyIcon';

import {rgbToHex} from '../../../utils/rgbToHex';
import {TokenExample} from './token-example';
import type {DecoratedToken} from '../types';
import {remToPx} from '@twilio-paste/theme';

const getTokenAltValue = ({category, value}: {category: string; value: DecoratedToken['value']}): string | null => {
  switch (category) {
    case 'background-colors':
    case 'border-colors':
    case 'text-colors':
      return rgbToHex(value as string);
    case 'font-sizes':
    case 'line-heights':
    case 'sizings':
    case 'spacings':
      return remToPx(value) as string;
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
  const tooltipState = useTooltipState();
  const [tooltipText, setTooltipText] = React.useState('Copy token name');
  // Prevents tooltip being visible on first render due to reakit positioning bug code
  const isFirstRender = React.useRef(true);
  const clipboard = useClipboard({copiedTimeout: 2000});

  const handleCopyName = React.useCallback(() => {
    clipboard.copy(name);
  }, [name]);

  React.useEffect(() => {
    setTooltipText(clipboard.copied ? 'Copied!' : 'Copy token name');
  }, [clipboard.copied]);

  // Reakit has a bug where the tooltip doesn't recalc position on content changes
  // This is a workaround until we upgrade to Ariakit with Floating UI fixes
  // https://github.com/twilio-labs/paste/discussions/2037
  React.useEffect(() => {
    // This prevents the tooltip from showing up on mount
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    tooltipState.hide();
    setTimeout(() => tooltipState.show(), 0);
  }, [tooltipText]);

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
                      <ScreenReaderOnly>{clipboard.copied ? 'Copied token name!' : 'Copy token name'}</ScreenReaderOnly>
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
