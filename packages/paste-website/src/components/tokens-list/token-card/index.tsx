import * as React from 'react';
import camelCase from 'lodash/camelCase';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Button} from '@twilio-paste/button';
import {Tooltip, useTooltipState} from '@twilio-paste/tooltip';
import {useClipboard} from '@twilio-paste/clipboard-copy-library';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {CopyIcon} from '@twilio-paste/icons/esm/CopyIcon';
import {remToPx} from '@twilio-paste/theme';
import {styled, css} from '@twilio-paste/styling-library';
import type {Properties} from 'csstype';
import {rgbToHex} from '../../../utils/rgbToHex';
import {TokenExample} from './token-example';
import type {Token} from '../types';

const getTokenAltValue = ({category, value}: {category: string; value: Token['value']}): string | null => {
  switch (category) {
    case 'background-colors':
    case 'border-colors':
    case 'text-colors':
      return rgbToHex(value);
    case 'font-sizes':
    case 'line-heights':
    case 'sizings':
    case 'spacings':
      return remToPx(value, 'string') as string;
    default:
      return null;
  }
};

const TokenCardContent = styled.dl(
  css({
    flex: 1,
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
    margin: 'space0',
    paddingX: ['space50', 'space70'],
    paddingY: ['space50', 'space60'],
  })
);

const TokenCardName = styled.dt(
  css({
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
  })
);

const TokenCardValue = styled.dd(
  css({
    gridRow: [3, '1/3'],
    gridColumn: [1, '2/2'],
    display: ['block', 'flex'],
    margin: 'space0',
    marginTop: ['space40', 'space0'],
    verticalAlign: 'center',
    textAlign: ['left', 'right'],
  })
);

const TokenCardComment = styled.dd(
  css({
    gridRow: 2,
    margin: 'space0',
  })
);

export const TokenCard: React.FC<{
  category: Token['category'];
  name: Token['name'];
  value: Token['value'];
  backgroundColor: Properties['backgroundColor'];
  comment?: Token['comment'];
  useCamelCase?: boolean;
}> = ({category, name, value, comment, backgroundColor, useCamelCase}) => {
  const tooltipState = useTooltipState();
  const [tooltipText, setTooltipText] = React.useState('Copy token name');
  // Prevents tooltip being visible on first render due to reakit positioning bug code
  const isFirstRender = React.useRef(true);
  const clipboard = useClipboard({copiedTimeout: 2000});
  const tokenName = useCamelCase ? camelCase(name) : `$${name}`;

  const handleCopyName = React.useCallback(() => {
    clipboard.copy(tokenName);
  }, [tokenName]);

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
      as="li"
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
      <TokenExample category={category} name={name} value={value} backgroundColor={backgroundColor} />

      <TokenCardContent>
        <TokenCardName>
          <Text
            as="span"
            display="inline-block"
            fontFamily="fontFamilyCode"
            fontWeight="fontWeightBold"
            fontSize="fontSize30"
            lineHeight="lineHeight30"
            marginRight="space20"
            wordBreak="break-word"
          >
            {tokenName}
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
        </TokenCardName>
        <TokenCardValue>
          <ScreenReaderOnly>Token value:</ScreenReaderOnly>
          <Box
            as="ul"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            marginTop={['space30', 'space0']}
            marginBottom="space0"
            paddingLeft="space0"
            flexShrink={0}
            listStyleType="none"
          >
            <Text as="li" fontSize={['fontSize20', 'fontSize30']} lineHeight={['lineHeight20', 'lineHeight30']}>
              {value}
            </Text>
            <Text as="li" fontSize={['fontSize20', 'fontSize30']} lineHeight={['lineHeight20', 'lineHeight30']}>
              {getTokenAltValue({category, value})}
            </Text>
          </Box>
        </TokenCardValue>
        <TokenCardComment>{comment}</TokenCardComment>
      </TokenCardContent>
    </Box>
  );
};
