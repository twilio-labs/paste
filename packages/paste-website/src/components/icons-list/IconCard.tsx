import * as React from 'react';
import {Card} from '@twilio-paste/card';
import {Heading} from '@twilio-paste/heading';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Paragraph} from '@twilio-paste/paragraph';
import {CodeBlock} from '@twilio-paste/code-block';

import {CopyButton} from '../CopyButton';
import {SiteLink} from '../SiteLink';
import type {IconObject} from './types';

const iconSnippet = (name: string): string => `import { ${name} } from "@twilio-paste/icons/esm/${name}";

const ComponentName = () => (
  <${name} decorative={false} title="Description of icon" />
)`;

export interface IconCardProps {
  selectedIcon: IconObject | null;
}

const IconCard: React.FC<React.PropsWithChildren<IconCardProps>> = ({selectedIcon}) => {
  if (selectedIcon === null) return null;
  const Icon = selectedIcon.Component;

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
          <CodeBlock language="jsx" code={iconSnippet(selectedIcon.name)} />
          <Box bottom="10px" position="absolute" right="10px">
            <CopyButton text={iconSnippet(selectedIcon.name)} />
          </Box>
        </Box>
        <Paragraph marginBottom="space0">
          Be sure to read the <SiteLink href="/introduction/for-engineers/quickstart">quick start guide</SiteLink> page
          to ensure you have the correct dependencies.
        </Paragraph>
      </Card>
    </>
  );
};

export {IconCard};
