import * as React from 'react';
import {Card} from '@twilio-paste/card';
import {Heading} from '@twilio-paste/heading';
import {Button} from '@twilio-paste/button';
import {Box} from '@twilio-paste/box';
import {useClipboard} from '@twilio-paste/clipboard-copy-library';
import {Text} from '@twilio-paste/text';
import {Paragraph} from '@twilio-paste/paragraph';
import {CopyIcon} from '@twilio-paste/icons/esm/CopyIcon';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {Codeblock} from '../codeblock';
import {SiteLink} from '../SiteLink';
import type {IconObject} from './types';

const iconSnippet = (name: string): string => `import { ${name} } from "@twilio-paste/icons/esm/${name}";

const ComponentName = () => (
  <${name} decorative={false} title="Description of icon" />
)`;

export interface IconCardProps {
  selectedIcon: IconObject | null;
}

const IconCard: React.FC<IconCardProps> = ({selectedIcon}) => {
  if (selectedIcon === null) return null;
  const clipboard = useClipboard({
    copiedTimeout: 600,
  });
  const Icon = selectedIcon.Component;

  const handleClick = React.useCallback(() => {
    clipboard.copy(iconSnippet(selectedIcon.name)); // programmatically copying a value
  }, [clipboard.copy, selectedIcon.name]);

  return (
    <>
      <Heading as="h2" variant="heading20">
        <Text as="span" fontSize="inherit" wordBreak="break-all">
          {selectedIcon.name.replace('Icon', '')}
        </Text>
      </Heading>
      <Card>
        <Box display="flex" justifyContent="center" marginBottom="space70">
          <Icon decorative size="sizeIcon110" />
        </Box>
        <Heading as="h2" variant="heading30">
          Install using React
        </Heading>
        <Box marginBottom="space70" position="relative">
          <Codeblock>{iconSnippet(selectedIcon.name)}</Codeblock>
          <Box bottom="10px" position="absolute" right="10px">
            <Button onClick={handleClick} variant="secondary" size="small">
              <CopyIcon decorative />
              <span aria-live="polite">
                {clipboard.copied ? 'Copied' : 'Copy'}
                <ScreenReaderOnly>code snippet</ScreenReaderOnly>
              </span>
            </Button>
          </Box>
        </Box>
        <Paragraph marginBottom="space0">
          Be sure to read the <SiteLink to="/getting-started/quickstart">quick start guide</SiteLink> page to ensure you
          have the correct dependencies.
        </Paragraph>
      </Card>
    </>
  );
};

export {IconCard};
