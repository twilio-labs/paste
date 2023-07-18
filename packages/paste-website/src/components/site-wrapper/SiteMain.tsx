import * as React from 'react';
import {Box} from '@twilio-paste/box';

export const SiteMain: React.FC<React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>> = ({
  children,
  ...props
}) => {
  return (
    <Box backgroundColor="colorBackgroundBody" position="relative" {...props}>
      {children}
    </Box>
  );
};
