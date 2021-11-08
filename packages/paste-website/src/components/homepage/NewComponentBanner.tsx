import * as React from 'react';
import {Box} from '@twilio-paste/box';

const NewComponentBanner: React.FC = ({children}) => {
  return (
    <Box
      alignItems="center"
      backgroundColor="colorBackgroundBody"
      borderRadius="borderRadius30"
      display="inline-flex"
      paddingBottom="space20"
      paddingLeft="space20"
      paddingRight="space40"
      paddingTop="space20"
      columnGap="space30"
      role="status"
    >
      {children}
    </Box>
  );
};

export {NewComponentBanner};
