import * as React from 'react-16';
import {Box} from '@twilio-paste/box';

const NewComponentBanner: React.FC = ({children}) => {
  return (
    <Box
      alignItems="center"
      backgroundColor="colorBackgroundBody"
      borderRadius="borderRadius10"
      display="inline-flex"
      paddingBottom="space20"
      paddingLeft="space20"
      paddingRight="space40"
      paddingTop="space20"
      role="status"
    >
      {children}
    </Box>
  );
};

export {NewComponentBanner};
