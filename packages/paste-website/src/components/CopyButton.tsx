import * as React from 'react';
import {Button} from '@twilio-paste/button';
import {useClipboard} from '@twilio-paste/clipboard-copy-library';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {CopyIcon} from '@twilio-paste/icons/esm/CopyIcon';

interface CopyButtonProps {
  text: string;
  copiedTimeout?: number;
}

export const CopyButton: React.FC<CopyButtonProps> = ({text, copiedTimeout = 1500}) => {
  const clipboard = useClipboard({copiedTimeout});

  const handleCopy = React.useCallback(() => {
    clipboard.copy(text);
  }, [text]);

  return (
    <Button variant="secondary" size="small" onClick={handleCopy}>
      <CopyIcon decorative />
      <span aria-live="polite">
        {clipboard.copied ? 'Copied' : 'Copy'}
        <ScreenReaderOnly>to clipboard</ScreenReaderOnly>
      </span>
    </Button>
  );
};
