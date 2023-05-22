import * as React from 'react';
import {AspectRatio} from '@twilio-paste/aspect-ratio';
import {Box} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';

import {STORYBOOK_DOMAIN} from '../../constants';

export const EmbeddedStory: React.FC<{id: string}> = ({id}) => {
  return (
    <Box
      marginBottom="space70"
      position="relative"
      borderColor="colorBorderWeak"
      borderStyle="solid"
      borderWidth="borderWidth10"
      padding="space30"
    >
      <AspectRatio ratio="4:3">
        <Box
          as="iframe"
          border="none"
          src={`${STORYBOOK_DOMAIN}/iframe.html?args=&id=${id}`}
          title="embedded story"
          overflow="visible"
          width="100%"
        />
      </AspectRatio>
      <Box position="absolute" bottom="space40" right="space40">
        <Button as="a" href={`${STORYBOOK_DOMAIN}?path=/story/${id}`} variant="secondary" size="small">
          Storybook
        </Button>
      </Box>
    </Box>
  );
};
