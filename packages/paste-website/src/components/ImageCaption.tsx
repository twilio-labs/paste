import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {DetailText} from '@twilio-paste/detail-text';

export const ImageCaption: React.FC<React.PropsWithChildren> = ({children}) => (
  <Box marginBottom="space110">
    <DetailText>
      {children}
    </DetailText>
  </Box>
);
