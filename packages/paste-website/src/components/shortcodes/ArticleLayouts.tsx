import { Box } from '@twilio-paste/box';
import * as React from 'react';

export const ArticleContent: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <Box>{children}</Box>;
};

export const ArticleAside: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box order={2} marginLeft={['space0', 'space0', 'space180']} minWidth="size20">
      {children}
    </Box>
  );
};
