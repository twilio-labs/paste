import * as React from 'react';
import {Box} from '@twilio-paste/box';

const ProductBadge: React.FC = ({children}) => {
  return (
    <Box backgroundColor="colorBackgroundStrong" paddingX="space20" borderRadius="borderRadius20">
      {children}
    </Box>
  );
};

export {ProductBadge};
