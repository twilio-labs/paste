import * as React from 'react';

import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Button} from '@twilio-paste/button';
import {Tooltip, useTooltipState} from '@twilio-paste/tooltip';
import {useClipboard} from '@twilio-paste/clipboard-copy-library';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {CopyIcon} from '@twilio-paste/icons/esm/CopyIcon';

import {BackgroundColor} from './preview/BackgroundColor';
import type {DecoratedToken} from '../types';

// eslint-disable-next-line @typescript-eslint/naming-convention
const TokenExample: React.FC<{
  category: DecoratedToken['category'];
  name: DecoratedToken['name'];
  value: DecoratedToken['value'];
  backgroundColor: DecoratedToken['backgroundColor'];
  contrastRating: DecoratedToken['contrastRating'];
}> = ({category, name, value, backgroundColor, contrastRating}) => {
  switch (category) {
    case 'background-colors':
      return <BackgroundColor name={name} value={value as string} />;
    default:
      return (
        <Box>
          {value}
          {backgroundColor} {contrastRating}
        </Box>
      );
  }
};

const useCopyTooltip = (
  name: DecoratedToken['name']
): {
  isCopied: boolean;
  handleCopyName: VoidFunction;
  tooltipState: ReturnType<typeof useTooltipState>;
  tooltipText: string;
} => {
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

  return {
    isCopied: clipboard.copied,
    handleCopyName,
    tooltipState,
    tooltipText,
  };
};

const CopyIconWithTooltip: React.FC<{name: DecoratedToken['name']}> = ({name}) => {
  const {tooltipText, tooltipState, isCopied, handleCopyName} = useCopyTooltip(name);
  return (
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
  );
};

export const TokenCard: React.FC<{
  category: DecoratedToken['category'];
  name: DecoratedToken['name'];
  comment: DecoratedToken['comment'];
  value: DecoratedToken['value'];
  backgroundColor: DecoratedToken['backgroundColor'];
  contrastRating: DecoratedToken['contrastRating'];
}> = ({category, name, value, comment, backgroundColor, contrastRating}) => {
  return (
    <Box
      key={name}
      display="flex"
      alignItems="center"
      backgroundColor="colorBackgroundBody"
      borderColor="colorBorderWeaker"
      borderWidth="borderWidth10"
      borderStyle="solid"
      borderRadius="borderRadius30"
      minHeight="sizeSquare170"
    >
      <Box margin="space40" width="sizeSquare200" justifyContent="center" alignItems="center" display="flex">
        <TokenExample
          category={category}
          name={name}
          value={value}
          backgroundColor={backgroundColor}
          contrastRating={contrastRating}
        />
      </Box>
      <Box
        paddingY="space60"
        paddingX="space70"
        borderLeftColor="colorBorderWeaker"
        borderLeftWidth="borderWidth10"
        borderLeftStyle="solid"
        width="100%"
      >
        <Box display={['block', 'flex']} columnGap="space110">
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
              <CopyIconWithTooltip name={name} />
            </Box>
            <Text as="div" fontSize="fontSize30" lineHeight="lineHeight40">
              {comment}
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems={['flex-start', 'flex-end']}
            textAlign="right"
            flexShrink={0}
          >
            <Text as="div" fontSize={['fontSize20', 'fontSize30']} lineHeight="lineHeight30">
              {value}
            </Text>
            <Text as="div" fontSize={['fontSize20', 'fontSize30']} lineHeight="lineHeight30">
              {value}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
