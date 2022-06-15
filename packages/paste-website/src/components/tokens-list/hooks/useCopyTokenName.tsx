import * as React from 'react';

import {Button} from '@twilio-paste/button';
import {Tooltip, useTooltipState} from '@twilio-paste/tooltip';
import {useClipboard} from '@twilio-paste/clipboard-copy-library';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {CopyIcon} from '@twilio-paste/icons/esm/CopyIcon';

import type {Token} from '../types';

export const useCopyTokenName = (
  name: Token['name']
): {
  handleCopyName: VoidFunction;
  isCopied: boolean;
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
    handleCopyName,
    isCopied: clipboard.copied,
    tooltipState,
    tooltipText,
  };
};

export const CopyIconWithTooltip: React.FC<{name: Token['name']}> = ({name}) => {
  const {handleCopyName, isCopied, tooltipState, tooltipText} = useCopyTokenName(name);
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
