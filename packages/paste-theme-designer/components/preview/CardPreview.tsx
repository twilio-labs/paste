import * as React from 'react';
import { Avatar } from '@twilio-paste/core/avatar';
import { Box } from '@twilio-paste/core/box';
import { Card } from '@twilio-paste/core/card';
import { Heading } from '@twilio-paste/core/heading';
import { MediaBody, MediaFigure, MediaObject } from '@twilio-paste/core/media-object';
import { Paragraph } from '@twilio-paste/core/paragraph';

import { MenuPreview } from './MenuPreview';
import { ModalPreview } from './ModalPreview';

const CardPreview = (): JSX.Element => {
  return (
    <Card>
      <MediaObject verticalAlign="center">
        <MediaFigure spacing="space60">
          <Avatar size="sizeIcon90" name="Trayvon Martin" />
        </MediaFigure>
        <MediaBody>
          <Heading as="h3" variant="heading40">
            Card Heading
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus pellentesque odio, sit amet fermentum
            mauris lobortis a. Sed faucibus scelerisque suscipit.{' '}
          </Paragraph>
          <Box display="inline-block" marginRight="space50">
            <ModalPreview />
          </Box>
          <MenuPreview />
        </MediaBody>
      </MediaObject>
    </Card>
  );
};

export { CardPreview };
