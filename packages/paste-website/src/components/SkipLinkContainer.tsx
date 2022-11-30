import * as React from 'react';
import {Box} from '@twilio-paste/box';

const SkipLinkContainer: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <Box
      backgroundColor="colorBackgroundBody"
      borderRadius="borderRadius20"
      boxShadow="shadowLow"
      left={10}
      paddingX="space60"
      paddingY="space30"
      position="fixed"
      top={10}
      transform="translateY(-150%)"
      transition="transform 0.1s"
      zIndex="zIndex90"
      _focusWithin={{transform: 'translateY(0%)'}}
    >
      {children}
    </Box>
  );
};

export {SkipLinkContainer};
