import * as React from 'react';
import camelCase from 'lodash/camelCase';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Button} from '@twilio-paste/button';
import {Tooltip, useTooltipState} from '@twilio-paste/tooltip';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {CopyIcon} from '@twilio-paste/icons/esm/CopyIcon';
import {styled, css} from '@twilio-paste/styling-library';

import {TokenExample} from './token-example';
import type {TokenCardProps} from '../types';
import {AccessiblePairing} from './AccessiblePairing';

const TokenCardContent = styled.dl(
  css({
    flex: 1,
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
    margin: 'space0',
    paddingX: ['space50', 'space70', 'space50', 'space70'],
    paddingY: ['space50', 'space60', 'space50', 'space60'],
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
    gridRow: [3, '1/3', 3, '1/3'],
    gridColumn: [1, '2/2', 1, '2/2'],
    display: ['block', 'flex', 'block', 'flex'],
    margin: 'space0',
    marginTop: ['space70', 'space0', 'space70', 'space0'],
    marginLeft: ['space0', 'space110', 'space0', 'space110'],
    verticalAlign: 'center',
    textAlign: ['left', 'right', 'left', 'right'],
  })
);

const TokenCardComment = styled.dd(
  css({
    gridRow: 2,
    margin: 'space0',
  })
);

export const TokenCard: React.FC<React.PropsWithChildren<TokenCardProps>> = React.memo(
  ({
    category,
    name,
    value,
    altValue,
    comment,
    backgroundColor,
    backgroundColorInverse,
    borderColor,
    highlightColor,
    textColor,
    textColorInverse,
    useCamelCase,
    text_contrast_pairing,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onCopyText = () => {},
    isCopied = false,
    selectedTheme,
    ...props
  }) => {
    const tooltipState = useTooltipState();
    const [tooltipText, setTooltipText] = React.useState('Copy token name');
    // Prevents tooltip being visible on first render due to reakit positioning bug code
    const isFirstRender = React.useRef(true);
    const tokenName = useCamelCase ? camelCase(name) : `$${name}`;
    const handleCopyName = React.useCallback(() => {
      onCopyText(tokenName);
    }, [tokenName]);

    React.useEffect(() => {
      setTooltipText(isCopied ? 'Copied!' : 'Copy token name');
    }, [isCopied]);
    /*
     * Reakit has a bug where the tooltip doesn't recalc position on content changes
     * This is a workaround until we upgrade to Ariakit with Floating UI fixes
     * https://github.com/twilio-labs/paste/discussions/2037
     */
    React.useEffect(() => {
      // This prevents the tooltip from showing up on mount
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
      }
      if (tooltipState.visible) {
        tooltipState.hide();
        setTimeout(() => tooltipState.show(), 0);
      }
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
        marginBottom="space40"
        overflow="hidden"
        element="TOKEN_CARD"
        {...props}
      >
        <TokenExample
          category={category}
          name={name}
          value={value.toString()}
          backgroundColor={backgroundColor}
          backgroundColorInverse={backgroundColorInverse}
          borderColor={borderColor}
          highlightColor={highlightColor}
          textColor={textColor}
          textColorInverse={textColorInverse}
        />
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
                      <ScreenReaderOnly>{isCopied ? 'Copied token name!' : 'Copy token name'}</ScreenReaderOnly>
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
              marginBottom="space0"
              paddingLeft="space0"
              flexShrink={0}
              listStyleType="none"
              maxWidth={['none', 'size20', 'none', 'size20']}
              marginTop="space0"
            >
              <Text
                as="li"
                fontSize={['fontSize20', 'fontSize30', 'fontSize20', 'fontSize30']}
                lineHeight={['lineHeight20', 'lineHeight30', 'lineHeight20', 'lineHeight30']}
              >
                {value}
              </Text>
              <Text
                as="li"
                fontSize={['fontSize20', 'fontSize30', 'fontSize20', 'fontSize30']}
                lineHeight={['lineHeight20', 'lineHeight30', 'lineHeight20', 'lineHeight30']}
              >
                {altValue}
              </Text>
            </Box>
          </TokenCardValue>
          <TokenCardComment>{comment}</TokenCardComment>
          {text_contrast_pairing && text_contrast_pairing.length > 0 && (
            <AccessiblePairing
              name={tokenName}
              text_contrast_pairing={text_contrast_pairing}
              selectedTheme={selectedTheme}
            />
          )}
        </TokenCardContent>
      </Box>
    );
  }
);
