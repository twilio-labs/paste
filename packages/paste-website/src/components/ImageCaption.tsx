import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';

export const ImageCaption: React.FC<React.PropsWithChildren> = ({children}) => (
  <Box as="p" marginTop="space40" marginBottom="space110">
    <Text as="span" color="colorTextWeak" fontSize="fontSize20" lineHeight="lineHeight20">
      <Text as="span" fontWeight="fontWeightBold" color="colorTextWeak" fontSize="fontSize20" lineHeight="lineHeight20">
        Image caption:
      </Text>{' '}
      {children}
    </Text>
  </Box>
);
