import * as React from 'react';
import { Box } from '@twilio-paste/box';
import type { HTMLPasteProps } from '@twilio-paste/types';

export const PageContentWrapper: React.FC<React.PropsWithChildren<HTMLPasteProps<'div'>>> = ({
  children,
  ...props
}) => {
  return (
    <Box
      element="PAGE_CONTENT_WRAPPER"
      paddingTop={['space100', 'space140', 'space200']}
      paddingX={['space70', 'space200', 'space200']}
      backgroundColor="colorBackgroundBody"
      marginX="auto"
      maxWidth="size100"
      boxSizing="content-box"
      {...props}
    >
      {children}
    </Box>
  );
};
