import * as React from 'react';

import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import type {HTMLPasteProps} from '@twilio-paste/types';

export interface MediaBodyProps extends HTMLPasteProps<'div'>, Pick<BoxProps, 'as' | 'element'> {
  children: NonNullable<React.ReactNode>;
}

const MediaBody = React.forwardRef<HTMLElement, MediaBodyProps>(
  ({as = 'span', children, element = 'MEDIA_BODY', ...props}, ref) => {
    return (
      <Box {...safelySpreadBoxProps(props)} as={as} element={element} flex={1} minWidth="size0" ref={ref}>
        {children}
      </Box>
    );
  }
);

MediaBody.displayName = 'MediaBody';

export {MediaBody};
