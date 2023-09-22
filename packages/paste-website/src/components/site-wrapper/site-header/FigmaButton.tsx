import React from 'react';
import { Box } from '@twilio-paste/box';
import { secureExternalLink } from '@twilio-paste/anchor';

import { FigmaIcon } from '../../icons/FigmaIcon';
import { FIGMA_PROFILE_URL } from '../../../constants';

// eslint-disable-next-line no-empty-pattern
const FigmaButton = React.forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <Box
      ref={ref}
      {...secureExternalLink('https://www.figma.com/@twilio')}
      alignItems="center"
      as="a"
      backgroundColor="colorBackground"
      borderRadius="borderRadius10"
      borderColor="colorBorderWeak"
      borderStyle="solid"
      borderWidth="borderWidth10"
      color="colorText"
      columnGap="space10"
      display="flex"
      fontSize="fontSize10"
      fontWeight="fontWeightBold"
      height="1.25rem"
      href={FIGMA_PROFILE_URL}
      outline="none"
      paddingLeft="space20"
      paddingRight="space30"
      textDecoration="none"
      _hover={{ textDecoration: 'underline' }}
      _focus={{ boxShadow: 'shadowFocusInverse' }}
    >
      <FigmaIcon decorative={true} size={12} />
      Figma
    </Box>
  );
});

FigmaButton.displayName = 'FigmaButton';

export { FigmaButton };
