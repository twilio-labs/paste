import * as React from 'react';

import {Box} from '@twilio-paste/box';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {Text} from '@twilio-paste/text';
import type {ThemeShape} from '@twilio-paste/theme';

import {TextExample} from './TextExample';

export const TextColorExample: React.FC<{value: keyof ThemeShape['textColors']; contrastRating: string}> = ({
  value,
  contrastRating,
}) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <TextExample color={value} />
      <ScreenReaderOnly>Accessibility rating: </ScreenReaderOnly>
      <Text as="span" fontSize="fontSize10" lineHeight="lineHeight10" marginTop="space20">
        {contrastRating}
      </Text>
    </Box>
  );
};
