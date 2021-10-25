import * as React from 'react-16';
import {Box} from '@twilio-paste/box';

export const ArticleContent: React.FC = ({children}) => {
  return (
    <Box maxWidth={['100%', '100%', 'size70']} minWidth="0">
      {children}
    </Box>
  );
};

export const ArticleAside: React.FC = ({children}) => {
  return (
    <Box order={2} marginLeft={['space0', 'space0', 'space180']} minWidth="size20">
      {children}
    </Box>
  );
};
