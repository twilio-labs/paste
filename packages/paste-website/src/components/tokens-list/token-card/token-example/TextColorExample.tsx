import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {Text} from '@twilio-paste/text';
import type {ThemeShape} from '@twilio-paste/theme';
import type {Properties} from 'csstype';
import {TextExample} from './TextExample';
import {contrastScore} from '../../../../utils/contrastScore';

export const TextColorExample: React.FC<{
  value: keyof ThemeShape['textColors'];
  backgroundColor: Properties['backgroundColor'];
}> = ({value, backgroundColor}) => {
  const contrastRating = contrastScore(value, backgroundColor);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <TextExample color={value} />
      <ScreenReaderOnly>Accessibility rating: </ScreenReaderOnly>
      <Text as="p" fontSize="fontSize10" lineHeight="lineHeight10" marginTop="space20" marginBottom="space0">
        {contrastRating}
      </Text>
    </Box>
  );
};
